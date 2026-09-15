/** International / private school withdrawal notice sketch — orientation, not legal advice */

export const SCHOOL_WITHDRAWAL_LAST_REVIEWED = "2026-09-15";
export const SCHOOL_WITHDRAWAL_NOTE =
  "Contracts differ by school. This sketch only subtracts notice weeks from your planned last attendance day — always re-read the parent handbook and signed enrolment terms.";

export type SchoolWithdrawalInputs = {
  /** Planned last day the child attends (YYYY-MM-DD) */
  lastAttendance: string;
  /** Contractual written-notice period in whole weeks */
  noticeWeeks: number;
  /** Optional term / fee period end (YYYY-MM-DD) for mid-term fee cue */
  termEnd?: string;
};

export type SchoolWithdrawalResult = {
  lastAttendance: string | null;
  noticeDeadline: string | null;
  noticeWeeks: number;
  daysUntilDeadline: number | null;
  deadlinePassed: boolean;
  midTermExit: boolean | null;
  note: string;
};

function parseYmd(ymd: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(ymd.trim());
  if (!m) return null;
  const y = Number(m[1]);
  const mo = Number(m[2]);
  const d = Number(m[3]);
  const dt = new Date(Date.UTC(y, mo - 1, d));
  if (
    dt.getUTCFullYear() !== y ||
    dt.getUTCMonth() !== mo - 1 ||
    dt.getUTCDate() !== d
  ) {
    return null;
  }
  return dt;
}

function formatYmd(dt: Date): string {
  const y = dt.getUTCFullYear();
  const mo = String(dt.getUTCMonth() + 1).padStart(2, "0");
  const d = String(dt.getUTCDate()).padStart(2, "0");
  return `${y}-${mo}-${d}`;
}

function todayUtc(): Date {
  const now = new Date();
  return new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
  );
}

function addDays(dt: Date, days: number): Date {
  return new Date(dt.getTime() + days * 86_400_000);
}

/** Inclusive calendar-day difference: end − start */
function dayDiff(start: Date, end: Date): number {
  return Math.round((end.getTime() - start.getTime()) / 86_400_000);
}

export function estimateSchoolWithdrawalNotice(
  inputs: SchoolWithdrawalInputs,
): SchoolWithdrawalResult {
  const weeks = Math.floor(inputs.noticeWeeks);
  const last = parseYmd(inputs.lastAttendance);
  const termEnd = inputs.termEnd?.trim()
    ? parseYmd(inputs.termEnd)
    : null;

  if (!last || weeks < 0 || weeks > 52) {
    return {
      lastAttendance: null,
      noticeDeadline: null,
      noticeWeeks: weeks,
      daysUntilDeadline: null,
      deadlinePassed: false,
      midTermExit: null,
      note: "Enter a valid last-attendance date and a notice period between 0 and 52 weeks.",
    };
  }

  const deadline = addDays(last, -(weeks * 7));
  const today = todayUtc();
  const daysUntil = dayDiff(today, deadline);
  const midTerm =
    termEnd != null ? dayDiff(last, termEnd) > 0 : null;

  let note = SCHOOL_WITHDRAWAL_NOTE;
  if (daysUntil < 0) {
    note =
      "The sketched written-notice deadline is already past relative to today. Ask the school what late-notice fee or term charge still applies — do not assume a refund.";
  } else if (midTerm === true) {
    note =
      "Last attendance falls before the term/fee end you entered — many schools still bill through the fee period after notice. Confirm in writing.";
  }

  return {
    lastAttendance: formatYmd(last),
    noticeDeadline: formatYmd(deadline),
    noticeWeeks: weeks,
    daysUntilDeadline: daysUntil,
    deadlinePassed: daysUntil < 0,
    midTermExit: midTerm,
    note,
  };
}
