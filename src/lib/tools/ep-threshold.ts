/**
 * Employment Pass qualifying salary illustration.
 * Figures track MOM published minima as of early 2025 and age progressive scale.
 * Always verify on MOM — this is an interior utility, not a filing tool.
 */

export const EP_LAST_REVIEWED = "2026-03-01";
export const EP_MOM_URL =
  "https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility";

/** Approximate base qualifying salary (non-financial) at younger ages */
export const EP_BASE_QUALIFYING = 5600;

/** Financial services sector often has a higher floor */
export const EP_FINANCIAL_BASE = 7000;

/**
 * MOM publishes an age-progressive scale. We approximate the rise from base
 * at ~23 up toward mid-40s. Not a substitute for the official table.
 */
export function estimateEpMinimum(
  age: number,
  sector: "general" | "financial" = "general",
): { minimum: number; note: string } {
  const clamped = Math.min(55, Math.max(18, Math.round(age)));
  const base =
    sector === "financial" ? EP_FINANCIAL_BASE : EP_BASE_QUALIFYING;

  // Rough progressive uplift: ~+$200–250 per year of age past mid-20s
  const ageUplift =
    clamped <= 23 ? 0 : Math.round((clamped - 23) * 220);

  const minimum = base + ageUplift;

  return {
    minimum,
    note:
      sector === "financial"
        ? "Financial services typically face a higher qualifying salary floor."
        : "General / most sectors — confirm COMPASS and current MOM tables.",
  };
}

export function formatSgdWhole(n: number): string {
  return new Intl.NumberFormat("en-SG", {
    style: "currency",
    currency: "SGD",
    maximumFractionDigits: 0,
  }).format(n);
}
