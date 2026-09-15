/** School device / iPad bond sketch for leavers — orientation, not handbook advice */

export const SCHOOL_DEVICE_BOND_LAST_REVIEWED = "2026-09-15";
export const SCHOOL_DEVICE_BOND_NOTE =
  "1:1 device programmes, kit bonds, and late-return fees differ by school handbook. This sketch only totals bond return hope vs damage / overdue / admin fees so packing week keeps a float.";

export type DeviceBondMode = "full-return" | "damage-hold" | "lost-forfeit";

export type SchoolDeviceBondInputs = {
  mode: DeviceBondMode;
  /** Refundable device / kit bond hope (SGD) */
  bondSgd: number;
  /** Days past published return deadline */
  overdueDays: number;
  /** Daily overdue fee if published (SGD) */
  overduePerDaySgd: number;
  /** Damage / missing-charger estimate (SGD) */
  damageSgd: number;
  /** Admin / wipe / reissue fee (SGD) */
  adminFeeSgd: number;
};

export type SchoolDeviceBondResult = {
  mode: DeviceBondMode;
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

function clampDays(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.min(120, Math.floor(n));
}

export function estimateSchoolDeviceBond(
  inputs: SchoolDeviceBondInputs,
): SchoolDeviceBondResult {
  const mode = inputs.mode;
  const bondSgd = money(inputs.bondSgd);
  const overdueDays = clampDays(inputs.overdueDays);
  const overduePerDaySgd = money(inputs.overduePerDaySgd);
  const damageSgd = money(inputs.damageSgd);
  const adminFeeSgd = money(inputs.adminFeeSgd);

  const overdueTotal = money(overdueDays * overduePerDaySgd);

  let cashInSgd = 0;
  let cashOutSgd = money(adminFeeSgd + overdueTotal);

  if (mode === "full-return") {
    cashInSgd = bondSgd;
    cashOutSgd = money(adminFeeSgd + overdueTotal);
  } else if (mode === "damage-hold") {
    cashInSgd = money(Math.max(0, bondSgd - damageSgd));
    cashOutSgd = money(adminFeeSgd + overdueTotal + Math.min(damageSgd, bondSgd));
  } else {
    cashInSgd = 0;
    cashOutSgd = money(bondSgd + adminFeeSgd + overdueTotal + damageSgd);
  }

  const netSketchSgd = money(cashInSgd - cashOutSgd);

  const labels: Record<DeviceBondMode, string> = {
    "full-return": "On-time return · bond hope",
    "damage-hold": "Return with damage / missing kit hold",
    "lost-forfeit": "Lost / unreturned device forfeit",
  };

  let headline = `${labels[mode]} · net sketch ${netSketchSgd} SGD`;
  let note = SCHOOL_DEVICE_BOND_NOTE;
  if (mode === "full-return" && overdueDays > 0) {
    headline += ` · overdue fees still bite`;
    note =
      "Even a “full return” path can lose cash to published overdue fees — book IT return before movers week.";
  } else if (mode === "lost-forfeit") {
    note =
      "Lost-device paths often bill replacement above the bond. Confirm the handbook replacement schedule before you fly.";
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
