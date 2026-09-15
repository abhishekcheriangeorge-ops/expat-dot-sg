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

function clampMonths(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.min(12, Math.floor(n));
}

export function estimateTuitionCentreBond(
  inputs: TuitionCentreBondInputs,
): TuitionCentreBondResult {
  const mode = inputs.mode;
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
    cashInSgd = money(bondSgd + Math.max(0, unusedPackageSgd - noticeDues));
    cashOutSgd = money(noticeFeeSgd + materialsHoldSgd + noticeDues);
  } else {
    cashInSgd = 0;
    cashOutSgd = money(
      bondSgd + unusedPackageSgd + noticeFeeSgd + materialsHoldSgd,
    );
  }

  const netSketchSgd = money(cashInSgd - cashOutSgd);

  const labels: Record<TuitionBondMode, string> = {
    "full-refund": "Full bond + unused package hope",
    "notice-partial": "Bond kept · notice eats unused package",
    "forfeit-package": "Bond + package forfeit sketch",
  };

  let headline = `${labels[mode]} · net sketch ${netSketchSgd} SGD`;
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
