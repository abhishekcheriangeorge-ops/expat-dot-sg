/**
 * Employment Pass qualifying salary illustration.
 * Tables mirror MOM published age-progressive minima (verify on MOM before relying).
 */

export const EP_LAST_REVIEWED = "2026-09-15";
export const EP_MOM_URL =
  "https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility";

export type EpRegime = "current" | "from-2027";
export type EpSector = "general" | "financial";

const GENERAL_CURRENT: Record<number, number> = {
  23: 5600, 24: 5832, 25: 6064, 26: 6295, 27: 6527, 28: 6759, 29: 6991,
  30: 7223, 31: 7455, 32: 7686, 33: 7918, 34: 8150, 35: 8382, 36: 8614,
  37: 8845, 38: 9077, 39: 9309, 40: 9541, 41: 9773, 42: 10005, 43: 10236,
  44: 10468, 45: 10700,
};

const GENERAL_2027: Record<number, number> = {
  23: 6000, 24: 6250, 25: 6500, 26: 6750, 27: 7000, 28: 7250, 29: 7500,
  30: 7750, 31: 8000, 32: 8250, 33: 8500, 34: 8750, 35: 9000, 36: 9250,
  37: 9500, 38: 9750, 39: 10000, 40: 10250, 41: 10500, 42: 10750, 43: 11000,
  44: 11250, 45: 11500,
};

const FINANCIAL_CURRENT: Record<number, number> = {
  23: 6200, 24: 6455, 25: 6709, 26: 6964, 27: 7218, 28: 7473, 29: 7727,
  30: 7982, 31: 8236, 32: 8491, 33: 8745, 34: 9000, 35: 9255, 36: 9509,
  37: 9764, 38: 10018, 39: 10273, 40: 10527, 41: 10782, 42: 11036, 43: 11291,
  44: 11545, 45: 11800,
};

const FINANCIAL_2027: Record<number, number> = {
  23: 6600, 24: 6877, 25: 7155, 26: 7432, 27: 7709, 28: 7986, 29: 8264,
  30: 8541, 31: 8818, 32: 9095, 33: 9373, 34: 9650, 35: 9927, 36: 10205,
  37: 10482, 38: 10759, 39: 11036, 40: 11314, 41: 11591, 42: 11868, 43: 12145,
  44: 12423, 45: 12700,
};

function lookupAgeTable(table: Record<number, number>, age: number): number {
  const clamped = Math.min(55, Math.max(18, Math.round(age)));
  if (clamped <= 23) return table[23];
  if (clamped >= 45) return table[45];
  return table[clamped] ?? table[45];
}

export function estimateEpMinimum(
  age: number,
  sector: EpSector = "general",
  regime: EpRegime = "current",
): { minimum: number; note: string } {
  const table =
    sector === "financial"
      ? regime === "from-2027"
        ? FINANCIAL_2027
        : FINANCIAL_CURRENT
      : regime === "from-2027"
        ? GENERAL_2027
        : GENERAL_CURRENT;

  const minimum = lookupAgeTable(table, age);
  const regimeNote =
    regime === "from-2027"
      ? "MOM table for new EP applications from 1 Jan 2027 (renewals expiring from 1 Jan 2028)."
      : "MOM table for new applications before 1 Jan 2027 and renewals expiring before 1 Jan 2028.";
  const sectorNote =
    sector === "financial"
      ? " Financial services uses the higher published floor."
      : " General / non-financial services floor.";

  return {
    minimum,
    note: `${regimeNote}${sectorNote} COMPASS still applies unless exempt.`,
  };
}

export function formatSgdWhole(n: number): string {
  return new Intl.NumberFormat("en-SG", {
    style: "currency",
    currency: "SGD",
    maximumFractionDigits: 0,
  }).format(n);
}
