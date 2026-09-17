"use client";

import { useMemo, useState } from "react";
import {
  FDW_LEVY_BANDS,
  FDW_LEVY_LAST_REVIEWED,
  estimateFdwLevy,
  formatSgd,
  type FdwLevyBandId,
} from "@/lib/tools/fdw-levy";

export function FdwLevyCalculator() {
  const [bandId, setBandId] = useState<FdwLevyBandId>("full-first");
  const [months, setMonths] = useState(12);
  const [customMonthly, setCustomMonthly] = useState<string>("");

  const result = useMemo(
    () =>
      estimateFdwLevy({
        bandId,
        months,
        customMonthly: customMonthly.trim()
          ? Number(customMonthly)
          : undefined,
      }),
    [bandId, months, customMonthly],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">FDW levy inputs</legend>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Levy band
          </p>
          <div className="mt-3 flex flex-col gap-2">
            {FDW_LEVY_BANDS.map((b) => (
              <button
                key={b.id}
                type="button"
                onClick={() => setBandId(b.id)}
                className={
                  bandId === b.id
                    ? "bg-ink px-4 py-3 text-left text-sm font-semibold text-paper rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tungsten"
                    : "border border-ink/20 px-4 py-3 text-left text-sm font-medium text-ink rounded-sm hover:border-ink/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tungsten"
                }
              >
                {b.label}
                <span className="mt-1 block text-xs font-normal opacity-80">
                  {formatSgd(b.monthly)} / month
                </span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="fdw-months"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
          >
            Months to sketch
          </label>
          <input
            id="fdw-months"
            type="number"
            min={1}
            max={48}
            step={1}
            value={months}
            onChange={(e) => setMonths(Math.max(0, Number(e.target.value) || 0))}
            className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
          />
          <div className="mt-3 flex flex-wrap gap-2">
            {[6, 12, 24].map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMonths(m)}
                className={
                  months === m
                    ? "border border-canopy bg-canopy px-3 py-1.5 text-xs font-medium text-paper"
                    : "border border-ink/20 px-4 py-2.5 text-[13px] font-medium text-ink-muted rounded-sm hover:border-ink/50 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tungsten"
                }
              >
                {m} mo
              </button>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="fdw-custom"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
          >
            Custom monthly levy (optional)
          </label>
          <input
            id="fdw-custom"
            type="number"
            min={0}
            step={10}
            placeholder="Leave blank to use band"
            value={customMonthly}
            onChange={(e) => setCustomMonthly(e.target.value)}
            className="mt-3 w-full max-w-[12rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
          />
          <p className="mt-2 text-xs text-ink-faint">
            Paste the figure from your MOM levy letter when you already have one.
          </p>
        </div>
      </fieldset>

      <aside className="rounded-sm border border-ink/15 bg-paper-elevated p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
          Sketch · total levy
        </p>
        <p className="mt-4 font-display text-4xl tabular-nums text-ink">
          {formatSgd(result.total)}
        </p>
        <p className="mt-3 text-sm text-ink-muted">
          {result.bandLabel} × {result.months} month
          {result.months === 1 ? "" : "s"}
        </p>
        <dl className="mt-6 space-y-2 text-sm text-ink-muted">
          <div className="flex justify-between gap-4">
            <dt>Monthly</dt>
            <dd className="tabular-nums text-ink">{formatSgd(result.monthly)}</dd>
          </div>
        </dl>
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">{result.note}</p>
        <p className="mt-6 text-xs text-ink-faint">
          Last reviewed {FDW_LEVY_LAST_REVIEWED}. Orientation only — not MOM
          advice. Check{" "}
          <a
            href="https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker/foreign-domestic-worker-levy"
            className="font-medium text-canopy no-underline hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            MOM FDW levy
          </a>
          .
        </p>
      </aside>
    </div>
  );
}
