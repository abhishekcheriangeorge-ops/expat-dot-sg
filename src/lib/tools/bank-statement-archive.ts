/** Bank statement archive sketch for leavers — orientation, not bank advice */

export const BANK_STATEMENT_ARCHIVE_LAST_REVIEWED = "2026-09-15";
export const BANK_STATEMENT_ARCHIVE_NOTE =
  "Bank e-statement retention, fee-based paper reprints, and overseas download windows differ by bank. This sketch only totals months to pull, reprint fees, and rush costs so packing week keeps a float — not a bank instruction.";

export type BankArchiveMode = "self-serve-pdf" | "branch-reprint" | "rush-courier";

export type BankStatementArchiveInputs = {
  mode: BankArchiveMode;
  /** Months of statements still needed */
  monthsNeeded: number;
  /** Months already downloaded / on hand */
  monthsOnHand: number;
  /** Per-statement reprint fee if any (SGD) */
  reprintFeeSgd: number;
  /** Rush / courier / branch admin fee (SGD) */
  rushFeeSgd: number;
  /** Weeks until account close or departure */
  weeksToClose: number;
};

export type BankStatementArchiveResult = {
  mode: BankArchiveMode;
  monthsGap: number;
  cashOutSgd: number;
  weeksToClose: number;
  headline: string;
  note: string;
};

function money(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.round(n);
}

/**
 * Per-unit rates (per day, per month, per statement) keep their cents.
 *
 * money() rounds to whole dollars, which is right for a total but wrong for a
 * rate that is about to be multiplied: a $2.50/day fee became $3/day, and the
 * error then scaled with the day count. Round the product, not the rate.
 */
function rate(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.round(n * 100) / 100;
}

function clampMonths(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.min(84, Math.floor(n));
}

function clampWeeks(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.min(52, Math.floor(n));
}

const VALID_MODES: BankArchiveMode[] = [
  "self-serve-pdf",
  "branch-reprint",
  "rush-courier",
];

export function estimateBankStatementArchive(
  inputs: BankStatementArchiveInputs,
): BankStatementArchiveResult {
  const mode = VALID_MODES.includes(inputs.mode)
    ? inputs.mode
    : "self-serve-pdf";
  const monthsNeeded = clampMonths(inputs.monthsNeeded);
  const monthsOnHand = clampMonths(inputs.monthsOnHand);
  const reprintFeeSgd = rate(inputs.reprintFeeSgd);
  const rushFeeSgd = rate(inputs.rushFeeSgd);
  const weeksToClose = clampWeeks(inputs.weeksToClose);

  const monthsGap = Math.max(0, monthsNeeded - monthsOnHand);

  let cashOutSgd = 0;
  if (mode === "self-serve-pdf") {
    cashOutSgd = 0;
  } else if (mode === "branch-reprint") {
    cashOutSgd = money(monthsGap * reprintFeeSgd);
  } else if (monthsGap > 0) {
    // No gap, no rush: a courier for statements you hold is wasted cash.
    cashOutSgd = money(monthsGap * reprintFeeSgd + rushFeeSgd);
  }

  const labels: Record<BankArchiveMode, string> = {
    "self-serve-pdf": "Self-serve PDF download",
    "branch-reprint": "Branch / fee reprint",
    "rush-courier": "Rush reprint + courier",
  };

  let headline = `${labels[mode]} · ${monthsGap} mo gap · cash-out sketch ${cashOutSgd} SGD`;
  let note = BANK_STATEMENT_ARCHIVE_NOTE;
  if (mode === "self-serve-pdf" && weeksToClose <= 2 && monthsGap > 0) {
    headline += ` · download window tight`;
    note =
      "Self-serve portals often lock after account close or 2FA SIM change — pull PDFs while login and Singpass still work.";
  } else if (mode === "rush-courier" && monthsGap === 0) {
    note =
      "No month gap means rush fees are optional — confirm what you already hold before paying courier.";
  } else if (mode === "branch-reprint" && monthsGap >= 24) {
    note =
      "Long reprint spans can hit fee caps or archive desks with long lead times — book before movers week.";
  }

  return {
    mode,
    monthsGap,
    cashOutSgd,
    weeksToClose,
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
