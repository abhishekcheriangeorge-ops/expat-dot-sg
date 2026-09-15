/** Pharmacy last-refill float sketch for leavers — orientation, not clinical advice */

export const PHARMACY_LAST_REFILL_FLOAT_LAST_REVIEWED = "2026-09-15";
export const PHARMACY_LAST_REFILL_FLOAT_NOTE =
  "Clinic refill rules, travel fills, and private-script fees differ by provider. This sketch only totals days of cover still needed, refill cash, and private top-up fees so packing week keeps a float — not a prescription or HSA reading.";

export type PharmacyLastRefillMode =
  | "polyclinic-refill"
  | "private-topup"
  | "travel-fill";

export type PharmacyLastRefillFloatInputs = {
  mode: PharmacyLastRefillMode;
  /** Days of chronic cover still needed before destination care */
  daysCoverNeeded: number;
  /** Days already on hand from current bottles */
  daysOnHand: number;
  /** Typical refill / script fee (SGD) */
  refillFeeSgd: number;
  /** Private consult or script premium (SGD) */
  privatePremiumSgd: number;
  /** Extra medicines / family members still on the same run (SGD) */
  familyAddOnSgd: number;
};

export type PharmacyLastRefillFloatResult = {
  mode: PharmacyLastRefillMode;
  daysGap: number;
  cashOutSgd: number;
  netSketchSgd: number;
  daysCoverNeeded: number;
  headline: string;
  note: string;
};

function money(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.round(n);
}

function clampDays(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.min(180, Math.floor(n));
}

export function estimatePharmacyLastRefillFloat(
  inputs: PharmacyLastRefillFloatInputs,
): PharmacyLastRefillFloatResult {
  const mode = inputs.mode;
  const daysCoverNeeded = clampDays(inputs.daysCoverNeeded);
  const daysOnHand = clampDays(inputs.daysOnHand);
  const refillFeeSgd = money(inputs.refillFeeSgd);
  const privatePremiumSgd = money(inputs.privatePremiumSgd);
  const familyAddOnSgd = money(inputs.familyAddOnSgd);

  const daysGap = Math.max(0, daysCoverNeeded - daysOnHand);

  let cashOutSgd = 0;
  if (mode === "polyclinic-refill") {
    cashOutSgd = money(
      (daysGap > 0 ? refillFeeSgd : 0) + familyAddOnSgd,
    );
  } else if (mode === "private-topup") {
    cashOutSgd = money(
      (daysGap > 0 ? refillFeeSgd + privatePremiumSgd : privatePremiumSgd) +
        familyAddOnSgd,
    );
  } else {
    // travel-fill — often one extended script fee plus premium
    cashOutSgd = money(refillFeeSgd + privatePremiumSgd + familyAddOnSgd);
  }

  const netSketchSgd = money(0 - cashOutSgd);

  const labels: Record<PharmacyLastRefillMode, string> = {
    "polyclinic-refill": "Polyclinic / subsidised refill",
    "private-topup": "Private top-up",
    "travel-fill": "Travel / extended fill",
  };

  let headline = `${labels[mode]} · cash-out sketch ${cashOutSgd} SGD`;
  let note = PHARMACY_LAST_REFILL_FLOAT_NOTE;
  if (daysGap === 0 && mode !== "travel-fill") {
    note =
      "Bottles on hand may cover fly week, but destination pharmacies still want a current script and summary letter — cash float is not the only gap.";
  } else if (mode === "travel-fill") {
    note =
      "Travel fills are clinic-discretionary. Confirm quantity limits and carry-on documentation before you pay for an extended script.";
  } else if (mode === "private-topup" && daysGap > 30) {
    headline += ` · ${daysGap} days still uncovered`;
  }

  return {
    mode,
    daysGap,
    cashOutSgd,
    netSketchSgd,
    daysCoverNeeded,
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
