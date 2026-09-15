/** HDB / renovation permit deposit return sketch — orientation, not HDB advice */

export const HDB_RENO_DEPOSIT_LAST_REVIEWED = "2026-09-15";
export const HDB_RENO_DEPOSIT_NOTE =
  "HDB and town-council renovation deposit rules differ by works type and inspection outcome. This sketch only models hold periods and partial forfeit so you can float cash while mail-forwarding the refund cheque.";

export type RenoOutcome = "clean-pass" | "minor-defects" | "major-forfeit";

export type HdbRenoDepositInputs = {
  /** Deposit lodged with HDB / TC / MCST for works (SGD) */
  depositSgd: number;
  /** Expected hold / processing days after reinstatement inspection */
  holdDays: number;
  /** Inspection / reinstatement date (YYYY-MM-DD) */
  inspectionDate: string;
  outcome: RenoOutcome;
  /** Extra admin / make-good costs if defects (SGD) */
  defectCostSgd: number;
};

export type HdbRenoDepositResult = {
  depositSgd: number;
  holdDays: number;
  inspectionDate: string | null;
  expectedRefundDate: string | null;
  daysUntilRefund: number | null;
  refundSketchSgd: number;
  atRiskSgd: number;
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

function addDays(dt: Date, days: number): Date {
  return new Date(dt.getTime() + days * 86_400_000);
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

function money(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.round(n);
}

export function estimateHdbRenoDeposit(
  inputs: HdbRenoDepositInputs,
): HdbRenoDepositResult {
  const depositSgd = money(inputs.depositSgd);
  const holdDays = Math.min(
    365,
    Math.max(0, Math.floor(Number(inputs.holdDays) || 0)),
  );
  const defectCostSgd = money(inputs.defectCostSgd);
  const inspection = parseYmd(inputs.inspectionDate);
  const outcome = inputs.outcome;

  let refundSketchSgd = depositSgd;
  let atRiskSgd = 0;
  let headline = "";
  let note = HDB_RENO_DEPOSIT_NOTE;

  if (outcome === "clean-pass") {
    refundSketchSgd = depositSgd;
    atRiskSgd = 0;
    headline = "Clean-pass sketch — full deposit return after hold window";
  } else if (outcome === "minor-defects") {
    atRiskSgd = Math.min(depositSgd, money(defectCostSgd || depositSgd * 0.25));
    refundSketchSgd = money(depositSgd - atRiskSgd);
    headline =
      "Minor-defects sketch — partial deposit retained for make-good / admin";
    note =
      "Defect lists and re-inspection loops stretch the hold window. Keep a mail-forward path until the cheque clears.";
  } else {
    atRiskSgd = depositSgd;
    refundSketchSgd = 0;
    headline =
      "Major-forfeit sketch — treat the full deposit as cash at risk";
    note =
      "Major non-compliance can consume the deposit and still leave make-good bills. Confirm with the permit office in writing.";
  }

  if (!inspection || holdDays < 0) {
    return {
      depositSgd,
      holdDays,
      inspectionDate: null,
      expectedRefundDate: null,
      daysUntilRefund: null,
      refundSketchSgd,
      atRiskSgd,
      headline: "Enter a valid inspection date and hold period in days",
      note: HDB_RENO_DEPOSIT_NOTE,
    };
  }

  const expected = addDays(inspection, holdDays);
  const daysUntilRefund = dayDiff(todayUtc(), expected);

  return {
    depositSgd,
    holdDays,
    inspectionDate: formatYmd(inspection),
    expectedRefundDate: formatYmd(expected),
    daysUntilRefund,
    refundSketchSgd,
    atRiskSgd,
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
