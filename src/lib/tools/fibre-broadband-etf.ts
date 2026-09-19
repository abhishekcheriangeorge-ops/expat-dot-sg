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

function signed(n: number): number {
  if (!Number.isFinite(n)) return 0;
  return Math.round(n);
}

function clampMonths(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.min(36, Math.floor(n));
}

export function estimateFibreBroadbandEtf(
  inputs: FibreBroadbandInputs,
): FibreBroadbandResult {
  const monthsRemaining = clampMonths(inputs.monthsRemaining);
  const monthlyFeeSgd = money(inputs.monthlyFeeSgd);
  const etfSgd = money(inputs.etfSgd);
  const transferFeeSgd = money(inputs.transferFeeSgd);
  const rebateClawbackSgd = money(inputs.rebateClawbackSgd);

  const serveCost = money(monthlyFeeSgd * monthsRemaining);
  const etfCost = money(etfSgd + rebateClawbackSgd);
  // The clawback sits on the ETF path ("Pay ETF + rebate clawback"), which is
  // also how the page describes the comparison. Adding it here too made the
  // transfer path contradict its own label.
  const transferCost = money(transferFeeSgd);

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

  // Recommend the true minimum — the notes below cover remnant-specific nuance.
  const validMode =
    inputs.mode === "serve-notice" ||
    inputs.mode === "pay-etf" ||
    inputs.mode === "transfer-takeover"
      ? inputs.mode
      : "serve-notice";
  const pathCostSgd = costs[validMode];
  const altCostSgd = costs[recommended];
  const savingsVsAltSgd = signed(pathCostSgd - altCostSgd);

  const labels: Record<FibreEtfMode, string> = {
    "serve-notice": "Serve remaining months",
    "pay-etf": "Pay ETF + rebate clawback",
    "transfer-takeover": "Transfer / takeover fee path",
  };

  let headline = `${labels[validMode]} · sketch ${pathCostSgd} SGD`;
  let note = FIBRE_ETF_NOTE;
  if (validMode !== recommended) {
    headline += ` · cheaper sketch: ${labels[recommended]}`;
  }
  if (validMode === "serve-notice" && monthsRemaining === 0) {
    note =
      "Zero months remaining — confirm the ISP’s final bill and ONT return before you cancel the bank GIRO.";
  } else if (validMode === "transfer-takeover" && transferFeeSgd === 0) {
    note =
      "Transfer paths still need a willing incoming party and ISP approval. A $0 admin fee hope is not a confirmed takeover.";
  } else if (validMode === "pay-etf" && rebateClawbackSgd > etfSgd) {
    note =
      "Rebate clawbacks can exceed the published ETF line — ask for a full early-exit quote in writing.";
  }

  return {
    mode: validMode,
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
