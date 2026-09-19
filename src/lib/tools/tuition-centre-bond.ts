/** Tuition centre bond / package exit sketch — orientation, not centre advice */

export const TUITION_BOND_LAST_REVIEWED = "2026-09-15";
export const TUITION_BOND_NOTE =
  "Tuition and enrichment centres set their own deposit, package, and notice rules. This sketch only totals bond return hope vs remaining package months, notice fees, and material holds so packing week keeps a float.";

export type TuitionBondMode = "full-refund" | "notice-partial" | "forfeit-package";

export type TuitionCentreBondInputs = {
  mode: TuitionBondMode;
  /** Refundable enrolment / caution bond hope (SGD) */
  bondSgd: number;
  /** Unused prepaid package value still on account (SGD) */
  unusedPackageSgd: number;
  /** Notice / admin fee on early exit (SGD) */
  noticeFeeSgd: number;
  /** Materials / workbook hold or non-return fee (SGD) */
  materialsHoldSgd: number;
  /** Months of notice still owed at monthly package rate */
  noticeMonths: number;
  /** Monthly package rate used for notice months (SGD) */
  monthlyPackageSgd: number;
};

export type TuitionCentreBondResult = {
  mode: TuitionBondMode;
  cashInSgd: number;
  cashOutSgd: number;
  netSketchSgd: number;
  noticeMonths: number;
  headline: string;
  note: string;
};

function money(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.round(n);
}

/** Signed rounding for nets — a negative float is the point of the sketch */
function signed(n: number): number {
  if (!Number.isFinite(n)) return 0;
  return Math.round(n);
}

const VALID_MODES: TuitionBondMode[] = [
  "full-refund",
  "notice-partial",
  "forfeit-package",
];

function clampMonths(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.min(12, Math.floor(n));
}

export function estimateTuitionCentreBond(
  inputs: TuitionCentreBondInputs,
): TuitionCentreBondResult {
  const mode = VALID_MODES.includes(inputs.mode)
    ? inputs.mode
    : "full-refund";
  const bondSgd = money(inputs.bondSgd);
  const unusedPackageSgd = money(inputs.unusedPackageSgd);
  const noticeFeeSgd = money(inputs.noticeFeeSgd);
  const materialsHoldSgd = money(inputs.materialsHoldSgd);
  const noticeMonths = clampMonths(inputs.noticeMonths);
  const monthlyPackageSgd = money(inputs.monthlyPackageSgd);
  const noticeDues = money(noticeMonths * monthlyPackageSgd);

  let cashInSgd = 0;
  let cashOutSgd = money(noticeFeeSgd + materialsHoldSgd);

  if (mode === "full-refund") {
    cashInSgd = money(bondSgd + unusedPackageSgd);
    cashOutSgd = money(noticeFeeSgd + materialsHoldSgd);
  } else if (mode === "notice-partial") {
    // Notice dues are netted against unused credits once, never charged twice.
    // Anything the credits do not cover is still owed, so it has to land in
    // cash-out: clamping it to zero silently forgave the residual and could
    // report money coming back while the parent was out of pocket.
    const noticeResidual = Math.max(0, noticeDues - unusedPackageSgd);
    cashInSgd = money(bondSgd + Math.max(0, unusedPackageSgd - noticeDues));
    cashOutSgd = money(noticeFeeSgd + materialsHoldSgd + noticeResidual);
  } else {
    // Forfeit: bond + package kept (no cash in); notice dues may still bill.
    cashInSgd = 0;
    cashOutSgd = money(noticeFeeSgd + materialsHoldSgd + noticeDues);
  }

  const netSketchSgd = signed(cashInSgd - cashOutSgd);

  const labels: Record<TuitionBondMode, string> = {
    "full-refund": "Full bond + unused package hope",
    "notice-partial": "Bond kept · notice eats unused package",
    "forfeit-package": "Bond + package forfeit sketch",
  };

  const headline = `${labels[mode]} · net sketch ${netSketchSgd} SGD`;
  let note = TUITION_BOND_NOTE;
  if (mode === "full-refund" && noticeMonths > 0) {
    note =
      "Even “full refund” paths can still bill notice months — confirm whether unused package credits offset notice dues.";
  } else if (mode === "forfeit-package") {
    note =
      "Forfeit paths treat prepaid packages as lost. Ask for a written statement before you assume zero recovery.";
  } else if (mode === "notice-partial" && noticeDues > unusedPackageSgd) {
    note =
      "Notice dues can exceed unused package credits — keep a float until the centre closes the account.";
  }

  return {
    mode,
    cashInSgd,
    cashOutSgd,
    netSketchSgd,
    noticeMonths,
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
