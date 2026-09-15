/** School bus last-week float sketch for leavers — orientation, not operator advice */

export const SCHOOL_BUS_LAST_WEEK_FLOAT_LAST_REVIEWED = "2026-09-15";
export const SCHOOL_BUS_LAST_WEEK_FLOAT_NOTE =
  "School bus contracts, notice windows, and last-week pro-rata rules differ by operator and school handbook. This sketch only totals remaining ride days, notice shortfalls, and cancellation fees so packing week keeps a float — not a contract reading.";

export type SchoolBusLastWeekMode =
  | "ride-through"
  | "early-cancel"
  | "no-show-forfeit";

export type SchoolBusLastWeekFloatInputs = {
  mode: SchoolBusLastWeekMode;
  /** Weekly bus fee (SGD) */
  weeklyFeeSgd: number;
  /** Ride days still owed / planned in the final week */
  rideDaysLeft: number;
  /** Notice days still required by the operator */
  noticeDaysShort: number;
  /** Flat early-cancel / admin fee (SGD) */
  cancelFeeSgd: number;
  /** Sibling / second-child fee still on the contract (SGD) */
  siblingFeeSgd: number;
};

export type SchoolBusLastWeekFloatResult = {
  mode: SchoolBusLastWeekMode;
  rideCostSgd: number;
  cashOutSgd: number;
  netSketchSgd: number;
  rideDaysLeft: number;
  headline: string;
  note: string;
};

function money(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.round(n);
}

function clampDays(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.min(30, Math.floor(n));
}

export function estimateSchoolBusLastWeekFloat(
  inputs: SchoolBusLastWeekFloatInputs,
): SchoolBusLastWeekFloatResult {
  const mode = inputs.mode;
  const weeklyFeeSgd = money(inputs.weeklyFeeSgd);
  const rideDaysLeft = clampDays(inputs.rideDaysLeft);
  const noticeDaysShort = clampDays(inputs.noticeDaysShort);
  const cancelFeeSgd = money(inputs.cancelFeeSgd);
  const siblingFeeSgd = money(inputs.siblingFeeSgd);

  const perDay = money(weeklyFeeSgd / 5);
  const rideCostSgd = money(perDay * rideDaysLeft);
  const noticeBite = money(perDay * noticeDaysShort);

  let cashOutSgd = 0;
  if (mode === "ride-through") {
    cashOutSgd = money(rideCostSgd + siblingFeeSgd);
  } else if (mode === "early-cancel") {
    cashOutSgd = money(cancelFeeSgd + noticeBite + siblingFeeSgd);
  } else {
    cashOutSgd = money(weeklyFeeSgd + cancelFeeSgd + siblingFeeSgd);
  }

  const netSketchSgd = money(0 - cashOutSgd);

  const labels: Record<SchoolBusLastWeekMode, string> = {
    "ride-through": "Ride through last week",
    "early-cancel": "Early cancel · notice shortfall",
    "no-show-forfeit": "No-show / forfeit week",
  };

  let headline = `${labels[mode]} · cash-out sketch ${cashOutSgd} SGD`;
  let note = SCHOOL_BUS_LAST_WEEK_FLOAT_NOTE;
  if (mode === "early-cancel" && noticeDaysShort === 0 && cancelFeeSgd === 0) {
    note =
      "A clean early cancel with no notice shortfall still needs written operator confirmation — screenshots beat verbal “ok stop Monday.”";
  } else if (mode === "no-show-forfeit") {
    note =
      "No-show weeks often still bill the full week plus admin. Confirm whether sibling fees continue after the primary seat stops.";
  } else if (mode === "ride-through" && rideDaysLeft >= 5) {
    headline += ` · full week still on the clock`;
  }

  return {
    mode,
    rideCostSgd,
    cashOutSgd,
    netSketchSgd,
    rideDaysLeft,
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
