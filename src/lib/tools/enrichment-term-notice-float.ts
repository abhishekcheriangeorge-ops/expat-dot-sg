/** Enrichment term-notice float sketch for leavers — orientation, not studio advice */

export const ENRICHMENT_TERM_NOTICE_FLOAT_LAST_REVIEWED = "2026-09-15";
export const ENRICHMENT_TERM_NOTICE_FLOAT_NOTE =
  "Private music, swim, ballet, and coaching studios set their own notice windows and remaining-term rules. This sketch only totals lessons still owed, notice shortfalls, and early-exit fees so packing week keeps a float — not a contract reading.";

export type EnrichmentTermNoticeMode =
  | "ride-term"
  | "notice-short"
  | "early-exit";

export type EnrichmentTermNoticeFloatInputs = {
  mode: EnrichmentTermNoticeMode;
  /** Lessons still left in the paid term */
  lessonsLeft: number;
  /** Fee per lesson (SGD) */
  feePerLessonSgd: number;
  /** Notice lessons still short of the handbook window */
  noticeLessonsShort: number;
  /** Flat early-exit / admin fee (SGD) */
  earlyExitFeeSgd: number;
  /** Sibling / second-seat fee still on the term (SGD) */
  siblingFeeSgd: number;
};

export type EnrichmentTermNoticeFloatResult = {
  mode: EnrichmentTermNoticeMode;
  lessonsLeft: number;
  cashOutSgd: number;
  netSketchSgd: number;
  noticeLessonsShort: number;
  headline: string;
  note: string;
};

function money(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.round(n);
}

function clampLessons(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.min(60, Math.floor(n));
}

export function estimateEnrichmentTermNoticeFloat(
  inputs: EnrichmentTermNoticeFloatInputs,
): EnrichmentTermNoticeFloatResult {
  const mode = inputs.mode;
  const lessonsLeft = clampLessons(inputs.lessonsLeft);
  const feePerLessonSgd = money(inputs.feePerLessonSgd);
  const noticeLessonsShort = clampLessons(inputs.noticeLessonsShort);
  const earlyExitFeeSgd = money(inputs.earlyExitFeeSgd);
  const siblingFeeSgd = money(inputs.siblingFeeSgd);

  const rideCost = money(feePerLessonSgd * lessonsLeft);
  const noticeBite = money(feePerLessonSgd * noticeLessonsShort);

  let cashOutSgd = 0;
  if (mode === "ride-term") {
    cashOutSgd = money(rideCost + siblingFeeSgd);
  } else if (mode === "notice-short") {
    cashOutSgd = money(noticeBite + earlyExitFeeSgd + siblingFeeSgd);
  } else {
    cashOutSgd = money(rideCost + earlyExitFeeSgd + siblingFeeSgd);
  }

  const netSketchSgd = money(0 - cashOutSgd);

  const labels: Record<EnrichmentTermNoticeMode, string> = {
    "ride-term": "Ride out remaining term",
    "notice-short": "Notice shortfall exit",
    "early-exit": "Early exit / forfeit term",
  };

  let headline = `${labels[mode]} · cash-out sketch ${cashOutSgd} SGD`;
  let note = ENRICHMENT_TERM_NOTICE_FLOAT_NOTE;
  if (mode === "notice-short" && noticeLessonsShort === 0 && earlyExitFeeSgd === 0) {
    note =
      "A clean notice with no shortfall still needs written studio acknowledgement — screenshots beat verbal “ok stop Monday.”";
  } else if (mode === "early-exit") {
    note =
      "Early-exit terms often bill remaining lessons plus admin. Confirm whether sibling seats continue after the primary seat stops.";
  } else if (mode === "ride-term" && lessonsLeft >= 8) {
    headline += ` · ${lessonsLeft} lessons still on the clock`;
  }

  return {
    mode,
    lessonsLeft,
    cashOutSgd,
    netSketchSgd,
    noticeLessonsShort,
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
