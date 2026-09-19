/** School CCA / instrument kit bond sketch for leavers — orientation, not handbook advice */

export const SCHOOL_CCA_KIT_BOND_LAST_REVIEWED = "2026-09-15";
export const SCHOOL_CCA_KIT_BOND_NOTE =
  "CCA kit, band instrument, and sports gear bonds differ by school handbook. This sketch only totals bond return hope vs damage / overdue / admin fees so packing week keeps a float.";

export type CcaKitBondMode = "full-return" | "damage-hold" | "lost-forfeit";

export type SchoolCcaKitBondInputs = {
  mode: CcaKitBondMode;
  /** Refundable CCA / instrument / kit bond hope (SGD) */
  bondSgd: number;
  /** Days past published return deadline */
  overdueDays: number;
  /** Daily overdue fee if published (SGD) */
  overduePerDaySgd: number;
  /** Damage / missing-part estimate (SGD) */
  damageSgd: number;
  /** Admin / reissue / cleaning fee (SGD) */
  adminFeeSgd: number;
};

export type SchoolCcaKitBondResult = {
  mode: CcaKitBondMode;
  cashInSgd: number;
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

/** Signed rounding for nets — a negative float is the point of the sketch */
function signed(n: number): number {
  if (!Number.isFinite(n)) return 0;
  return Math.round(n);
}

const VALID_MODES: CcaKitBondMode[] = [
  "full-return",
  "damage-hold",
  "lost-forfeit",
];

function clampDays(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.min(120, Math.floor(n));
}

export function estimateSchoolCcaKitBond(
  inputs: SchoolCcaKitBondInputs,
): SchoolCcaKitBondResult {
  const mode = VALID_MODES.includes(inputs.mode)
    ? inputs.mode
    : "full-return";
  const bondSgd = money(inputs.bondSgd);
  const overdueDays = clampDays(inputs.overdueDays);
  const overduePerDaySgd = rate(inputs.overduePerDaySgd);
  const damageSgd = money(inputs.damageSgd);
  const adminFeeSgd = money(inputs.adminFeeSgd);

  const overdueTotal = money(overdueDays * overduePerDaySgd);

  let cashInSgd = 0;
  let cashOutSgd = money(adminFeeSgd + overdueTotal);

  if (mode === "full-return") {
    cashInSgd = bondSgd;
    cashOutSgd = money(adminFeeSgd + overdueTotal);
  } else if (mode === "damage-hold") {
    // Damage comes off the returned bond rather than being charged twice, but
    // anything beyond the bond is still owed. A snapped instrument worth more
    // than the kit bond previously read as near break-even.
    const damageResidual = Math.max(0, damageSgd - bondSgd);
    cashInSgd = money(Math.max(0, bondSgd - damageSgd));
    cashOutSgd = money(adminFeeSgd + overdueTotal + damageResidual);
  } else {
    // Forfeit: bond is kept (no cash in) and replacement may be billed.
    cashInSgd = 0;
    cashOutSgd = money(adminFeeSgd + overdueTotal + damageSgd);
  }

  const netSketchSgd = signed(cashInSgd - cashOutSgd);

  const labels: Record<CcaKitBondMode, string> = {
    "full-return": "On-time kit return · bond hope",
    "damage-hold": "Return with damage / missing-part hold",
    "lost-forfeit": "Lost / unreturned kit forfeit",
  };

  let headline = `${labels[mode]} · net sketch ${netSketchSgd} SGD`;
  let note = SCHOOL_CCA_KIT_BOND_NOTE;
  if (mode === "full-return" && overdueDays > 0) {
    headline += ` · overdue fees still bite`;
    note =
      "Even a “full return” path can lose cash to published overdue fees — book CCA store return before movers week.";
  } else if (mode === "lost-forfeit") {
    note =
      "Lost-instrument paths often bill replacement above the bond. Confirm the handbook replacement schedule before you fly.";
  } else if (mode === "damage-hold" && damageSgd > bondSgd) {
    note =
      "Damage above bond may invoice the family separately — keep a float until the school closes the ticket.";
  }

  return {
    mode,
    cashInSgd,
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
