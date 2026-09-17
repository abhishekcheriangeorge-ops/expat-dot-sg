/** Singapore mobile / OTP keep-vs-port sketch for leavers — orientation, not telco advice */

export const SIM_OTP_LAST_REVIEWED = "2026-09-15";
export const SIM_OTP_NOTE =
  "Telco contracts, number-port rules, and prepaid top-up floors change. This sketch only compares rough monthly keep costs vs a one-time port/replace path so OTP SMS for Singpass, banks, and IRAS stay reachable.";

export type SimStrategy = "keep-prepaid" | "keep-postpaid" | "port-out" | "drop-replace";

export type SimOtpInputs = {
  /** Months you still need a reachable +65 OTP channel */
  monthsNeeded: number;
  /** Monthly prepaid top-up / plan sketch (SGD) */
  prepaidMonthlySgd: number;
  /** Monthly postpaid bill sketch (SGD) */
  postpaidMonthlySgd: number;
  /** One-time port / admin / SIM replacement cost (SGD) */
  portOneTimeSgd: number;
  /** One-time cost to stand up a replacement overseas OTP path (SGD) */
  replaceOneTimeSgd: number;
  strategy: SimStrategy;
};

export type SimOtpResult = {
  monthsNeeded: number;
  strategy: SimStrategy;
  keepCostSgd: number;
  alternativeCostSgd: number;
  recommended: SimStrategy;
  savingsVsAltSgd: number;
  headline: string;
  note: string;
};

function money(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.round(n);
}

/** Signed rounding for deltas — negative means the path beats the alt */
function signed(n: number): number {
  if (!Number.isFinite(n)) return 0;
  return Math.round(n);
}

function clampMonths(n: number): number {
  if (!Number.isFinite(n) || n < 1) return 1;
  return Math.min(24, Math.floor(n));
}

export function estimateSimOtpKeep(inputs: SimOtpInputs): SimOtpResult {
  const monthsNeeded = clampMonths(inputs.monthsNeeded);
  const prepaidMonthlySgd = money(inputs.prepaidMonthlySgd);
  const postpaidMonthlySgd = money(inputs.postpaidMonthlySgd);
  const portOneTimeSgd = money(inputs.portOneTimeSgd);
  const replaceOneTimeSgd = money(inputs.replaceOneTimeSgd);

  const keepPrepaid = money(prepaidMonthlySgd * monthsNeeded);
  const keepPostpaid = money(postpaidMonthlySgd * monthsNeeded);
  const portPath = money(portOneTimeSgd + replaceOneTimeSgd * 0.25);
  const dropReplace = money(replaceOneTimeSgd);

  const costs: Record<SimStrategy, number> = {
    "keep-prepaid": keepPrepaid,
    "keep-postpaid": keepPostpaid,
    "port-out": portPath,
    "drop-replace": dropReplace,
  };

  let recommended: SimStrategy = "keep-prepaid";
  let best = keepPrepaid;
  (Object.keys(costs) as SimStrategy[]).forEach((key) => {
    if (costs[key] < best) {
      best = costs[key];
      recommended = key;
    }
  });

  const strategy: SimStrategy =
    inputs.strategy === "keep-prepaid" ||
    inputs.strategy === "keep-postpaid" ||
    inputs.strategy === "port-out" ||
    inputs.strategy === "drop-replace"
      ? inputs.strategy
      : "keep-prepaid";
  const keepCostSgd = costs[strategy];
  const alternativeCostSgd = costs[recommended];
  const savingsVsAltSgd = signed(keepCostSgd - alternativeCostSgd);

  const labels: Record<SimStrategy, string> = {
    "keep-prepaid": "Keep prepaid +65 for OTP months",
    "keep-postpaid": "Keep postpaid +65 for OTP months",
    "port-out": "Port / transfer number with one-time costs",
    "drop-replace": "Drop Singapore SIM and replace OTP path abroad",
  };

  let headline = `${labels[strategy]} · sketch ${money(keepCostSgd)} SGD over ${monthsNeeded} mo`;
  let note = SIM_OTP_NOTE;
  if (strategy !== recommended) {
    headline += ` · cheaper sketch path: ${labels[recommended]}`;
  }
  if (strategy === "drop-replace") {
    note =
      "Dropping the Singapore number often breaks Singpass SMS and bank OTP until you re-bind contacts — budget time, not only SGD.";
  } else if (monthsNeeded >= 6 && strategy === "keep-postpaid") {
    note =
      "Long postpaid keep can exceed a prepaid + occasional roam top-up. Re-check early termination fees on the signed plan.";
  }

  return {
    monthsNeeded,
    strategy,
    keepCostSgd,
    alternativeCostSgd,
    recommended,
    savingsVsAltSgd,
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
