/** School leavers / yearbook fee sketch — orientation, not handbook advice */

export const SCHOOL_LEAVERS_LAST_REVIEWED = "2026-09-15";
export const SCHOOL_LEAVERS_NOTE =
  "Leavers dinners, yearbooks, graduation kits, and optional photo packages differ by school. This sketch only totals known fee lines plus sibling add-ons so packing week keeps a float — not an invoice.";

export type LeaversFeeMode = "core-only" | "core-plus-yearbook" | "full-optional";

export type SchoolLeaversInputs = {
  mode: LeaversFeeMode;
  /** Required leavers / graduation admin fee (SGD) */
  coreFeeSgd: number;
  /** Yearbook / chronicle fee (SGD) */
  yearbookSgd: number;
  /** Optional dinner / photo / kit add-ons (SGD) */
  optionalSgd: number;
  /** Number of departing children sharing the same fee season */
  departingChildren: number;
  /** Sibling discount fraction on yearbook + optional (0–1) */
  siblingDiscountFraction: number;
};

export type SchoolLeaversResult = {
  mode: LeaversFeeMode;
  departingChildren: number;
  pathCostSgd: number;
  altCostSgd: number;
  savingsVsAltSgd: number;
  recommended: LeaversFeeMode;
  headline: string;
  note: string;
};

function money(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.round(n);
}

/** Signed rounding for deltas — negative means the path beats the alt */
function signed(n: number): number {
  if (!Number.isFinite(n)) return 0;
  return Math.round(n);
}

function clampChildren(n: number): number {
  if (!Number.isFinite(n) || n < 1) return 1;
  return Math.min(6, Math.floor(n));
}

function clampFraction(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.min(1, n);
}

export function estimateSchoolLeaversFee(
  inputs: SchoolLeaversInputs,
): SchoolLeaversResult {
  const coreFeeSgd = money(inputs.coreFeeSgd);
  const yearbookSgd = money(inputs.yearbookSgd);
  const optionalSgd = money(inputs.optionalSgd);
  const departingChildren = clampChildren(inputs.departingChildren);
  const siblingDiscountFraction = clampFraction(inputs.siblingDiscountFraction);

  const discountMultiplier =
    departingChildren <= 1
      ? 1
      : 1 - siblingDiscountFraction * ((departingChildren - 1) / departingChildren);

  // Per-child figures stay unrounded: they are multiplied by the child count
  // below, so rounding here would scale the error with the number of children.
  const perChild: Record<LeaversFeeMode, number> = {
    "core-only": coreFeeSgd,
    "core-plus-yearbook": coreFeeSgd + yearbookSgd * discountMultiplier,
    "full-optional":
      coreFeeSgd + (yearbookSgd + optionalSgd) * discountMultiplier,
  };

  const costs: Record<LeaversFeeMode, number> = {
    "core-only": money(perChild["core-only"] * departingChildren),
    "core-plus-yearbook": money(
      perChild["core-plus-yearbook"] * departingChildren,
    ),
    "full-optional": money(perChild["full-optional"] * departingChildren),
  };

  // Recommend the cheapest path that still includes yearbook when kids > 0 —
  // families usually want the book; core-only is the floor comparison.
  // `recommended` is the editorial default; `cheapest` is the true floor used
  // for the delta so the numbers never claim a pricier path is cheaper.
  const rawMode = inputs.mode;
  const validMode: LeaversFeeMode =
    rawMode === "core-only" ||
    rawMode === "core-plus-yearbook" ||
    rawMode === "full-optional"
      ? rawMode
      : "core-plus-yearbook";
  let recommended: LeaversFeeMode = "core-plus-yearbook";
  let cheapest: LeaversFeeMode = "core-plus-yearbook";
  let best = costs["core-plus-yearbook"];
  if (costs["core-only"] < best) {
    cheapest = "core-only";
    best = costs["core-only"];
  }
  if (
    validMode === "full-optional" &&
    costs["full-optional"] <= costs["core-plus-yearbook"] + 80
  ) {
    recommended = "full-optional";
    best = costs["full-optional"];
  }

  const pathCostSgd = costs[validMode];
  const altCostSgd = costs[cheapest];
  const savingsVsAltSgd = signed(pathCostSgd - altCostSgd);

  const labels: Record<LeaversFeeMode, string> = {
    "core-only": "Core leavers fee only",
    "core-plus-yearbook": "Core + yearbook",
    "full-optional": "Core + yearbook + optional packs",
  };

  let headline = `${labels[validMode]} · sketch ${pathCostSgd} SGD for ${departingChildren} child${departingChildren > 1 ? "ren" : ""}`;
  let note = SCHOOL_LEAVERS_NOTE;
  if (validMode !== recommended) {
    headline += ` · common sketch: ${labels[recommended]}`;
  }
  if (validMode === "core-only") {
    note =
      "Core-only skips the yearbook. Confirm whether the school still bills a chronicle fee automatically on mid-year exit.";
  } else if (departingChildren > 1 && siblingDiscountFraction === 0) {
    note =
      "Sibling discounts are school-specific. Ask the parent portal before you assume full price × children.";
  } else if (validMode === "full-optional" && optionalSgd > coreFeeSgd) {
    note =
      "Optional photo / dinner packs can exceed the core fee — drop add-ons first if cash is tight beside gym ETFs.";
  }

  return {
    mode: validMode,
    departingChildren,
    pathCostSgd,
    altCostSgd,
    savingsVsAltSgd,
    recommended,
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
