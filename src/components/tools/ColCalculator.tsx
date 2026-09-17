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

        <div role="group" aria-label="Household">
          <p
            aria-hidden="true"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
          >
            Household
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {households.map((h) => (
              <button
                key={h.id}
                type="button"
                aria-pressed={household === h.id}
                onClick={() => setHousehold(h.id)}
                className={
                  household === h.id
                    ? "bg-ink px-4 py-2.5 text-sm font-semibold text-paper rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tungsten"
                    : "border border-ink/20 px-4 py-2.5 text-sm font-medium text-ink rounded-sm hover:border-ink/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tungsten"
                }
              >
                {h.label}
              </button>
            ))}
          </div>
        </div>

        <div role="group" aria-label="Housing band">
          <p
            aria-hidden="true"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
          >
            Housing band
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {housing.map((h) => (
              <button
                key={h.id}
                type="button"
                aria-pressed={housingStyle === h.id}
                onClick={() => setHousingStyle(h.id)}
                className={
                  housingStyle === h.id
                    ? "bg-ink px-4 py-2.5 text-sm font-semibold text-paper rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tungsten"
                    : "border border-ink/20 px-4 py-2.5 text-sm font-medium text-ink rounded-sm hover:border-ink/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tungsten"
                }
              >
                {h.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {isFamily ? (
            <label className="flex min-h-[44px] cursor-pointer items-center gap-3 text-sm text-ink">
              <input
                type="checkbox"
                checked={internationalSchool}
                onChange={(e) => setInternationalSchool(e.target.checked)}
                className="size-5 shrink-0 cursor-pointer accent-canopy"
              />
              International school fees (rough monthly)
            </label>
          ) : null}
          <label className="flex min-h-[44px] cursor-pointer items-center gap-3 text-sm text-ink">
            <input
              type="checkbox"
              checked={domesticHelp}
              onChange={(e) => setDomesticHelp(e.target.checked)}
              className="size-5 shrink-0 cursor-pointer accent-canopy"
            />
            Domestic helper (levy + salary ballpark)
          </label>
        </div>
      </fieldset>

      <aside
        className="h-fit rounded-sm border border-ink/15 bg-canopy-deep p-6 text-paper"
        aria-live="polite"
      >
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-tungsten-soft">
          Est. monthly
        </p>
        <p className="mt-3 font-display text-4xl font-medium tabular-nums">
          {formatSgd(breakdown.total)}
        </p>
        <ul className="mt-6 space-y-2 border-t border-tungsten-soft/20 pt-4 text-sm text-[#cfc8b4]">
          <li className="flex justify-between gap-4">
            <span>Rent</span>
            <span className="tabular-nums">{formatSgd(breakdown.rent)}</span>
          </li>
          <li className="flex justify-between gap-4">
            <span>Food</span>
            <span className="tabular-nums">{formatSgd(breakdown.food)}</span>
          </li>
          <li className="flex justify-between gap-4">
            <span>Transport</span>
            <span className="tabular-nums">
              {formatSgd(breakdown.transport)}
            </span>
          </li>
          <li className="flex justify-between gap-4">
            <span>Utilities</span>
            <span className="tabular-nums">
              {formatSgd(breakdown.utilities)}
            </span>
          </li>
          {breakdown.schooling > 0 ? (
            <li className="flex justify-between gap-4">
              <span>Schooling</span>
              <span className="tabular-nums">
                {formatSgd(breakdown.schooling)}
              </span>
            </li>
          ) : null}
          {breakdown.domesticHelp > 0 ? (
            <li className="flex justify-between gap-4">
              <span>Helper</span>
              <span className="tabular-nums">
                {formatSgd(breakdown.domesticHelp)}
              </span>
            </li>
          ) : null}
        </ul>
        <p className="mt-6 text-xs leading-relaxed text-[#8f8875]">
          Illustrative midpoints only — neighbourhood, lease vintage, and school
          tier move these numbers a lot.
        </p>
      </aside>
    </div>
  );
}
