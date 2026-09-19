/** IRAS individual tax-residency day sketch — orientation, not a determination */

export const TAX_RESIDENCY_DAY_THRESHOLD = 183;
export const TAX_RESIDENCY_LAST_REVIEWED = "2026-09-15";
export const IRAS_TAX_RESIDENCY_URL =
  "https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-residency-and-tax-rates/working-out-my-tax-residency";
export const IRAS_REEMPLOYMENT_URL =
  "https://www.iras.gov.sg/taxes/individual-income-tax/employees/scenario-based-faqs-for-working-in-singapore-and-abroad/i-am-re-employed-in-singapore";

export type TaxResidencyInputs = {
  /** Calendar year to evaluate (e.g. 2025 for YA 2026’s 183-day test) */
  calendarYear: number;
  /** Inclusive presence start (YYYY-MM-DD) */
  presenceStart: string;
  /** Inclusive presence end (YYYY-MM-DD) */
  presenceEnd: string;
  /** Extra days outside Singapore that still count (optional; leave 0 if unsure) */
  creditedAwayDays: number;
};

export type TaxResidencyResult = {
  calendarYear: number;
  yearOfAssessment: number;
  daysCounted: number;
  daysShort: number;
  clears183: boolean;
  clampedStart: string | null;
  clampedEnd: string | null;
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

function inclusiveDays(start: Date, end: Date): number {
  if (end.getTime() < start.getTime()) return 0;
  const ms = end.getTime() - start.getTime();
  return Math.floor(ms / 86_400_000) + 1;
}

export function estimateTaxResidencyDays(
  inputs: TaxResidencyInputs,
): TaxResidencyResult {
  // Math.floor of a non-numeric year yields NaN, which then propagated into
  // the returned yearOfAssessment and rendered as "YA NaN".
  const rawYear = Math.floor(Number(inputs.calendarYear));
  const yearValid = Number.isFinite(rawYear) && rawYear >= 2000 && rawYear <= 2100;
  const year = yearValid ? rawYear : new Date().getUTCFullYear();
  const yearStart = new Date(Date.UTC(year, 0, 1));
  const yearEnd = new Date(Date.UTC(year, 11, 31));
  const start = parseYmd(inputs.presenceStart);
  const end = parseYmd(inputs.presenceEnd);

  // Number.isFinite first: a non-numeric year made both comparisons false, so
  // the guard passed and the Invalid Date downstream rendered as "YA NaN".
  if (!start || !end || !yearValid) {
    return {
      calendarYear: year,
      yearOfAssessment: year + 1,
      daysCounted: 0,
      daysShort: TAX_RESIDENCY_DAY_THRESHOLD,
      clears183: false,
      clampedStart: null,
      clampedEnd: null,
      note: "Enter valid YYYY-MM-DD presence dates inside a sensible calendar year.",
    };
  }

  const clampedStart =
    start.getTime() < yearStart.getTime() ? yearStart : start;
  const clampedEnd = end.getTime() > yearEnd.getTime() ? yearEnd : end;

  if (clampedEnd.getTime() < clampedStart.getTime()) {
    return {
      calendarYear: year,
      yearOfAssessment: year + 1,
      daysCounted: 0,
      daysShort: TAX_RESIDENCY_DAY_THRESHOLD,
      clears183: false,
      clampedStart: null,
      clampedEnd: null,
      note: "Presence window does not overlap this calendar year.",
    };
  }

  const present = inclusiveDays(clampedStart, clampedEnd);
  const credited = Math.max(0, Math.floor(inputs.creditedAwayDays));
  const daysCounted = present + credited;
  const clears183 = daysCounted >= TAX_RESIDENCY_DAY_THRESHOLD;
  const daysShort = Math.max(0, TAX_RESIDENCY_DAY_THRESHOLD - daysCounted);

  return {
    calendarYear: year,
    yearOfAssessment: year + 1,
    daysCounted,
    daysShort,
    clears183,
    clampedStart: formatYmd(clampedStart),
    clampedEnd: formatYmd(clampedEnd),
    note: clears183
      ? `Sketch clears the common ≥${TAX_RESIDENCY_DAY_THRESHOLD}-day calendar-year test for YA ${year + 1}. IRAS also has continuous 3-year and straddling-employment concessions — confirm on the official page.`
      : `Sketch is ${daysShort} day(s) short of ${TAX_RESIDENCY_DAY_THRESHOLD} in ${year}. Arrival/departure days usually count; temporary work-related absences may still count — this tool does not decide them for you.`,
  };
}
