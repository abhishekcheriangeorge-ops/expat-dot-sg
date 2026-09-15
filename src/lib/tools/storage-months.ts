/** Temporary storage cost sketch — orientation for relocation months */

export const STORAGE_MONTHS_LAST_REVIEWED = "2026-09-15";
export const STORAGE_MONTHS_NOTE =
  "Self-storage and mover-warehouse rates vary by district, access hours, and insurance. This sketch only multiplies a monthly band by months, then adds optional access / insurance add-ons — get a live quote before you book.";

export const STORAGE_BANDS = [
  { id: "locker", label: "Locker / 25 sq ft", monthly: 120 },
  { id: "studio", label: "Studio pile · ~50 sq ft", monthly: 220 },
  { id: "two-bed", label: "2-bed flat pile · ~100 sq ft", monthly: 380 },
  { id: "family", label: "Family / 150+ sq ft", monthly: 520 },
] as const;

export type StorageBandId = (typeof STORAGE_BANDS)[number]["id"];

export type StorageMonthsInputs = {
  bandId: StorageBandId;
  months: number;
  /** Optional monthly insurance / admin add-on */
  addOnMonthly?: number;
  /** Optional one-time access / delivery fee */
  accessFee?: number;
};

export type StorageMonthsResult = {
  bandId: StorageBandId;
  bandLabel: string;
  monthly: number;
  months: number;
  addOnMonthly: number;
  accessFee: number;
  recurringTotal: number;
  total: number;
  note: string;
};

export function estimateStorageMonths(
  inputs: StorageMonthsInputs,
): StorageMonthsResult {
  const band =
    STORAGE_BANDS.find((b) => b.id === inputs.bandId) ?? STORAGE_BANDS[1];
  const months = Math.max(0, Math.floor(Number(inputs.months) || 0));
  const monthly = band.monthly;
  const addOn = Math.max(0, Number(inputs.addOnMonthly) || 0);
  const access = Math.max(0, Number(inputs.accessFee) || 0);
  const recurringTotal =
    Math.round((monthly + addOn) * months * 100) / 100;
  const total = Math.round((recurringTotal + access) * 100) / 100;

  let note = STORAGE_MONTHS_NOTE;
  if (months <= 0) {
    note = "Enter a positive number of storage months.";
  } else if (months >= 6) {
    note =
      "Six or more months of storage often rivals a cheap lease month — re-check whether a short extension or furnished rental is cheaper than warehouse time.";
  }

  return {
    bandId: band.id,
    bandLabel: band.label,
    monthly,
    months,
    addOnMonthly: addOn,
    accessFee: access,
    recurringTotal,
    total,
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
