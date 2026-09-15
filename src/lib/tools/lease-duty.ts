/** IRAS lease / tenancy stamp duty sketch — rates from IRAS, not advice */

export type LeaseDutyInputs = {
  monthlyRent: number;
  leaseMonths: number;
  /** Extra monthly consideration IRAS folds into AAR (e.g. furniture, service) */
  otherMonthly: number;
};

export type LeaseDutyResult = {
  totalConsideration: number;
  averageAnnualRent: number;
  dutyBase: number;
  duty: number;
  exempt: boolean;
  longLease: boolean;
  formulaLabel: string;
};

export const LEASE_DUTY_RATE = 0.004;
export const AAR_EXEMPTION_THRESHOLD = 1000;
export const LONG_LEASE_MONTHS = 48;
export const IRAS_LEASE_DUTY_URL =
  "https://www.iras.gov.sg/taxes/stamp-duty/for-property/renting-a-property";
export const IRAS_STAMP_CALCULATOR_URL =
  "https://www.iras.gov.sg/quick-links/calculators";
export const LEASE_DUTY_LAST_REVIEWED = "2026-09-15";

export function estimateLeaseDuty(inputs: LeaseDutyInputs): LeaseDutyResult {
  const monthly =
    Math.max(0, inputs.monthlyRent) + Math.max(0, inputs.otherMonthly);
  const months = Math.max(1, Math.floor(inputs.leaseMonths));
  const totalConsideration = monthly * months;
  const aar = monthly * 12;
  const longLease = months > LONG_LEASE_MONTHS;
  const exempt = aar <= AAR_EXEMPTION_THRESHOLD;

  if (exempt) {
    return {
      totalConsideration,
      averageAnnualRent: aar,
      dutyBase: 0,
      duty: 0,
      exempt: true,
      longLease,
      formulaLabel: "AAR ≤ S$1,000 — lease duty exempt",
    };
  }

  const dutyBase = longLease ? 4 * aar : totalConsideration;
  const raw = dutyBase * LEASE_DUTY_RATE;
  const duty = Math.max(1, Math.floor(raw));

  return {
    totalConsideration,
    averageAnnualRent: aar,
    dutyBase,
    duty,
    exempt: false,
    longLease,
    formulaLabel: longLease
      ? "0.4% of 4 × average annual rent (lease > 4 years)"
      : "0.4% of total rent for the lease period (≤ 4 years)",
  };
}

export function formatSgd(n: number): string {
  return new Intl.NumberFormat("en-SG", {
    style: "currency",
    currency: "SGD",
    maximumFractionDigits: 0,
  }).format(n);
}
