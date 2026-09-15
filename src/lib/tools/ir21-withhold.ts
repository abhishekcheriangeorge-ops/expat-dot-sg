/** IR21 employer tax-clearance withhold sketch — orientation, not IRAS advice */

export const IR21_WITHHOLD_LAST_REVIEWED = "2026-09-15";
export const IR21_WITHHOLD_NOTE =
  "Form IR21 clearance timelines vary by employer payroll and IRAS processing. This sketch only counts calendar days from a planned cessation date across common withhold windows — confirm with HR and IRAS, not this tool.";

export const IR21_WINDOW_PRESETS = [
  { id: "fast", label: "Optimistic · ~14 days", days: 14 },
  { id: "typical", label: "Typical · ~30 days", days: 30 },
  { id: "slow", label: "Slow / complex · ~45 days", days: 45 },
  { id: "long", label: "Extended · ~60 days", days: 60 },
] as const;

export type Ir21WindowId = (typeof IR21_WINDOW_PRESETS)[number]["id"];

export type Ir21WithholdInputs = {
  /** Planned last day of employment (YYYY-MM-DD) */
  cessationDate: string;
  windowId: Ir21WindowId;
  /** Optional override clear days if HR already quoted a number */
  customDays?: number;
  /** Monthly net SGD to sketch as cash at risk while withheld */
  monthlyNet?: number;
};

export type Ir21WithholdResult = {
  cessationDate: string | null;
  windowId: Ir21WindowId;
  windowLabel: string;
  clearDays: number;
  estimatedRelease: string | null;
  daysUntilRelease: number | null;
  monthlyNet: number;
  cashAtRisk: number;
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

export function estimateIr21Withhold(
  inputs: Ir21WithholdInputs,
): Ir21WithholdResult {
  const preset =
    IR21_WINDOW_PRESETS.find((p) => p.id === inputs.windowId) ??
    IR21_WINDOW_PRESETS[1];
  const clearDays =
    inputs.customDays != null && inputs.customDays > 0
      ? Math.floor(inputs.customDays)
      : preset.days;
  const cessation = parseYmd(inputs.cessationDate);
  const monthlyNet = Math.max(0, Number(inputs.monthlyNet) || 0);
  // Rough: up to one month net may be held pending Directive — sketch only
  const cashAtRisk = Math.round(monthlyNet * 100) / 100;

  if (!cessation || clearDays <= 0) {
    return {
      cessationDate: null,
      windowId: preset.id,
      windowLabel: preset.label,
      clearDays,
      estimatedRelease: null,
      daysUntilRelease: null,
      monthlyNet,
      cashAtRisk,
      note: "Enter a valid cessation date and a positive clearance window in days.",
    };
  }

  const release = addDays(cessation, clearDays);
  const daysUntil = dayDiff(todayUtc(), release);
  let note = IR21_WITHHOLD_NOTE;
  if (daysUntil < 0) {
    note =
      "The sketched release date is already past relative to today — ask HR whether the Directive / release has been issued or is still stuck.";
  } else if (clearDays >= 45) {
    note =
      "Longer windows are common when IR21 is filed late, there are equity / director fees, or IRAS queries the form. Build rent and utility float beyond one payroll cycle.";
  }

  return {
    cessationDate: formatYmd(cessation),
    windowId: preset.id,
    windowLabel:
      inputs.customDays != null && inputs.customDays > 0
        ? `Custom · ${clearDays} days`
        : preset.label,
    clearDays,
    estimatedRelease: formatYmd(release),
    daysUntilRelease: daysUntil,
    monthlyNet,
    cashAtRisk,
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
