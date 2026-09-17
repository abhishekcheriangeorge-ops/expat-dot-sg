"use client";

import { useMemo, useState } from "react";
import {
  DRIVING_INSURANCE_LAST_REVIEWED,
  estimateDrivingInsuranceGap,
  formatSgd,
  type InsuranceGapMode,
} from "@/lib/tools/driving-insurance-gap";

const MODES: Array<{ id: InsuranceGapMode; label: string }> = [
  { id: "extend-local", label: "Extend cover" },
  { id: "daily-float", label: "Daily float" },
  { id: "drop-and-grab", label: "Grab only" },
];

export function DrivingInsuranceGapCalculator() {
  const [mode, setMode] = useState<InsuranceGapMode>("extend-local");
  const [gapDays, setGapDays] = useState(21);
  const [dailyFloatSgd, setDailyFloatSgd] = useState(35);
  const [extendCostSgd, setExtendCostSgd] = useState(280);
  const [grabBudgetSgd, setGrabBudgetSgd] = useState(450);
  const [addonSgd, setAddonSgd] = useState(60);

  const result = useMemo(
    () =>
      estimateDrivingInsuranceGap({
        mode,
        gapDays,
        dailyFloatSgd,
        extendCostSgd,
        grabBudgetSgd,
        addonSgd,
      }),
    [mode, gapDays, dailyFloatSgd, extendCostSgd, grabBudgetSgd, addonSgd],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">Driving insurance gap inputs</legend>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Path to price
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {MODES.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setMode(m.id)}
                className={
                  mode === m.id
                    ? "bg-ink px-4 py-2.5 text-sm font-semibold text-paper rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tungsten"
                    : "border border-ink/20 px-4 py-2.5 text-sm font-medium text-ink rounded-sm hover:border-ink/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tungsten"
                }
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="ins-days"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Gap days still driving
            </label>
            <input
              id="ins-days"
              type="number"
              min={1}
              max={180}
              step={1}
              value={gapDays}
              onChange={(e) =>
                setGapDays(Math.max(1, Number(e.target.value) || 1))
              }
              className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="ins-extend"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Extend cover cost (SGD)
            </label>
            <input
              id="ins-extend"
              type="number"
              min={0}
              step={10}
              value={extendCostSgd}
              onChange={(e) =>
                setExtendCostSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="ins-daily"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Daily risk float (SGD)
            </label>
            <input
              id="ins-daily"
              type="number"
              min={0}
              step={5}
              value={dailyFloatSgd}
              onChange={(e) =>
                setDailyFloatSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="ins-grab"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Grab / taxi budget (SGD)
            </label>
            <input
              id="ins-grab"
              type="number"
              min={0}
              step={10}
              value={grabBudgetSgd}
              onChange={(e) =>
                setGrabBudgetSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="ins-addon"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Named-driver / add-on (SGD)
            </label>
            <input
              id="ins-addon"
              type="number"
              min={0}
              step={10}
              value={addonSgd}
              onChange={(e) =>
                setAddonSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
        </div>
      </fieldset>

      <aside className="rounded-sm border border-ink/15 bg-paper-elevated p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
          Sketch
        </p>
        <p className="mt-4 text-sm font-semibold text-ink">{result.headline}</p>
        <dl className="mt-6 space-y-3 text-sm">
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">This path cost</dt>
            <dd className="font-medium tabular-nums text-ink">
              {formatSgd(result.pathCostSgd)}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Cheaper sketch</dt>
            <dd className="font-medium tabular-nums text-canopy">
              {formatSgd(result.altCostSgd)}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Delta vs cheaper</dt>
            <dd className="font-medium tabular-nums text-tungsten">
              {formatSgd(Math.max(0, result.savingsVsAltSgd))}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Gap days</dt>
            <dd className="font-medium tabular-nums text-ink">{result.gapDays}</dd>
          </div>
        </dl>
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">{result.note}</p>
        <p className="mt-6 text-xs text-ink-faint">
          Reviewed {DRIVING_INSURANCE_LAST_REVIEWED}. Not insurer advice — policy
          wordings and named-driver rules control real cover.
        </p>
      </aside>
    </div>
  );
}
