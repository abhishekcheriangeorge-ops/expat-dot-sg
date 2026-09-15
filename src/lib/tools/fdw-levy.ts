/** FDW monthly levy sketch — MOM bands as orientation, not a determination */

export const FDW_LEVY_LAST_REVIEWED = "2026-09-15";
export const FDW_LEVY_NOTE =
  "Foreign Domestic Worker levy bands change. Confirm the live MOM levy table and your concession eligibility before you budget — this sketch only multiplies a selected monthly band by months.";

/** Common published orientation bands (SGD / month). Verify on MOM. */
export const FDW_LEVY_BANDS = [
  {
    id: "concession-first",
    label: "Concessionary · first helper",
    monthly: 60,
  },
  {
    id: "full-first",
    label: "Full · first helper",
    monthly: 300,
  },
  {
    id: "subsequent",
    label: "Subsequent helper",
    monthly: 450,
  },
] as const;

export type FdwLevyBandId = (typeof FDW_LEVY_BANDS)[number]["id"];

export type FdwLevyInputs = {
  bandId: FdwLevyBandId;
  /** Number of calendar months to sketch */
  months: number;
  /** Optional override monthly levy in SGD (when you already know your MOM letter) */
  customMonthly?: number;
};

export type FdwLevyResult = {
  bandId: FdwLevyBandId;
  bandLabel: string;
  monthly: number;
  months: number;
  total: number;
  note: string;
};

export function estimateFdwLevy(inputs: FdwLevyInputs): FdwLevyResult {
  const band =
    FDW_LEVY_BANDS.find((b) => b.id === inputs.bandId) ?? FDW_LEVY_BANDS[1];
  const months = Math.max(0, Math.floor(Number(inputs.months) || 0));
  const custom = inputs.customMonthly;
  const monthly =
    custom != null && custom > 0
      ? Math.round(Number(custom) * 100) / 100
      : band.monthly;
  const total = Math.round(monthly * months * 100) / 100;

  let note = FDW_LEVY_NOTE;
  if (months <= 0 || monthly <= 0) {
    note = "Enter a positive monthly levy and month count.";
  } else if (inputs.bandId === "concession-first") {
    note =
      "Concessionary levy needs MOM eligibility (e.g. young child / elderly / disability criteria). Do not assume concession just because this is your first helper.";
  } else if (inputs.bandId === "subsequent") {
    note =
      "Subsequent-helper levy is typically higher. If you are transferring an FDW between EP holders, confirm whether MOM still treats this as a first or subsequent helper for the new employer.";
  }

  return {
    bandId: band.id,
    bandLabel:
      custom != null && custom > 0
        ? `Custom · $${monthly}/mo`
        : band.label,
    monthly,
    months,
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
