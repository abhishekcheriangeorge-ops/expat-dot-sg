"use client";

import { useMemo, useState } from "react";
import {
  SCHOOL_BUS_LAST_WEEK_FLOAT_LAST_REVIEWED,
  estimateSchoolBusLastWeekFloat,
  formatSgd,
  type SchoolBusLastWeekMode,
} from "@/lib/tools/school-bus-last-week-float";

const MODES: Array<{ id: SchoolBusLastWeekMode; label: string }> = [
  { id: "ride-through", label: "Ride through" },
  { id: "early-cancel", label: "Early cancel" },
  { id: "no-show-forfeit", label: "No-show / forfeit" },
];

export function SchoolBusLastWeekFloatCalculator() {
  const [mode, setMode] = useState<SchoolBusLastWeekMode>("early-cancel");
  const [weeklyFeeSgd, setWeeklyFeeSgd] = useState(180);
  const [rideDaysLeft, setRideDaysLeft] = useState(3);
  const [noticeDaysShort, setNoticeDaysShort] = useState(2);
  const [cancelFeeSgd, setCancelFeeSgd] = useState(50);
  const [siblingFeeSgd, setSiblingFeeSgd] = useState(0);

  const result = useMemo(
    () =>
      estimateSchoolBusLastWeekFloat({
        mode,
        weeklyFeeSgd,
        rideDaysLeft,
        noticeDaysShort,
        cancelFeeSgd,
        siblingFeeSgd,
      }),
    [
      mode,
      weeklyFeeSgd,
      rideDaysLeft,
      noticeDaysShort,
      cancelFeeSgd,
      siblingFeeSgd,
    ],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">School bus last-week float inputs</legend>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Last-week path
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {MODES.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setMode(m.id)}
                className={
                  mode === m.id
                    ? "bg-canopy px-4 py-2 text-sm font-semibold text-paper"
                    : "border border-ink/15 px-4 py-2 text-sm font-medium text-ink hover:border-ink/35"
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
              htmlFor="bus-weekly"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Weekly bus fee (SGD)
            </label>
            <input
              id="bus-weekly"
              type="number"
              min={0}
              step={10}
              value={weeklyFeeSgd}
              onChange={(e) =>
                setWeeklyFeeSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="bus-cancel"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Cancel / admin fee (SGD)
            </label>
            <input
              id="bus-cancel"
              type="number"
              min={0}
              step={10}
              value={cancelFeeSgd}
              onChange={(e) =>
                setCancelFeeSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="bus-ride-days"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Ride days left this week
            </label>
            <input
              id="bus-ride-days"
              type="number"
              min={0}
              max={30}
              step={1}
              value={rideDaysLeft}
              onChange={(e) =>
                setRideDaysLeft(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="bus-notice-short"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Notice days still short
            </label>
            <input
              id="bus-notice-short"
              type="number"
              min={0}
              max={30}
              step={1}
              value={noticeDaysShort}
              onChange={(e) =>
                setNoticeDaysShort(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="bus-sibling"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Sibling fee still due (SGD)
            </label>
            <input
              id="bus-sibling"
              type="number"
              min={0}
              step={10}
              value={siblingFeeSgd}
              onChange={(e) =>
                setSiblingFeeSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
        </div>
      </fieldset>

      <aside className="border border-fog-soft bg-paper-elevated p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
          Sketch
        </p>
        <p className="mt-4 text-sm font-semibold text-ink">{result.headline}</p>
        <dl className="mt-6 space-y-3 text-sm">
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Ride cost sketch</dt>
            <dd className="font-medium tabular-nums text-ink">
              {formatSgd(result.rideCostSgd)}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Cash out sketch</dt>
            <dd className="font-medium tabular-nums text-tungsten">
              {formatSgd(result.cashOutSgd)}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Net sketch</dt>
            <dd className="font-medium tabular-nums text-ink">
              {formatSgd(result.netSketchSgd)}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Ride days left</dt>
            <dd className="font-medium tabular-nums text-ink">
              {result.rideDaysLeft}
            </dd>
          </div>
        </dl>
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">{result.note}</p>
        <p className="mt-6 text-xs text-ink-faint">
          Reviewed {SCHOOL_BUS_LAST_WEEK_FLOAT_LAST_REVIEWED}. Not operator
          advice — published notice windows and sibling fee clauses control real
          cash.
        </p>
      </aside>
    </div>
  );
}
