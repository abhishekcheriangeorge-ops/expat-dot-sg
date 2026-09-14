"use client";

import { useMemo, useState } from "react";
import {
  EP_LAST_REVIEWED,
  EP_MOM_URL,
  estimateEpMinimum,
  formatSgdWhole,
} from "@/lib/tools/ep-threshold";

export function EpThresholdCalculator() {
  const [age, setAge] = useState(32);
  const [sector, setSector] = useState<"general" | "financial">("general");
  const [offered, setOffered] = useState(6500);

  const result = useMemo(
    () => estimateEpMinimum(age, sector),
    [age, sector],
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
              className="w-full accent-[var(--canopy)]"
            />
            <span className="w-10 text-right font-medium tabular-nums text-ink">
              {age}
            </span>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
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
                onClick={() => setSector(id)}
                className={
                  sector === id
                    ? "bg-canopy px-4 py-2 text-sm font-semibold text-paper"
                    : "border border-ink/15 px-4 py-2 text-sm font-medium text-ink hover:border-ink/35"
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
            className="mt-3 w-full max-w-xs border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
          />
        </div>
      </fieldset>

      <aside className="border border-fog-soft bg-paper-elevated p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
          Illustrated minimum
        </p>
        <p className="mt-3 font-display text-4xl text-canopy-deep">
          {formatSgdWhole(result.minimum)}
        </p>
        <p className="mt-3 text-sm text-ink-muted">{result.note}</p>
        <p
          className={`mt-6 text-sm font-medium ${clears ? "text-canopy" : "text-sponsored"}`}
        >
          {clears
            ? `Offer clears this illustration by ${formatSgdWhole(gap)}.`
            : `Offer is ${formatSgdWhole(Math.abs(gap))} below this illustration.`}
        </p>
        <p className="mt-6 text-xs leading-relaxed text-ink-faint">
          Last reviewed {EP_LAST_REVIEWED}. COMPASS points, nationality
          diversity, and role benchmarks also matter —{" "}
          <a
            href={EP_MOM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-canopy underline-offset-2 hover:underline"
          >
            check MOM
          </a>
          .
        </p>
      </aside>
    </div>
  );
}
