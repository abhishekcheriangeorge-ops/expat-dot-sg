/** Foreign driving licence conversion clock sketch — orientation, not SPF/TP advice */

export const FOREIGN_LICENCE_LAST_REVIEWED = "2026-09-15";
export const FOREIGN_LICENCE_NOTE =
  "Singapore rules for driving on a foreign licence and converting to a local one depend on citizenship, pass type, and which foreign licence you hold. This sketch only counts calendar days from a stated start date across common folklore windows — confirm on SPF / Traffic Police pages before you drive.";

export const LICENCE_WINDOW_PRESETS = [
  { id: "arrive-12", label: "From arrival · 12 months", months: 12 },
  { id: "pass-12", label: "From pass issue · 12 months", months: 12 },
  { id: "short-6", label: "Short stay folklore · 6 months", months: 6 },
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

function todayUtc(): Date {
  const now = new Date();
  return new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
  );
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
    inputs.customMonths != null && inputs.customMonths > 0
      ? Math.min(36, Math.floor(inputs.customMonths))
      : preset.months;
  const start = parseYmd(inputs.startDate);
  const needUntil = inputs.needToDriveUntil?.trim()
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
  const daysRemaining = dayDiff(todayUtc(), deadline);
  const deadlinePassed = daysRemaining < 0;
  const coversNeedUntil =
    needUntil != null ? needUntil.getTime() <= deadline.getTime() : null;

  const windowLabel =
    inputs.customMonths != null && inputs.customMonths > 0
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
