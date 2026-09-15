/** Club resignation / deposit exit sketch — orientation, not club advice */

export const CLUB_DEPOSIT_LAST_REVIEWED = "2026-09-15";
export const CLUB_DEPOSIT_NOTE =
  "Club resignation notice, entrance-fee refunds, and subscription cut-offs differ by constitution. This sketch only totals deposit return hope vs remaining dues and notice months so you can float cash while packing.";

export type ClubExitMode = "full-refund" | "partial-refund" | "forfeit-dues";

export type ClubDepositInputs = {
  mode: ClubExitMode;
  /** Refundable deposit / entrance fee hope (SGD) */
  depositSgd: number;
  /** Monthly subscription still owed through notice (SGD) */
  monthlyDuesSgd: number;
  /** Notice months required before resignation completes */
  noticeMonths: number;
  /** Admin / transfer / resignation fee (SGD) */
  adminFeeSgd: number;
  /** Months of prepaid dues already paid that may be lost */
  prepaidMonthsBurn: number;
};

export type ClubDepositResult = {
  mode: ClubExitMode;
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
  return Math.min(24, Math.floor(n));
}

export function estimateClubDepositExit(
  inputs: ClubDepositInputs,
): ClubDepositResult {
  const mode = inputs.mode;
  const depositSgd = money(inputs.depositSgd);
  const monthlyDuesSgd = money(inputs.monthlyDuesSgd);
  const noticeMonths = clampMonths(inputs.noticeMonths);
  const adminFeeSgd = money(inputs.adminFeeSgd);
  const prepaidMonthsBurn = clampMonths(inputs.prepaidMonthsBurn);

  const duesThroughNotice = money(monthlyDuesSgd * noticeMonths);
  const prepaidBurn = money(monthlyDuesSgd * prepaidMonthsBurn);

  let cashIn = 0;
  let cashOut = money(adminFeeSgd + duesThroughNotice + prepaidBurn);
  let headline = "";
  let note = CLUB_DEPOSIT_NOTE;

  if (mode === "full-refund") {
    cashIn = depositSgd;
    headline =
      "Full-refund sketch — deposit returns after notice; still price dues + admin";
  } else if (mode === "partial-refund") {
    cashIn = money(depositSgd * 0.5);
    headline =
      "Partial-refund sketch — half deposit hope after notice and admin";
    note =
      "Many clubs keep a slice of entrance fees. Confirm the resignation schedule in the constitution before you rely on a 50% hope.";
  } else {
    cashIn = 0;
    cashOut = money(cashOut + depositSgd);
    headline =
      "Forfeit sketch — treat deposit as lost and still clear notice dues";
    note =
      "Some resignations forfeit entrance deposits when notice is short or transfer rules are missed. Get the club’s written outcome.";
  }

  const netSketchSgd = Math.round(cashIn - cashOut);

  return {
    mode,
    cashInSgd: cashIn,
    cashOutSgd: cashOut,
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
