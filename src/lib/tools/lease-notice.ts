/** Diplomatic / early-exit notice sketch — contractual norms, not legal advice */

export const LEASE_NOTICE_LAST_REVIEWED = "2026-09-15";
export const DEFAULT_LOCK_IN_MONTHS = 12;
export const DEFAULT_NOTICE_MONTHS = 2;
export const COMMON_LEASE_MONTHS = [12, 24] as const;

export type LeaseNoticeInputs = {
  /** Lease commencement (YYYY-MM-DD) */
  leaseStart: string;
  /** Total contracted lease length in months */
  leaseMonths: number;
  /** Months before diplomatic clause can be served (often 12 on a 24-mo TA) */
  lockInMonths: number;
  /** Written notice length in months (often 2) */
  noticeMonths: number;
  /** When you hope to hand back keys (YYYY-MM-DD) */
  targetEnd: string;
};

export type LeaseNoticeResult = {
  leaseStart: string | null;
  leaseEnd: string | null;
  earliestServe: string | null;
  earliestExit: string | null;
  targetEnd: string | null;
  canServeByTarget: boolean;
  lockInClearedByTarget: boolean;
  monthsShortOfLockIn: number;
  noticeOk: boolean;
  formulaLabel: string;
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

/** Add whole calendar months in UTC, clamping day-of-month overflow. */
function addMonths(dt: Date, months: number): Date {
  const y = dt.getUTCFullYear();
  const m = dt.getUTCMonth() + months;
  const day = dt.getUTCDate();
  const end = new Date(Date.UTC(y, m + 1, 0));
  const clamped = Math.min(day, end.getUTCDate());
  return new Date(Date.UTC(y, m, clamped));
}

function monthsBetween(start: Date, end: Date): number {
  const years = end.getUTCFullYear() - start.getUTCFullYear();
  const months = end.getUTCMonth() - start.getUTCMonth();
  let total = years * 12 + months;
  if (end.getUTCDate() < start.getUTCDate()) total -= 1;
  return Math.max(0, total);
}

export function estimateLeaseNotice(
  inputs: LeaseNoticeInputs,
): LeaseNoticeResult {
  const start = parseYmd(inputs.leaseStart);
  const target = parseYmd(inputs.targetEnd);
  const leaseMonths = Math.max(1, Math.floor(inputs.leaseMonths));
  const lockInMonths = Math.max(0, Math.floor(inputs.lockInMonths));
  const noticeMonths = Math.max(0, Math.floor(inputs.noticeMonths));

  if (!start || !target) {
    return {
      leaseStart: null,
      leaseEnd: null,
      earliestServe: null,
      earliestExit: null,
      targetEnd: null,
      canServeByTarget: false,
      lockInClearedByTarget: false,
      monthsShortOfLockIn: lockInMonths,
      noticeOk: false,
      formulaLabel: "Enter valid lease start and target end dates.",
      note: "Diplomatic clauses are contractual — read your TA; this is only a date sketch.",
    };
  }

  const leaseEnd = addMonths(start, leaseMonths);
  const earliestServe = addMonths(start, lockInMonths);
  const earliestExit = addMonths(earliestServe, noticeMonths);
  const elapsedByTarget = monthsBetween(start, target);
  const lockInClearedByTarget = elapsedByTarget >= lockInMonths;
  const monthsShortOfLockIn = Math.max(0, lockInMonths - elapsedByTarget);

  // Serve date must be ≥ earliestServe and exit = serve + notice ≤ target? 
  // Actually: to exit on targetEnd, you must serve by (targetEnd - noticeMonths),
  // and that serve date must be ≥ earliestServe.
  const latestServeForTarget = addMonths(target, -noticeMonths);
  const noticeOk =
    latestServeForTarget.getTime() >= earliestServe.getTime() &&
    target.getTime() >= earliestExit.getTime();
  const canServeByTarget =
    lockInClearedByTarget &&
    latestServeForTarget.getTime() >= earliestServe.getTime() &&
    target.getTime() <= leaseEnd.getTime();

  let note: string;
  if (target.getTime() > leaseEnd.getTime()) {
    note =
      "Target end is after the contracted lease end — you may be looking at natural expiry or a renewal, not a diplomatic exit.";
  } else if (!lockInClearedByTarget) {
    note = `Lock-in of ${lockInMonths} month(s) is not cleared by the target end — you are about ${monthsShortOfLockIn} month(s) short on this sketch. Early exit without a valid clause usually means remaining rent risk plus commission clawback folklore.`;
  } else if (!noticeOk) {
    note = `Lock-in clears, but ${noticeMonths} month(s) of written notice does not fit before the target hand-back. Serve earlier, or move the exit date.`;
  } else {
    note = `On a common ${leaseMonths}-month TA with ${lockInMonths}+${noticeMonths} diplomatic terms, this target end fits the sketch — still confirm trigger proof (pass cancel / relocation letter) in your signed clause.`;
  }

  return {
    leaseStart: formatYmd(start),
    leaseEnd: formatYmd(leaseEnd),
    earliestServe: formatYmd(earliestServe),
    earliestExit: formatYmd(earliestExit),
    targetEnd: formatYmd(target),
    canServeByTarget: canServeByTarget && noticeOk,
    lockInClearedByTarget,
    monthsShortOfLockIn,
    noticeOk,
    formulaLabel: `${lockInMonths} mo lock-in + ${noticeMonths} mo notice on a ${leaseMonths} mo lease`,
    note,
  };
}
