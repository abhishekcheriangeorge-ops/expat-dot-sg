/** First-month / lease-signing cash sketch — editorial midpoints, not advice */

export type LeaseYears = 1 | 2;

export type SetupCashInputs = {
  monthlyRent: number;
  leaseYears: LeaseYears;
  depositMonths: number;
  agentMonths: number;
  tempHousingWeeks: number;
  tempHousingWeekly: number;
  miscBuffer: number;
};

export type SetupCashBreakdown = {
  advanceRent: number;
  deposit: number;
  agentFee: number;
  stampDuty: number;
  tempHousing: number;
  misc: number;
  total: number;
};

export const LEASE_DUTY_RATE = 0.004;
export const IRAS_LEASE_DUTY_URL =
  "https://www.iras.gov.sg/taxes/stamp-duty/for-property/renting-a-property";
export const SETUP_CASH_LAST_REVIEWED = "2026-09-15";

export function estimateSetupCash(inputs: SetupCashInputs): SetupCashBreakdown {
  const rent = Math.max(0, inputs.monthlyRent);
  const months = inputs.leaseYears * 12;
  const totalRent = rent * months;

  const advanceRent = rent;
  const deposit = rent * Math.max(0, inputs.depositMonths);
  const agentFee = rent * Math.max(0, inputs.agentMonths);
  const stampDuty = Math.floor(totalRent * LEASE_DUTY_RATE);
  const tempHousing =
    Math.max(0, inputs.tempHousingWeeks) *
    Math.max(0, inputs.tempHousingWeekly);
  const misc = Math.max(0, inputs.miscBuffer);

  const parts = {
    advanceRent,
    deposit,
    agentFee,
    stampDuty,
    tempHousing,
    misc,
  };

  return {
    ...parts,
    total: Object.values(parts).reduce((a, b) => a + b, 0),
  };
}

export function formatSgd(n: number): string {
  return new Intl.NumberFormat("en-SG", {
    style: "currency",
    currency: "SGD",
    maximumFractionDigits: 0,
  }).format(n);
}
