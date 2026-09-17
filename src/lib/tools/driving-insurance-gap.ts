/** Driving insurance gap sketch for leavers / bus-cancel weeks — orientation, not insurer advice */

export const DRIVING_INSURANCE_LAST_REVIEWED = "2026-09-15";
export const DRIVING_INSURANCE_NOTE =
  "Motor policies, named-driver rules, and overseas cover differ by insurer. This sketch only totals gap days × daily risk float plus short-trip add-on hope so CCA self-drive weeks stay funded.";

export type InsuranceGapMode = "extend-local" | "daily-float" | "drop-and-grab";

export type DrivingInsuranceInputs = {
  mode: InsuranceGapMode;
  /** Days you still need to drive after current cover / bus ends */
  gapDays: number;
  /** Rough daily self-drive risk float (fuel, parking, deductibles sketch) SGD */
  dailyFloatSgd: number;
  /** Cost to extend local policy for the gap (SGD) */
  extendCostSgd: number;
  /** Grab / taxi budget for the same gap if you stop driving (SGD) */
  grabBudgetSgd: number;
  /** One-time named-driver / short-term add-on (SGD) */
  addonSgd: number;
};

export type DrivingInsuranceResult = {
  mode: InsuranceGapMode;
  gapDays: number;
  pathCostSgd: number;
  altCostSgd: number;
  savingsVsAltSgd: number;
  recommended: InsuranceGapMode;
  headline: string;
  note: string;
};

function money(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.round(n);
}

/** Signed rounding for savings — a negative means the path beats the alt */
function signed(n: number): number {
  if (!Number.isFinite(n)) return 0;
  return Math.round(n);
}

function clampDays(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.min(180, Math.floor(n));
}

const VALID_MODES: InsuranceGapMode[] = [
  "extend-local",
  "daily-float",
  "drop-and-grab",
];

export function estimateDrivingInsuranceGap(
  inputs: DrivingInsuranceInputs,
): DrivingInsuranceResult {
  const gapDays = clampDays(inputs.gapDays);
  const dailyFloatSgd = money(inputs.dailyFloatSgd);
  const extendCostSgd = money(inputs.extendCostSgd);
  const grabBudgetSgd = money(inputs.grabBudgetSgd);
  const addonSgd = money(inputs.addonSgd);

  const costs: Record<InsuranceGapMode, number> = {
    "extend-local": money(extendCostSgd + addonSgd),
    "daily-float": money(dailyFloatSgd * gapDays + addonSgd),
    "drop-and-grab": money(grabBudgetSgd),
  };

  let recommended: InsuranceGapMode = "extend-local";
  let best = costs["extend-local"];
  (Object.keys(costs) as InsuranceGapMode[]).forEach((key) => {
    if (costs[key] < best) {
      best = costs[key];
      recommended = key;
    }
  });

  const mode = VALID_MODES.includes(inputs.mode)
    ? inputs.mode
    : "extend-local";
  const pathCostSgd = costs[mode];
  const altCostSgd = costs[recommended];
  const savingsVsAltSgd = signed(pathCostSgd - altCostSgd);

  const labels: Record<InsuranceGapMode, string> = {
    "extend-local": "Extend local motor cover for the gap",
    "daily-float": "Self-drive on a daily risk float",
    "drop-and-grab": "Stop driving · Grab / taxi budget",
  };

  let headline = `${labels[mode]} · sketch ${pathCostSgd} SGD over ${gapDays} days`;
  let note = DRIVING_INSURANCE_NOTE;
  if (mode !== recommended) {
    headline += ` · cheaper sketch: ${labels[recommended]}`;
  }
  if (mode === "daily-float") {
    note =
      "A daily float is not insurance. Confirm named-driver status and deductibles before CCA week self-drive.";
  } else if (gapDays >= 45 && mode === "drop-and-grab") {
    note =
      "Long Grab-only gaps often exceed a short policy extension — re-price if CCA season stretches.";
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
