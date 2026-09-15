/** Fibre / broadband early-termination fee sketch — orientation, not ISP advice */

export const FIBRE_ETF_LAST_REVIEWED = "2026-09-15";
export const FIBRE_ETF_NOTE =
  "Fibre and broadband early-termination schedules differ by ISP and promo. This sketch only totals remaining contract months × monthly fee hope vs a stated ETF / reclaim so packing week keeps a float — not a bill.";

export type FibreEtfMode = "serve-notice" | "pay-etf" | "transfer-takeover";

export type FibreBroadbandInputs = {
  mode: FibreEtfMode;
  /** Months left on the fibre / broadband contract */
  monthsRemaining: number;
  /** Monthly plan fee (SGD) */
  monthlyFeeSgd: number;
  /** Stated early-termination / device reclaim fee (SGD) */
  etfSgd: number;
  /** Admin / transfer / relocation fee if someone takes over (SGD) */
  transferFeeSgd: number;
  /** Deposit / rebate reclaim the ISP may claw back (SGD) */
  rebateClawbackSgd: number;
};

export type FibreBroadbandResult = {
  mode: FibreEtfMode;
  monthsRemaining: number;
  pathCostSgd: number;
  altCostSgd: number;
  savingsVsAltSgd: number;
  recommended: FibreEtfMode;
  headline: string;
  note: string;
};

function money(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.round(n);
}

function clampMonths(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.min(36, Math.floor(n));
}

export function estimateFibreBroadbandEtf(
  inputs: FibreBroadbandInputs,
): FibreBroadbandResult {
  const mode = inputs.mode;
  const monthsRemaining = clampMonths(inputs.monthsRemaining);
  const monthlyFeeSgd = money(inputs.monthlyFeeSgd);
  const etfSgd = money(inputs.etfSgd);
  const transferFeeSgd = money(inputs.transferFeeSgd);
  const rebateClawbackSgd = money(inputs.rebateClawbackSgd);

  const serveCost = money(monthlyFeeSgd * monthsRemaining);
  const etfCost = money(etfSgd + rebateClawbackSgd);
  const transferCost = money(transferFeeSgd + rebateClawbackSgd);

  const costs: Record<FibreEtfMode, number> = {
    "serve-notice": serveCost,
    "pay-etf": etfCost,
    "transfer-takeover": transferCost,
  };

  let recommended: FibreEtfMode = "serve-notice";
  let best = costs["serve-notice"];
  (Object.keys(costs) as FibreEtfMode[]).forEach((key) => {
    if (costs[key] < best) {
      best = costs[key];
      recommended = key;
    }
  });

  // Short remnants often favour ETF; long remnants favour serve or transfer
  if (monthsRemaining <= 2 && costs["pay-etf"] <= costs["serve-notice"] + 40) {
    recommended = "pay-etf";
    best = costs["pay-etf"];
  }

  const pathCostSgd = costs[mode];
  const altCostSgd = costs[recommended];
  const savingsVsAltSgd = money(pathCostSgd - altCostSgd);

  const labels: Record<FibreEtfMode, string> = {
    "serve-notice": "Serve remaining months",
    "pay-etf": "Pay ETF + rebate clawback",
    "transfer-takeover": "Transfer / takeover fee path",
  };

  let headline = `${labels[mode]} · sketch ${pathCostSgd} SGD`;
  let note = FIBRE_ETF_NOTE;
  if (mode !== recommended) {
    headline += ` · cheaper sketch: ${labels[recommended]}`;
  }
  if (mode === "serve-notice" && monthsRemaining === 0) {
    note =
      "Zero months remaining — confirm the ISP’s final bill and ONT return before you cancel the bank GIRO.";
  } else if (mode === "transfer-takeover" && transferFeeSgd === 0) {
    note =
      "Transfer paths still need a willing incoming party and ISP approval. A $0 admin fee hope is not a confirmed takeover.";
  } else if (mode === "pay-etf" && rebateClawbackSgd > etfSgd) {
    note =
      "Rebate clawbacks can exceed the published ETF line — ask for a full early-exit quote in writing.";
  }

  return {
    mode,
    monthsRemaining,
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
