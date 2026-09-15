"use client";

import { ToolSketchShell } from "./ToolSketchShell";

import { useMemo, useState } from "react";
import {
  IRAS_REEMPLOYMENT_URL,
  IRAS_TAX_RESIDENCY_URL,
  TAX_RESIDENCY_DAY_THRESHOLD,
  TAX_RESIDENCY_LAST_REVIEWED,
  estimateTaxResidencyDays,
} from "@/lib/tools/tax-residency";

export function TaxResidencyCalculator() {
  const [calendarYear, setCalendarYear] = useState(2025);
  const [presenceStart, setPresenceStart] = useState("2025-03-15");
  const [presenceEnd, setPresenceEnd] = useState("2025-12-31");
  const [creditedAwayDays, setCreditedAwayDays] = useState(0);

  const result = useMemo(
    () =>
      estimateTaxResidencyDays({
        calendarYear,
        presenceStart,
        presenceEnd,
        creditedAwayDays,
      }),
    [calendarYear, presenceStart, presenceEnd, creditedAwayDays],
  );

  return (
    <ToolSketchShell
      name="Tax residency sketch"
      description="Sketch Singapore tax residency orientation for arriving and leaving years."
    >
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">Tax residency day inputs</legend>

        <div>
          <label
            htmlFor="tax-year"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
          >
            Calendar year to count
          </label>
          <input
            id="tax-year"
            type="number"
            min={2020}
            max={2035}
            step={1}
            value={calendarYear}
            onChange={(e) => setCalendarYear(Number(e.target.value) || 2025)}
            className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
          />
          <p className="mt-2 text-xs text-ink-faint">
            YA {result.yearOfAssessment} usually looks at days in {calendarYear}{" "}
            for the common {TAX_RESIDENCY_DAY_THRESHOLD}-day test.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="tax-start"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Presence start
            </label>
            <input
              id="tax-start"
              type="date"
              value={presenceStart}
              onChange={(e) => setPresenceStart(e.target.value)}
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="tax-end"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Presence end
            </label>
            <input
              id="tax-end"
              type="date"
              value={presenceEnd}
              onChange={(e) => setPresenceEnd(e.target.value)}
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="tax-credited"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
          >
            Extra credited days (optional)
          </label>
          <input
            id="tax-credited"
            type="number"
            min={0}
            max={183}
            step={1}
            value={creditedAwayDays}
            onChange={(e) =>
              setCreditedAwayDays(Math.max(0, Number(e.target.value) || 0))
            }
            className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
          />
          <p className="mt-2 text-xs text-ink-faint">
            Only add days you already know IRAS would count (e.g. certain
            temporary absences). Leave at 0 if unsure.
          </p>
        </div>
      </fieldset>

      <aside className="border border-fog-soft bg-paper-elevated p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
          Sketch · YA {result.yearOfAssessment}
        </p>
        <p className="mt-4 font-display text-4xl tabular-nums text-ink">
          {result.daysCounted}
          <span className="ml-2 text-lg text-ink-muted">
            / {TAX_RESIDENCY_DAY_THRESHOLD}
          </span>
        </p>
        <p
          className={
            result.clears183
              ? "mt-3 text-sm font-semibold text-canopy"
              : "mt-3 text-sm font-semibold text-tungsten"
          }
        >
          {result.clears183
            ? "Clears common 183-day sketch"
            : `${result.daysShort} day(s) short on this sketch`}
        </p>
        {result.clampedStart && result.clampedEnd ? (
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            Counted window in {result.calendarYear}: {result.clampedStart} →{" "}
            {result.clampedEnd} (inclusive).
          </p>
        ) : null}
        <p className="mt-4 text-sm leading-relaxed text-ink-muted">
          {result.note}
        </p>
        <p className="mt-6 text-xs text-ink-faint">
          Reviewed {TAX_RESIDENCY_LAST_REVIEWED}. Not a tax determination.
        </p>
        <div className="mt-4 flex flex-col gap-2 text-sm">
          <a
            href={IRAS_TAX_RESIDENCY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            IRAS — working out tax residency →
          </a>
          <a
            href={IRAS_REEMPLOYMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            IRAS — re-employment in Singapore →
          </a>
        </div>
      </aside>
    </div>
    </ToolSketchShell>
  );
}
