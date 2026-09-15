/** Mid-year international school deposit / fee clawback sketch — orientation, not school advice */

export const SCHOOL_DEPOSIT_LAST_REVIEWED = "2026-09-15";
export const SCHOOL_DEPOSIT_NOTE =
  "Enrolment contracts differ by school. This sketch only applies a simple forfeiture fraction to a stated deposit and remaining tuition — re-read the parent handbook before you resign or book flights.";

export type ClawbackMode = "full-forfeit" | "pro-rata-term" | "notice-protected";

export type SchoolDepositInputs = {
  /** Enrolment / caution deposit held by the school (SGD) */
  depositSgd: number;
  /** Remaining billed tuition for the current term / year (SGD) */
  remainingTuitionSgd: number;
  /** How the contract typically treats mid-year exit */
  mode: ClawbackMode;
  /**
   * Fraction of deposit kept by school on early exit (0–1).
   * Used for full-forfeit and as the unearned slice for pro-rata-term.
   */
  forfeitFraction: number;
  /**
   * Fraction of the term still remaining (0–1) when leaving mid-term.
   * Only used for pro-rata-term mode.
   */
  termRemainingFraction: number;
  /** Whether contractual notice was met (affects notice-protected mode) */
  noticeMet: boolean;
};

export type SchoolDepositResult = {
  depositSgd: number;
  remainingTuitionSgd: number;
  mode: ClawbackMode;
  depositAtRiskSgd: number;
  tuitionAtRiskSgd: number;
  totalAtRiskSgd: number;
  refundSketchSgd: number;
  headline: string;
  note: string;
};

function clamp01(n: number): number {
  if (!Number.isFinite(n)) return 0;
  return Math.min(1, Math.max(0, n));
}

function money(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.round(n);
}

export function estimateSchoolDepositClawback(
  inputs: SchoolDepositInputs,
): SchoolDepositResult {
  const depositSgd = money(inputs.depositSgd);
  const remainingTuitionSgd = money(inputs.remainingTuitionSgd);
  const forfeitFraction = clamp01(inputs.forfeitFraction);
  const termRemainingFraction = clamp01(inputs.termRemainingFraction);
  const mode = inputs.mode;

  let depositAtRisk = 0;
  let tuitionAtRisk = 0;
  let headline = "";
  let note = SCHOOL_DEPOSIT_NOTE;

  if (mode === "full-forfeit") {
    depositAtRisk = money(depositSgd * forfeitFraction);
    tuitionAtRisk = remainingTuitionSgd;
    headline =
      forfeitFraction >= 0.99
        ? "Sketch treats the deposit as fully at risk plus remaining tuition"
        : "Sketch applies a partial deposit forfeit plus remaining tuition";
  } else if (mode === "pro-rata-term") {
    depositAtRisk = money(depositSgd * forfeitFraction * termRemainingFraction);
    tuitionAtRisk = money(remainingTuitionSgd * termRemainingFraction);
    headline =
      "Sketch pro-rates deposit risk and remaining tuition to the unearned term slice";
    note =
      "Pro-rata maths are a planning aid only — many handbooks still bill full-term fees after a cut-off date.";
  } else {
    // notice-protected
    if (inputs.noticeMet) {
      depositAtRisk = 0;
      tuitionAtRisk = money(remainingTuitionSgd * 0.25);
      headline =
        "Notice met — sketch assumes deposit returns; light tuition tail may still bill";
      note =
        "Even with notice met, some schools keep a term-fee slice or admin fee. Confirm in writing.";
    } else {
      depositAtRisk = money(depositSgd * Math.max(forfeitFraction, 0.5));
      tuitionAtRisk = remainingTuitionSgd;
      headline =
        "Notice missed — sketch keeps a large deposit slice plus remaining tuition at risk";
    }
  }

  const totalAtRiskSgd = money(depositAtRisk + tuitionAtRisk);
  const refundSketchSgd = money(depositSgd - depositAtRisk);

  return {
    depositSgd,
    remainingTuitionSgd,
    mode,
    depositAtRiskSgd: depositAtRisk,
    tuitionAtRiskSgd: tuitionAtRisk,
    totalAtRiskSgd,
    refundSketchSgd,
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
