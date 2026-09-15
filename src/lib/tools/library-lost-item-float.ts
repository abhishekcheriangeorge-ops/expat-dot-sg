/** Library lost-item float sketch for leavers — orientation, not NLB advice */

export const LIBRARY_LOST_ITEM_FLOAT_LAST_REVIEWED = "2026-09-15";
export const LIBRARY_LOST_ITEM_FLOAT_NOTE =
  "NLB and community-library overdue, lost-item, and replacement rules differ by title and membership type. This sketch only totals outstanding items, overdue days, and replacement fees so packing week keeps a float — not a fine notice or membership reading.";

export type LibraryLostItemMode =
  | "return-clear"
  | "overdue-pay"
  | "lost-replace";

export type LibraryLostItemFloatInputs = {
  mode: LibraryLostItemMode;
  /** Physical items still outstanding */
  itemsOutstanding: number;
  /** Overdue days on the oldest open loan */
  overdueDays: number;
  /** Per-day overdue fee sketch (SGD) */
  overduePerDaySgd: number;
  /** Replacement / lost-item fee per title (SGD) */
  replaceFeeSgd: number;
  /** Admin / processing fee still quoted (SGD) */
  adminFeeSgd: number;
};

export type LibraryLostItemFloatResult = {
  mode: LibraryLostItemMode;
  itemsOutstanding: number;
  cashOutSgd: number;
  netSketchSgd: number;
  overdueDays: number;
  headline: string;
  note: string;
};

function money(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.round(n);
}

function clampCount(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.min(40, Math.floor(n));
}

function clampDays(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.min(365, Math.floor(n));
}

export function estimateLibraryLostItemFloat(
  inputs: LibraryLostItemFloatInputs,
): LibraryLostItemFloatResult {
  const mode = inputs.mode;
  const itemsOutstanding = clampCount(inputs.itemsOutstanding);
  const overdueDays = clampDays(inputs.overdueDays);
  const overduePerDaySgd = money(inputs.overduePerDaySgd);
  const replaceFeeSgd = money(inputs.replaceFeeSgd);
  const adminFeeSgd = money(inputs.adminFeeSgd);

  const overdueBite = money(overduePerDaySgd * overdueDays * Math.max(1, itemsOutstanding || 1));
  const replaceBite = money(replaceFeeSgd * itemsOutstanding);

  let cashOutSgd = 0;
  if (mode === "return-clear") {
    cashOutSgd = money(adminFeeSgd);
  } else if (mode === "overdue-pay") {
    cashOutSgd = money(overdueBite + adminFeeSgd);
  } else {
    cashOutSgd = money(replaceBite + adminFeeSgd);
  }

  const netSketchSgd = money(0 - cashOutSgd);

  const labels: Record<LibraryLostItemMode, string> = {
    "return-clear": "Return / account clear",
    "overdue-pay": "Overdue pay-down",
    "lost-replace": "Lost / replacement",
  };

  let headline = `${labels[mode]} · cash-out sketch ${cashOutSgd} SGD`;
  let note = LIBRARY_LOST_ITEM_FLOAT_NOTE;
  if (mode === "return-clear" && itemsOutstanding === 0) {
    note =
      "A zero-loan screenshot still beats memory — confirm holds and child cards cleared before you treat the account as done.";
  } else if (mode === "lost-replace" && itemsOutstanding >= 3) {
    headline += ` · ${itemsOutstanding} titles still open`;
  } else if (mode === "overdue-pay" && overdueDays >= 30) {
    note =
      "Long overdue runs can tip into lost-item billing. Confirm whether paying overdue stops the replacement clock.";
  }

  return {
    mode,
    itemsOutstanding,
    cashOutSgd,
    netSketchSgd,
    overdueDays,
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
