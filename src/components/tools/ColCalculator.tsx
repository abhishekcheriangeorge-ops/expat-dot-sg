"use client";

import { useMemo, useState } from "react";
import {
  estimateMonthlyCol,
  formatSgd,
  type HouseholdType,
  type HousingStyle,
} from "@/lib/tools/col";

const households: { id: HouseholdType; label: string }[] = [
  { id: "single", label: "Single" },
  { id: "couple", label: "Couple" },
  { id: "family-one-child", label: "Family · 1 child" },
  { id: "family-two-children", label: "Family · 2 children" },
];

const housing: { id: HousingStyle; label: string }[] = [
  { id: "modest", label: "Modest" },
  { id: "expat-typical", label: "Expat-typical" },
  { id: "premium", label: "Premium" },
];

export function ColCalculator() {
  const [household, setHousehold] = useState<HouseholdType>("couple");
  const [housingStyle, setHousingStyle] =
    useState<HousingStyle>("expat-typical");
  const [internationalSchool, setInternationalSchool] = useState(false);
  const [domesticHelp, setDomesticHelp] = useState(false);

  const isFamily =
    household === "family-one-child" || household === "family-two-children";

  const breakdown = useMemo(
    () =>
      estimateMonthlyCol({
        household,
        housing: housingStyle,
        internationalSchool: isFamily && internationalSchool,
        domesticHelp,
      }),
    [household, housingStyle, internationalSchool, domesticHelp, isFamily],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">Cost of living inputs</legend>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Household
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {households.map((h) => (
              <button
                key={h.id}
                type="button"
                onClick={() => setHousehold(h.id)}
                className={
                  household === h.id
                    ? "bg-canopy px-4 py-2 text-sm font-semibold text-paper"
                    : "border border-ink/15 px-4 py-2 text-sm font-medium text-ink hover:border-ink/35"
                }
              >
                {h.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Housing band
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {housing.map((h) => (
              <button
                key={h.id}
                type="button"
                onClick={() => setHousingStyle(h.id)}
                className={
                  housingStyle === h.id
                    ? "bg-canopy px-4 py-2 text-sm font-semibold text-paper"
                    : "border border-ink/15 px-4 py-2 text-sm font-medium text-ink hover:border-ink/35"
                }
              >
                {h.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {isFamily ? (
            <label className="flex items-center gap-3 text-sm text-ink">
              <input
                type="checkbox"
                checked={internationalSchool}
                onChange={(e) => setInternationalSchool(e.target.checked)}
                className="size-4 accent-[var(--canopy)]"
              />
              International school fees (rough monthly)
            </label>
          ) : null}
          <label className="flex items-center gap-3 text-sm text-ink">
            <input
              type="checkbox"
              checked={domesticHelp}
              onChange={(e) => setDomesticHelp(e.target.checked)}
              className="size-4 accent-[var(--canopy)]"
            />
            Domestic helper (levy + salary ballpark)
          </label>
        </div>
      </fieldset>

      <aside className="border border-fog-soft bg-paper-elevated p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
          Est. monthly
        </p>
        <p className="mt-3 font-display text-4xl text-canopy-deep">
          {formatSgd(breakdown.total)}
        </p>
        <ul className="mt-6 space-y-2 text-sm text-ink-muted">
          <li className="flex justify-between gap-4">
            <span>Rent</span>
            <span>{formatSgd(breakdown.rent)}</span>
          </li>
          <li className="flex justify-between gap-4">
            <span>Food</span>
            <span>{formatSgd(breakdown.food)}</span>
          </li>
          <li className="flex justify-between gap-4">
            <span>Transport</span>
            <span>{formatSgd(breakdown.transport)}</span>
          </li>
          <li className="flex justify-between gap-4">
            <span>Utilities</span>
            <span>{formatSgd(breakdown.utilities)}</span>
          </li>
          {breakdown.schooling > 0 ? (
            <li className="flex justify-between gap-4">
              <span>Schooling</span>
              <span>{formatSgd(breakdown.schooling)}</span>
            </li>
          ) : null}
          {breakdown.domesticHelp > 0 ? (
            <li className="flex justify-between gap-4">
              <span>Helper</span>
              <span>{formatSgd(breakdown.domesticHelp)}</span>
            </li>
          ) : null}
        </ul>
        <p className="mt-6 text-xs leading-relaxed text-ink-faint">
          Illustrative midpoints only — neighbourhood, lease vintage, and school
          tier move these numbers a lot.
        </p>
      </aside>
    </div>
  );
}
