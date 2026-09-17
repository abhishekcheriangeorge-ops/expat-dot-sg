/** MOM IPA enter-and-issue window sketch — orientation, not advice */

export const IPA_ENTER_ISSUE_MONTHS = 6;
export const IPA_NOTIFICATION_LETTER_DAYS = 30;
export const IPA_EXTENSION_LEAD_WEEKS = 2;
export const IPA_WINDOW_LAST_REVIEWED = "2026-09-15";
export const MOM_EP_APPLY_URL =
  "https://www.mom.gov.sg/passes-and-permits/employment-pass/apply-for-a-pass";
export const MOM_IPA_EXTEND_URL =
  "https://www.mom.gov.sg/faq/work-pass-general/how-do-i-extend-the-validity-of-an-in-principle-approval-ipa";

export type IpaWindowInputs = {
  /** IPA approval / letter date (YYYY-MM-DD) */
  ipaDate: string;
  /** Planned Singapore entry date (YYYY-MM-DD) */
  entryDate: string;
  /** Planned pass issuance date (YYYY-MM-DD); often same week as entry */
  issueDate: string;
};

export type IpaWindowResult = {
  ipaDate: string | null;
  deadline: string | null;
  entryDate: string | null;
  issueDate: string | null;
  daysUntilDeadline: number | null;
  entryInsideWindow: boolean;
  issueInsideWindow: boolean;
  extensionLeadDate: string | null;
  formulaLabel: string;
  note: string;
};

function parseYmd(ymd: string): Date | null {
  if (typeof ymd !== "string") return null;
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

function addMonths(dt: Date, months: number): Date {
  const y = dt.getUTCFullYear();
  const m = dt.getUTCMonth() + months;
  const day = dt.getUTCDate();
  const end = new Date(Date.UTC(y, m + 1, 0));
  const clamped = Math.min(day, end.getUTCDate());
  return new Date(Date.UTC(y, m, clamped));
}

function addDays(dt: Date, days: number): Date {
  return new Date(dt.getTime() + days * 86_400_000);
}

function wholeDaysBetween(from: Date, to: Date): number {
  return Math.floor((to.getTime() - from.getTime()) / 86_400_000);
}

function todayUtc(): Date {
  const now = new Date();
  return new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
  );
}

export function estimateIpaWindow(inputs: IpaWindowInputs): IpaWindowResult {
  const ipa = parseYmd(inputs.ipaDate);
  const entry = parseYmd(inputs.entryDate);
  const issue = parseYmd(inputs.issueDate);

  if (!ipa || !entry || !issue) {
    return {
      ipaDate: null,
      deadline: null,
      entryDate: null,
      issueDate: null,
      daysUntilDeadline: null,
      entryInsideWindow: false,
      issueInsideWindow: false,
      extensionLeadDate: null,
      formulaLabel: "Enter valid IPA, entry, and issuance dates.",
      note: "MOM’s EP IPA normally gives six months to enter Singapore and get the pass issued — confirm the dates printed on your letter.",
    };
  }

  const deadline = addMonths(ipa, IPA_ENTER_ISSUE_MONTHS);
  const extensionLeadDate = addDays(deadline, -IPA_EXTENSION_LEAD_WEEKS * 7);
  const entryInsideWindow =
    entry.getTime() >= ipa.getTime() && entry.getTime() <= deadline.getTime();
  const issueInsideWindow =
    issue.getTime() >= ipa.getTime() && issue.getTime() <= deadline.getTime();
  // Days left from today; the entry→deadline span stays in the note below.
  const daysUntilDeadline = wholeDaysBetween(todayUtc(), deadline);
  const entryToDeadline = wholeDaysBetween(entry, deadline);

  let note: string;
  if (!entryInsideWindow || !issueInsideWindow) {
    note = `Entry and/or issuance sit outside the common ${IPA_ENTER_ISSUE_MONTHS}-month IPA window ending ${formatYmd(deadline)}. Ask the employer about an IPA extension (≥${IPA_EXTENSION_LEAD_WEEKS} weeks before expiry) or re-application — do not assume the letter still works.`;
  } else if (entryToDeadline < 21) {
    note = `You are inside the window, but only about ${Math.max(0, entryToDeadline)} day(s) remain after entry until ${formatYmd(deadline)}. Sequence medicals, issuance payment, and card registration immediately; notification letters after issuance are typically valid ~${IPA_NOTIFICATION_LETTER_DAYS} days.`;
  } else {
    note = `On a common EP IPA sketch, enter and issue by ${formatYmd(deadline)}. After issuance, the notification letter usually lets work and travel continue for about ${IPA_NOTIFICATION_LETTER_DAYS} days while the card prints. Extension requests: aim before ${formatYmd(extensionLeadDate)}.`;
  }

  return {
    ipaDate: formatYmd(ipa),
    deadline: formatYmd(deadline),
    entryDate: formatYmd(entry),
    issueDate: formatYmd(issue),
    daysUntilDeadline,
    entryInsideWindow,
    issueInsideWindow,
    extensionLeadDate: formatYmd(extensionLeadDate),
    formulaLabel: `${IPA_ENTER_ISSUE_MONTHS}-month enter-and-issue window from IPA date`,
    note,
  };
}
