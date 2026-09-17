"use client";

import { useMemo, useState } from "react";
import {
  EP_LAST_REVIEWED,
  EP_MOM_URL,
  estimateEpMinimum,
  formatSgdWhole,
  type EpRegime,
} from "@/lib/tools/ep-threshold";

export function EpThresholdCalculator() {
  const [age, setAge] = useState(32);
  const [sector, setSector] = useState<"general" | "financial">("general");
  const [regime, setRegime] = useState<EpRegime>("current");
  const [offered, setOffered] = useState(6500);

  const result = useMemo(
    () => estimateEpMinimum(age, sector, regime),
    [age, sector, regime],
  );

  const gap = offered - result.minimum;
  const clears = gap >= 0;

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">EP threshold inputs</legend>

        <div>
          <label
            htmlFor="ep-age"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
          >
            Candidate age
          </label>
          <div className="mt-3 flex items-center gap-4">
            <input
              id="ep-age"
              type="range"
              min={21}
              max={55}
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              aria-describedby="ep-age-value"
              className="h-11 w-full accent-canopy"
            />
            <span
              id="ep-age-value"
              role="status"
              className="w-10 text-right font-medium tabular-nums text-ink"
            >
              {age}
            </span>
          </div>
        </div>

        <div role="group" aria-label="MOM table">
          <p
            aria-hidden="true"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
          >
            MOM table
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {(
              [
                ["current", "Before 1 Jan 2027"],
                ["from-2027", "From 1 Jan 2027"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                aria-pressed={regime === id}
                onClick={() => setRegime(id)}
                className={
                  regime === id
                    ? "bg-ink px-4 py-2.5 text-sm font-semibold text-paper rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tungsten"
                    : "border border-ink/20 px-4 py-2.5 text-sm font-medium text-ink rounded-sm hover:border-ink/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tungsten"
                }
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div role="group" aria-label="Sector">
          <p
            aria-hidden="true"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
          >
            Sector
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {(
              [
                ["general", "General"],
                ["financial", "Financial services"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                aria-pressed={sector === id}
                onClick={() => setSector(id)}
                className={
                  sector === id
                    ? "bg-ink px-4 py-2.5 text-sm font-semibold text-paper rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tungsten"
                    : "border border-ink/20 px-4 py-2.5 text-sm font-medium text-ink rounded-sm hover:border-ink/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tungsten"
                }
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="ep-offer"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
          >
            Fixed monthly salary offered (SGD)
          </label>
          <input
            id="ep-offer"
            type="number"
            min={0}
            step={100}
            value={offered}
            onChange={(e) => setOffered(Number(e.target.value) || 0)}
            className="mt-3 w-full max-w-xs rounded-sm border border-ink/20 bg-paper-elevated px-4 py-3 text-ink focus:border-tungsten focus:outline-2 focus:outline-tungsten"
          />
        </div>
      </fieldset>

      <aside
        className="h-fit rounded-sm border border-ink/15 bg-canopy-deep p-6 text-paper"
        aria-live="polite"
      >
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-tungsten-soft">
          Illustrated minimum
        </p>
        <p className="mt-3 font-display text-4xl font-medium tabular-nums">
          {formatSgdWhole(result.minimum)}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[#cfc8b4]">
          {result.note}
        </p>
        <p
          className={`mt-6 border-t border-tungsten-soft/20 pt-4 text-sm font-semibold ${clears ? "text-paper" : "text-tungsten-soft"}`}
        >
          {clears
            ? `Offer clears this illustration by ${formatSgdWhole(gap)}.`
            : `Offer is ${formatSgdWhole(Math.abs(gap))} below this illustration.`}
        </p>
        <p className="mt-6 text-xs leading-relaxed text-[#8f8875]">
          Last reviewed {EP_LAST_REVIEWED}. COMPASS points, nationality
          diversity, and role benchmarks also matter —{" "}
          <a
            href={EP_MOM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm text-tungsten-soft underline underline-offset-2 hover:text-paper focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            check MOM
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          .
        </p>
      </aside>
    </div>
  );
}
