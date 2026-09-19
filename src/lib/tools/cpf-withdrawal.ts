/** CPF withdrawal timing sketch for leavers — orientation, not CPF Board advice */
import { todaySgt } from "./_today.ts";


export const CPF_WITHDRAWAL_LAST_REVIEWED = "2026-09-15";
export const CPF_WITHDRAWAL_NOTE =
  "CPF withdrawal rules depend on citizenship / PR status, age, property pledges, and scheme history. This sketch only counts calendar days from a planned departure across common processing windows — confirm on the live CPF Board site before you rely on funds.";

export const CPF_WINDOW_PRESETS = [
  { id: "docs", label: "Docs ready · ~14 days", days: 14 },
  { id: "typical", label: "Typical leavers · ~30 days", days: 30 },
  { id: "complex", label: "Property / pledge checks · ~45 days", days: 45 },
  { id: "slow", label: "Queries / incomplete · ~60 days", days: 60 },
] as const;

export type CpfWindowId = (typeof CPF_WINDOW_PRESETS)[number]["id"];

export type CpfWithdrawalInputs = {
  /** Planned Singapore departure (YYYY-MM-DD) */
  departureDate: string;
  windowId: CpfWindowId;
  /** Optional override processing days if CPF already quoted */
  customDays?: number;
  /** Rough OA+SA balance you hope to unlock (SGD) — sketch only */
  balanceSketch?: number;
};

export type CpfWithdrawalResult = {
  departureDate: string | null;
  windowId: CpfWindowId;
  windowLabel: string;
  processDays: number;
  /** Suggested application date = departure − processDays */
  applyBy: string | null;
  daysUntilApplyBy: number | null;
  balanceSketch: number;
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

function addDays(dt: Date, days: number): Date {
  return new Date(dt.getTime() + days * 86_400_000);
}

function dayDiff(start: Date, end: Date): number {
  return Math.round((end.getTime() - start.getTime()) / 86_400_000);
}

export function estimateCpfWithdrawal(
  inputs: CpfWithdrawalInputs,
): CpfWithdrawalResult {
  const preset =
    CPF_WINDOW_PRESETS.find((p) => p.id === inputs.windowId) ??
    CPF_WINDOW_PRESETS[1];
  const processDays =
    inputs.customDays != null &&
    Number.isFinite(inputs.customDays) &&
    inputs.customDays > 0
      ? Math.min(365, Math.floor(inputs.customDays))
      : preset.days;
  const departure = parseYmd(inputs.departureDate);
  const balanceSketch = Math.max(0, Number(inputs.balanceSketch) || 0);

  // processDays is floored elsewhere, so a fractional window like 0.5 used to
  // pass this guard and then become 0, sending a perfectly valid departure
  // date into the invalid-date branch.
  const windowInvalid = !Number.isFinite(processDays) || processDays < 1;
  if (!departure || windowInvalid) {
    return {
      departureDate: null,
      windowId: preset.id,
      windowLabel: preset.label,
      processDays,
      applyBy: null,
      daysUntilApplyBy: null,
      balanceSketch,
      // Name the input that is actually wrong. Telling someone their departure
      // date is invalid when the real problem is a half-day processing window
      // sends them looking in the wrong place.
      note: !departure
        ? "Enter a departure date in YYYY-MM-DD format."
        : "Processing window must be at least 1 whole day.",
    };
  }

  const applyBy = addDays(departure, -processDays);
  const daysUntil = dayDiff(todaySgt(), applyBy);

  let note = CPF_WITHDRAWAL_NOTE;
  if (daysUntil < 0) {
    note =
      "The sketched apply-by date is already past — start the CPF withdrawal / closure conversation immediately and do not assume funds clear before you fly.";
  } else if (processDays >= 45) {
    note =
      "Longer windows are common with property pledges, outstanding home loans, or incomplete overseas bank details. Keep a separate SGD float for flights and pet freight.";
  }

  return {
    departureDate: formatYmd(departure),
    windowId: preset.id,
    windowLabel:
      inputs.customDays != null &&
      Number.isFinite(inputs.customDays) &&
      inputs.customDays > 0
        ? `Custom · ${processDays} days`
        : preset.label,
    processDays,
    applyBy: formatYmd(applyBy),
    daysUntilApplyBy: daysUntil,
    balanceSketch,
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
