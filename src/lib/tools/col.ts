/** Light COL reference bands — editorial estimates, not a budget app */

export type HouseholdType =
  | "single"
  | "couple"
  | "family-one-child"
  | "family-two-children";

export type HousingStyle = "modest" | "expat-typical" | "premium";

export type ColInputs = {
  household: HouseholdType;
  housing: HousingStyle;
  internationalSchool: boolean;
  domesticHelp: boolean;
};

/** Approximate monthly SGD midpoints for illustration */
const rent: Record<HousingStyle, Record<HouseholdType, number>> = {
  modest: {
    single: 2200,
    couple: 2800,
    "family-one-child": 3500,
    "family-two-children": 4200,
  },
  "expat-typical": {
    single: 3500,
    couple: 4500,
    "family-one-child": 6500,
    "family-two-children": 8000,
  },
  premium: {
    single: 5500,
    couple: 7000,
    "family-one-child": 10000,
    "family-two-children": 13000,
  },
};

const food: Record<HouseholdType, number> = {
  single: 700,
  couple: 1200,
  "family-one-child": 1600,
  "family-two-children": 2000,
};

const transport: Record<HouseholdType, number> = {
  single: 180,
  couple: 280,
  "family-one-child": 400,
  "family-two-children": 450,
};

const utilities: Record<HouseholdType, number> = {
  single: 150,
  couple: 220,
  "family-one-child": 320,
  "family-two-children": 380,
};

const schoolOneChild = 2800;
const schoolTwoChildren = 5200;
const domesticHelpMonthly = 1200;

export type ColBreakdown = {
  rent: number;
  food: number;
  transport: number;
  utilities: number;
  schooling: number;
  domesticHelp: number;
  total: number;
};

export function estimateMonthlyCol(inputs: ColInputs): ColBreakdown {
  const schooling = inputs.internationalSchool
    ? inputs.household === "family-two-children"
      ? schoolTwoChildren
      : inputs.household === "family-one-child"
        ? schoolOneChild
        : 0
    : 0;

  const help = inputs.domesticHelp ? domesticHelpMonthly : 0;

  const parts = {
    rent: rent[inputs.housing][inputs.household],
    food: food[inputs.household],
    transport: transport[inputs.household],
    utilities: utilities[inputs.household],
    schooling,
    domesticHelp: help,
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
