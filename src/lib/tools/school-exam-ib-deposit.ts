/** School exam / IB / checkpoint deposit sketch for leavers — orientation, not handbook advice */

export const SCHOOL_EXAM_IB_DEPOSIT_LAST_REVIEWED = "2026-09-15";
export const SCHOOL_EXAM_IB_DEPOSIT_NOTE =
  "Exam sitting fees, IB / IGCSE deposits, and checkpoint holds differ by school handbook. This sketch only totals deposit return hope vs forfeit / admin / late-cancel fees so packing week keeps a float.";

export type ExamIbDepositMode = "full-refund" | "partial-hold" | "full-forfeit";

export type SchoolExamIbDepositInputs = {
  mode: ExamIbDepositMode;
  /** Refundable exam / IB / checkpoint deposit hope (SGD) */
  depositSgd: number;
  /** Unavoidable sitting / registration fee already spent (SGD) */
  sittingFeeSgd: number;
  /** Admin / transcript / cancel fee (SGD) */
  adminFeeSgd: number;
  /** Late-cancel or no-show penalty (SGD) */
  lateCancelSgd: number;
  /** Weeks until published refund window closes */
  weeksToRefundClose: number;
};

export type SchoolExamIbDepositResult = {
  mode: ExamIbDepositMode;
  cashInSgd: number;
  cashOutSgd: number;
  netSketchSgd: number;
  weeksToRefundClose: number;
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

const VALID_MODES: ExamIbDepositMode[] = [
  "full-refund",
  "partial-hold",
  "full-forfeit",
];

function clampWeeks(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.min(52, Math.floor(n));
}

export function estimateSchoolExamIbDeposit(
  inputs: SchoolExamIbDepositInputs,
): SchoolExamIbDepositResult {
  const mode = VALID_MODES.includes(inputs.mode)
    ? inputs.mode
    : "full-refund";
  const depositSgd = money(inputs.depositSgd);
  const sittingFeeSgd = money(inputs.sittingFeeSgd);
  const adminFeeSgd = money(inputs.adminFeeSgd);
  const lateCancelSgd = money(inputs.lateCancelSgd);
  const weeksToRefundClose = clampWeeks(inputs.weeksToRefundClose);

  let cashInSgd = 0;
  let cashOutSgd = money(sittingFeeSgd + adminFeeSgd);

  if (mode === "full-refund") {
    cashInSgd = depositSgd;
    cashOutSgd = money(sittingFeeSgd + adminFeeSgd);
  } else if (mode === "partial-hold") {
    const hold = money(Math.min(depositSgd, lateCancelSgd + adminFeeSgd));
    cashInSgd = money(Math.max(0, depositSgd - hold));
    // Hold comes out of the deposit (cashIn). Only sitting fees and
    // penalties above the deposit are extra cash out.
    cashOutSgd = money(
      sittingFeeSgd + Math.max(0, lateCancelSgd + adminFeeSgd - depositSgd),
    );
  } else {
    // Forfeit: deposit kept (no cash in); sitting + admin + penalties billed.
    cashInSgd = 0;
    cashOutSgd = money(sittingFeeSgd + adminFeeSgd + lateCancelSgd);
  }

  const netSketchSgd = signed(cashInSgd - cashOutSgd);

  const labels: Record<ExamIbDepositMode, string> = {
    "full-refund": "On-time cancel · deposit hope",
    "partial-hold": "Late window · partial hold",
    "full-forfeit": "After deadline / no-show forfeit",
  };

  let headline = `${labels[mode]} · net sketch ${netSketchSgd} SGD`;
  let note = SCHOOL_EXAM_IB_DEPOSIT_NOTE;
  if (mode === "full-refund" && weeksToRefundClose <= 2) {
    headline += ` · refund window nearly closed`;
    note =
      "Published refund windows can close before flights — get cashier confirmation in writing before you treat the deposit as recoverable.";
  } else if (mode === "full-forfeit") {
    note =
      "Full forfeit paths still leave sitting fees and admin invoices. Confirm whether transcripts or remark fees are billed separately.";
  } else if (mode === "partial-hold" && lateCancelSgd > depositSgd) {
    note =
      "Late-cancel penalties above the deposit may invoice the family separately — keep a float until the school closes the ticket.";
  }

  return {
    mode,
    cashInSgd,
    cashOutSgd,
    netSketchSgd,
    weeksToRefundClose,
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
