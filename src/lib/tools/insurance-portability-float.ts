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

function clampDays(n: number): number {
  if (!Number.isFinite(n) || n < 1) return 1;
  return Math.min(180, Math.floor(n));
}

export function estimateInsurancePortability(
  inputs: InsurancePortabilityInputs,
): InsurancePortabilityResult {
  const mode = inputs.mode;
  const gapDays = clampDays(inputs.gapDays);
  const extendCostSgd = money(inputs.extendCostSgd);
  const bridgeCostSgd = money(inputs.bridgeCostSgd);
  const cancelFeeSgd = money(inputs.cancelFeeSgd);
  const destinationStartSgd = money(inputs.destinationStartSgd);

  const costs: Record<InsurancePortMode, number> = {
    "extend-sg": money(extendCostSgd),
    "gap-bridge": money(bridgeCostSgd + cancelFeeSgd * 0.25),
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

  if (gapDays <= 21 && costs["gap-bridge"] <= costs["extend-sg"] + 80) {
    recommended = "gap-bridge";
    best = costs["gap-bridge"];
  }
  if (gapDays >= 60 && costs["cancel-and-start"] < costs["extend-sg"]) {
    recommended = "cancel-and-start";
    best = costs["cancel-and-start"];
  }

  const pathCostSgd = costs[mode];
  const altCostSgd = costs[recommended];
  const savingsVsAltSgd = money(pathCostSgd - altCostSgd);

  const labels: Record<InsurancePortMode, string> = {
    "extend-sg": "Extend Singapore cover for the gap",
    "gap-bridge": "Short bridge / travel medical",
    "cancel-and-start": "Cancel SG · start destination cover",
  };

  let headline = `${labels[mode]} · sketch ${pathCostSgd} SGD over ${gapDays} days`;
  let note = INSURANCE_PORTABILITY_NOTE;
  if (mode !== recommended) {
    headline += ` · cheaper sketch: ${labels[recommended]}`;
  }
  if (mode === "gap-bridge" && gapDays >= 45) {
    note =
      "Long bridge periods often cost more than a clean destination start — re-price if the gap stretches past six weeks.";
  } else if (mode === "cancel-and-start" && gapDays <= 14) {
    note =
      "Very short gaps can be cheaper on an extend or bridge path — confirm waiting periods before you cancel Singapore cover.";
  } else if (mode === "extend-sg") {
    note =
      "Extensions may not follow you overseas. Confirm territorial limits before you treat this as destination cover.";
  }

  return {
    mode,
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
