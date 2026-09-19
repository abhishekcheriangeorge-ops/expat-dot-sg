/** Insurance portability / gap-week float sketch — orientation, not insurer advice */

export const INSURANCE_PORTABILITY_LAST_REVIEWED = "2026-09-15";
export const INSURANCE_PORTABILITY_NOTE =
  "Life, health, home, and travel portability rules differ by insurer and destination. This sketch only totals short gap cover vs early cancel fees and destination start costs so packing week keeps a float — not a quote.";

export type InsurancePortMode =
  | "extend-sg"
  | "gap-bridge"
  | "cancel-and-start";

export type InsurancePortabilityInputs = {
  mode: InsurancePortMode;
  /** Days of cover still needed after Singapore cancel / move-out */
  gapDays: number;
  /** Cost to extend Singapore policies for the gap (SGD) */
  extendCostSgd: number;
  /** Short-term bridge / travel medical for the gap (SGD) */
  bridgeCostSgd: number;
  /** Early-cancel / unused-premium forfeit on Singapore policies (SGD) */
  cancelFeeSgd: number;
  /** Destination policy start / underwriting deposit (SGD) */
  destinationStartSgd: number;
};

export type InsurancePortabilityResult = {
  mode: InsurancePortMode;
  gapDays: number;
  pathCostSgd: number;
  altCostSgd: number;
  savingsVsAltSgd: number;
  recommended: InsurancePortMode;
  headline: string;
  note: string;
};

function money(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.round(n);
}

/** Signed rounding for nets and deltas — negatives carry meaning */
function signed(n: number): number {
  if (!Number.isFinite(n)) return 0;
  return Math.round(n);
}

function clampDays(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.min(180, Math.floor(n));
}

export function estimateInsurancePortability(
  inputs: InsurancePortabilityInputs,
): InsurancePortabilityResult {
  const gapDays = clampDays(inputs.gapDays);
  const extendCostSgd = money(inputs.extendCostSgd);
  const bridgeCostSgd = money(inputs.bridgeCostSgd);
  const cancelFeeSgd = money(inputs.cancelFeeSgd);
  const destinationStartSgd = money(inputs.destinationStartSgd);

  const costs: Record<InsurancePortMode, number> = {
    "extend-sg": money(extendCostSgd),
    // The bridge quote is the bridge cost. It previously carried 25% of the
    // early-cancel forfeit, which is a cost of the cancel-and-start path, not
    // this one — that handicap produced a number matching neither the quote nor
    // the true cash-out, and could recommend a path that is not the cheapest.
    "gap-bridge": money(bridgeCostSgd),
    "cancel-and-start": money(cancelFeeSgd + destinationStartSgd),
  };

  let recommended: InsurancePortMode = "extend-sg";
  let best = costs["extend-sg"];
  (Object.keys(costs) as InsurancePortMode[]).forEach((key) => {
    if (costs[key] < best) {
      best = costs[key];
      recommended = key;
    }
  });

  if (
    gapDays >= 60 &&
    costs["cancel-and-start"] < costs["extend-sg"] &&
    costs["cancel-and-start"] <= best
  ) {
    recommended = "cancel-and-start";
    best = costs["cancel-and-start"];
  }

  const validMode =
    inputs.mode === "extend-sg" ||
    inputs.mode === "gap-bridge" ||
    inputs.mode === "cancel-and-start"
      ? inputs.mode
      : "extend-sg";
  const pathCostSgd = costs[validMode];
  const altCostSgd = costs[recommended];
  const savingsVsAltSgd = signed(pathCostSgd - altCostSgd);

  const labels: Record<InsurancePortMode, string> = {
    "extend-sg": "Extend Singapore cover for the gap",
    "gap-bridge": "Short bridge / travel medical",
    "cancel-and-start": "Cancel SG · start destination cover",
  };

  let headline = `${labels[validMode]} · sketch ${pathCostSgd} SGD over ${gapDays} days`;
  let note = INSURANCE_PORTABILITY_NOTE;
  if (validMode !== recommended) {
    headline += ` · cheaper sketch: ${labels[recommended]}`;
  }
  if (validMode === "gap-bridge" && gapDays >= 45) {
    note =
      "Long bridge periods often cost more than a clean destination start — re-price if the gap stretches past six weeks.";
  } else if (validMode === "cancel-and-start" && gapDays <= 14) {
    note =
      "Very short gaps can be cheaper on an extend or bridge path — confirm waiting periods before you cancel Singapore cover.";
  } else if (validMode === "extend-sg") {
    note =
      "Extensions may not follow you overseas. Confirm territorial limits before you treat this as destination cover.";
  }

  return {
    mode: validMode,
    gapDays,
    pathCostSgd,
    altCostSgd,
    savingsVsAltSgd,
    recommended,
    headline,
    note,
  };
}

export function formatSgd(amount: number): string {
  return new Intl.NumberFormat("en-SG", {
    style: "currency",
    currency: "SGD",
    maximumFractionDigits: 0,
  }).format(amount);
}
