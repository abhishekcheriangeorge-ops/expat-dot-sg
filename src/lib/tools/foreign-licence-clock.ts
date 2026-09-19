/** Foreign driving licence conversion clock sketch — orientation, not SPF/TP advice */
import { todaySgt } from "./_today.ts";


export const FOREIGN_LICENCE_LAST_REVIEWED = "2026-09-15";
export const FOREIGN_LICENCE_NOTE =
  "Which window applies to you depends on your status, not on how long you have been here. Traffic Police publish three separate ones: 12 months of residence before a foreigner must convert, 6 months from work-pass issue if you drive for work, and 3 months from getting Singapore citizenship or PR. This sketch only counts calendar days from the start date you give it — confirm your own case with Traffic Police before you drive.";

/** SPF Traffic Police page these windows are taken from. */
export const FOREIGN_LICENCE_SOURCE =
  "https://www.police.gov.sg/Knowledge-Hub/Traffic/Traffic-Matters/Singapore-Driving-Licence";

/**
 * Windows as Traffic Police publish them, not as forums repeat them.
 *
 * Previously this offered "From pass issue · 12 months", which does not exist —
 * the pass-issue rule is 6 months and applies to people who drive for work. It
 * also called 6 months "folklore" when it is SPF's own figure, and omitted the
 * 3-month window for new citizens and PRs entirely.
 */
export const LICENCE_WINDOW_PRESETS = [
  {
    id: "arrive-12",
    label: "Foreigner resident here · 12 months",
    months: 12,
  },
  {
    id: "work-6",
    label: "Driving for work · 6 months from pass issue",
    months: 6,
  },
  { id: "newsc-3", label: "New Singapore citizen or PR · 3 months", months: 3 },
  { id: "custom", label: "Custom months", months: 12 },
] as const;

export type LicenceWindowId = (typeof LICENCE_WINDOW_PRESETS)[number]["id"];

export type ForeignLicenceInputs = {
  /** Clock start date (YYYY-MM-DD) — arrival, first drive, or pass issue */
  startDate: string;
  windowId: LicenceWindowId;
  /** Override months when windowId is custom or you have a quoted figure */
  customMonths?: number;
  /** Optional target date you still want to be legal to drive (YYYY-MM-DD) */
  needToDriveUntil?: string;
};

export type ForeignLicenceResult = {
  startDate: string | null;
  deadline: string | null;
  windowLabel: string;
  months: number;
  daysRemaining: number | null;
  deadlinePassed: boolean;
  coversNeedUntil: boolean | null;
  headline: string;
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
  const target = new Date(Date.UTC(y, m, 1));
  const lastDay = new Date(
    Date.UTC(target.getUTCFullYear(), target.getUTCMonth() + 1, 0),
  ).getUTCDate();
  target.setUTCDate(Math.min(day, lastDay));
  return target;
}

function dayDiff(start: Date, end: Date): number {
  return Math.round((end.getTime() - start.getTime()) / 86_400_000);
}

export function estimateForeignLicenceClock(
  inputs: ForeignLicenceInputs,
): ForeignLicenceResult {
  const preset =
    LICENCE_WINDOW_PRESETS.find((p) => p.id === inputs.windowId) ??
    LICENCE_WINDOW_PRESETS[0];
  const months =
    inputs.customMonths != null &&
    Number.isFinite(inputs.customMonths) &&
    inputs.customMonths > 0
      ? Math.min(36, Math.floor(inputs.customMonths))
      : preset.months;
  const start = parseYmd(inputs.startDate);
  const needUntil =
    typeof inputs.needToDriveUntil === "string" &&
    inputs.needToDriveUntil.trim()
      ? parseYmd(inputs.needToDriveUntil)
      : null;

  if (!start || months <= 0) {
    return {
      startDate: null,
      deadline: null,
      windowLabel: preset.label,
      months,
      daysRemaining: null,
      deadlinePassed: false,
      coversNeedUntil: null,
      headline: "Enter a valid start date and positive month window",
      note: FOREIGN_LICENCE_NOTE,
    };
  }

  const deadline = addMonths(start, months);
  const daysRemaining = dayDiff(todaySgt(), deadline);
  const deadlinePassed = daysRemaining < 0;
  const coversNeedUntil =
    needUntil != null ? needUntil.getTime() <= deadline.getTime() : null;

  const windowLabel =
    inputs.customMonths != null &&
    Number.isFinite(inputs.customMonths) &&
    inputs.customMonths > 0
      ? `Custom · ${months} months`
      : preset.label;

  let headline = deadlinePassed
    ? "Sketched conversion / foreign-drive window already past"
    : `Sketched deadline ${formatYmd(deadline)} · ${daysRemaining} days left`;
  let note = FOREIGN_LICENCE_NOTE;
  if (coversNeedUntil === false) {
    headline =
      "Need-to-drive date sits after the sketched deadline — convert or stop driving plans";
  } else if (!deadlinePassed && daysRemaining <= 45) {
    note =
      "Under ~45 days left on this sketch — book BTT / conversion slots before movers week or leave flights eat the calendar.";
  }

  return {
    startDate: formatYmd(start),
    deadline: formatYmd(deadline),
    windowLabel,
    months,
    daysRemaining,
    deadlinePassed,
    coversNeedUntil,
    headline,
    note,
  };
}
