/** Mobile postpaid contract ETF float sketch for leavers — orientation, not telco advice */

export const MOBILE_CONTRACT_ETF_FLOAT_LAST_REVIEWED = "2026-09-15";
export const MOBILE_CONTRACT_ETF_FLOAT_NOTE =
  "Postpaid ETF, handset balances, and final-bill rules differ by telco and plan. This sketch only totals remaining contract months, quoted ETF, device payoff, and final-bill cash so packing week keeps a float — not a contract reading.";

export type MobileContractEtfMode =
  | "ride-contract"
  | "early-etf"
  | "port-out";

export type MobileContractEtfFloatInputs = {
  mode: MobileContractEtfMode;
  /** Months still left on the service contract */
  monthsLeft: number;
  /** Monthly plan fee (SGD) */
  monthlyFeeSgd: number;
  /** Quoted early-termination fee (SGD) */
  etfSgd: number;
  /** Remaining handset / device instalment balance (SGD) */
  deviceBalanceSgd: number;
  /** Final-bill / admin / port fee still quoted (SGD) */
  finalBillSgd: number;
};

export type MobileContractEtfFloatResult = {
  mode: MobileContractEtfMode;
  monthsLeft: number;
  cashOutSgd: number;
  netSketchSgd: number;
  etfSgd: number;
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

export function estimateMobileContractEtfFloat(
  inputs: MobileContractEtfFloatInputs,
): MobileContractEtfFloatResult {
  const mode = inputs.mode;
  const monthsLeft = clampMonths(inputs.monthsLeft);
  const monthlyFeeSgd = money(inputs.monthlyFeeSgd);
  const etfSgd = money(inputs.etfSgd);
  const deviceBalanceSgd = money(inputs.deviceBalanceSgd);
  const finalBillSgd = money(inputs.finalBillSgd);

  const rideCost = money(monthlyFeeSgd * monthsLeft);

  let cashOutSgd = 0;
  if (mode === "ride-contract") {
    cashOutSgd = money(rideCost + deviceBalanceSgd);
  } else if (mode === "early-etf") {
    cashOutSgd = money(etfSgd + deviceBalanceSgd + finalBillSgd);
  } else {
    // port-out — often ETF-like clawback plus port / admin plus device
    cashOutSgd = money(etfSgd + deviceBalanceSgd + finalBillSgd);
  }

  const netSketchSgd = money(0 - cashOutSgd);

  const labels: Record<MobileContractEtfMode, string> = {
    "ride-contract": "Ride out remaining contract",
    "early-etf": "Early terminate · pay ETF",
    "port-out": "Port-out / number move",
  };

  let headline = `${labels[mode]} · cash-out sketch ${cashOutSgd} SGD`;
  let note = MOBILE_CONTRACT_ETF_FLOAT_NOTE;
  if (mode === "early-etf" && etfSgd === 0 && monthsLeft > 0) {
    note =
      "A zero ETF quote with months left still needs written telco confirmation — app folklore is not a waiver.";
  } else if (mode === "port-out") {
    note =
      "Port-out can still trigger device and plan clawbacks. Confirm whether the new carrier’s port ticket changes the ETF clock.";
  } else if (mode === "ride-contract" && monthsLeft >= 6) {
    headline += ` · ${monthsLeft} months still on the clock`;
  }

  return {
    mode,
    monthsLeft,
    cashOutSgd,
    netSketchSgd,
    etfSgd,
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
