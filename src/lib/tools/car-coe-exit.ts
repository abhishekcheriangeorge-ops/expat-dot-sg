/** Car / COE exit cash sketch for leavers — orientation, not LTA or dealer advice */

export const CAR_COE_EXIT_LAST_REVIEWED = "2026-09-15";
export const CAR_COE_EXIT_NOTE =
  "PARF/COE rebate maths, overdue road tax, and dealer paperwork change. This sketch only totals rough cash in vs cash out so you can float deposit and flight money separately.";

export type CarCoeExitMode = "sell-local" | "export-scrap" | "transfer-keep";

export type CarCoeExitInputs = {
  mode: CarCoeExitMode;
  /** Expected sale / transfer proceeds (SGD) */
  saleProceedsSgd: number;
  /** Rough PARF + COE rebate you hope to unlock (SGD) — 0 if selling with rebate to buyer */
  rebateSketchSgd: number;
  /** Outstanding loan / HP balance (SGD) */
  loanBalanceSgd: number;
  /** Road tax, parking season, IU, admin, tow, export crate (SGD) */
  exitFeesSgd: number;
  /** Months of season parking / insurance still prepaid to burn or forfeit */
  prepaidMonths: number;
  prepaidMonthlySgd: number;
};

export type CarCoeExitResult = {
  mode: CarCoeExitMode;
  cashInSgd: number;
  cashOutSgd: number;
  netSketchSgd: number;
  prepaidBurnSgd: number;
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

export function estimateCarCoeExit(inputs: CarCoeExitInputs): CarCoeExitResult {
  const mode =
    inputs.mode === "sell-local" ||
    inputs.mode === "export-scrap" ||
    inputs.mode === "transfer-keep"
      ? inputs.mode
      : "sell-local";
  const saleProceedsSgd = money(inputs.saleProceedsSgd);
  const rebateSketchSgd = money(inputs.rebateSketchSgd);
  const loanBalanceSgd = money(inputs.loanBalanceSgd);
  const exitFeesSgd = money(inputs.exitFeesSgd);
  const prepaidMonths = clampMonths(inputs.prepaidMonths);
  const prepaidMonthlySgd = money(inputs.prepaidMonthlySgd);
  const prepaidBurnSgd = money(prepaidMonths * prepaidMonthlySgd);

  let cashIn = 0;
  let cashOut = money(loanBalanceSgd + exitFeesSgd + prepaidBurnSgd);
  let headline = "";
  let note = CAR_COE_EXIT_NOTE;

  if (mode === "sell-local") {
    cashIn = money(saleProceedsSgd + rebateSketchSgd);
    headline =
      "Local sale sketch — proceeds + rebate hope, minus loan, fees, and prepaid burn";
    note =
      "Many private sales transfer rebate value into the negotiated price. Do not double-count PARF/COE rebate and a “rebate-included” offer.";
  } else if (mode === "export-scrap") {
    cashIn = money(rebateSketchSgd + saleProceedsSgd);
    // Buffer only when the user typed real fees — never a phantom $500 on $0.
    cashOut = money(
      cashOut + (exitFeesSgd > 0 ? Math.max(500, Math.round(exitFeesSgd * 0.25)) : 0),
    );
    headline =
      "Export / scrap sketch — rebate-heavy; add logistics buffer on top of typed fees";
    note =
      "Export and scrap paths have LTA deregistration steps and shipping / scrapyard fees that dealers quote case-by-case.";
  } else {
    cashIn = money(saleProceedsSgd);
    cashOut = money(loanBalanceSgd + exitFeesSgd);
    headline =
      "Transfer / keep sketch — limited cash-in; still clear loan and admin before you fly";
    note =
      "Keeping a Singapore-registered car while abroad still needs road tax, insurance, and parking answers — this sketch only prices a clean transfer float.";
  }

  const netSketchSgd = Math.round(cashIn - cashOut);

  return {
    mode,
    cashInSgd: cashIn,
    cashOutSgd: cashOut,
    netSketchSgd,
    prepaidBurnSgd,
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
