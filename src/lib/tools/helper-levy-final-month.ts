/** Helper / FDW final-month levy sketch for leavers — orientation, not MOM advice */

export const HELPER_LEVY_FINAL_MONTH_LAST_REVIEWED = "2026-09-15";
export const HELPER_LEVY_FINAL_MONTH_NOTE =
  "FDW levy concession, waiver windows, and transfer timing differ by MOM rules and employer status. This sketch only totals final-month levy, levy-waiver gaps, and transfer / cancellation admin so packing week keeps a float — not a MOM filing.";

export type HelperLevyMode = "keep-through-month" | "mid-month-cancel" | "transfer-out";

export type HelperLevyFinalMonthInputs = {
  mode: HelperLevyMode;
  /** Monthly levy normally due (SGD) */
  monthlyLevySgd: number;
  /** Days the helper remains employed in the final calendar month */
  daysEmployed: number;
  /** Days in that calendar month */
  daysInMonth: number;
  /** Admin / transfer / cancellation fee (SGD) */
  adminFeeSgd: number;
  /** Lost concession / waiver clawback if any (SGD) */
  waiverClawbackSgd: number;
};

export type HelperLevyFinalMonthResult = {
  mode: HelperLevyMode;
  proRataLevySgd: number;
  cashOutSgd: number;
  netSketchSgd: number;
  daysEmployed: number;
  headline: string;
  note: string;
};

function money(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.round(n);
}

/** Signed rounding for nets — a negative float is the point of the sketch */
function signed(n: number): number {
  if (!Number.isFinite(n)) return 0;
  return Math.round(n);
}

const VALID_MODES: HelperLevyMode[] = [
  "keep-through-month",
  "mid-month-cancel",
  "transfer-out",
];

function clampDays(n: number, max: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.min(max, Math.floor(n));
}

export function estimateHelperLevyFinalMonth(
  inputs: HelperLevyFinalMonthInputs,
): HelperLevyFinalMonthResult {
  const mode = VALID_MODES.includes(inputs.mode)
    ? inputs.mode
    : "keep-through-month";
  const monthlyLevySgd = money(inputs.monthlyLevySgd);
  const daysInMonth = Math.max(28, Math.min(31, Math.floor(inputs.daysInMonth || 30)));
  const daysEmployed = clampDays(inputs.daysEmployed, daysInMonth);
  const adminFeeSgd = money(inputs.adminFeeSgd);
  const waiverClawbackSgd = money(inputs.waiverClawbackSgd);

  let proRataLevySgd = 0;
  if (mode === "keep-through-month") {
    proRataLevySgd = monthlyLevySgd;
  } else if (mode === "mid-month-cancel") {
    proRataLevySgd = money((monthlyLevySgd * daysEmployed) / daysInMonth);
  } else {
    // transfer-out: often still owes through transfer day + admin
    proRataLevySgd = money((monthlyLevySgd * daysEmployed) / daysInMonth);
  }

  const cashOutSgd = money(proRataLevySgd + adminFeeSgd + waiverClawbackSgd);
  const netSketchSgd = signed(0 - cashOutSgd);

  const labels: Record<HelperLevyMode, string> = {
    "keep-through-month": "Keep helper through month-end",
    "mid-month-cancel": "Cancel mid-month · pro-rata levy",
    "transfer-out": "Transfer out · levy through transfer day",
  };

  let headline = `${labels[mode]} · cash-out sketch ${cashOutSgd} SGD`;
  let note = HELPER_LEVY_FINAL_MONTH_NOTE;
  if (mode === "keep-through-month" && waiverClawbackSgd > 0) {
    headline += ` · waiver clawback bites`;
    note =
      "Keeping the helper through month-end can still trigger waiver clawback if concession status changes — confirm before you treat the month as “already paid.”";
  } else if (mode === "mid-month-cancel" && daysEmployed >= daysInMonth - 2) {
    note =
      "Cancelling in the last days of the month rarely saves a full levy cycle — re-price against keep-through-month before you file.";
  } else if (mode === "transfer-out") {
    note =
      "Transfer timelines and who pays levy on transfer day are employer-specific. Get the transfer date in writing before you sketch the float.";
  }

  return {
    mode,
    proRataLevySgd,
    cashOutSgd,
    netSketchSgd,
    daysEmployed,
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
