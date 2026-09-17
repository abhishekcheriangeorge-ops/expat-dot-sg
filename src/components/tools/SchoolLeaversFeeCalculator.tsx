"use client";

import { useMemo, useState } from "react";
import {
  SCHOOL_LEAVERS_LAST_REVIEWED,
  estimateSchoolLeaversFee,
  formatSgd,
  type LeaversFeeMode,
} from "@/lib/tools/school-leavers-fee";

const MODES: Array<{ id: LeaversFeeMode; label: string }> = [
  { id: "core-only", label: "Core only" },
  { id: "core-plus-yearbook", label: "Core + yearbook" },
  { id: "full-optional", label: "Full optional" },
];

export function SchoolLeaversFeeCalculator() {
  const [mode, setMode] = useState<LeaversFeeMode>("core-plus-yearbook");
  const [coreFeeSgd, setCoreFeeSgd] = useState(120);
  const [yearbookSgd, setYearbookSgd] = useState(85);
  const [optionalSgd, setOptionalSgd] = useState(180);
  const [departingChildren, setDepartingChildren] = useState(1);
  const [siblingDiscountFraction, setSiblingDiscountFraction] = useState(0.1);

  const result = useMemo(
    () =>
      estimateSchoolLeaversFee({
        mode,
        coreFeeSgd,
        yearbookSgd,
        optionalSgd,
        departingChildren,
        siblingDiscountFraction,
      }),
    [
      mode,
      coreFeeSgd,
      yearbookSgd,
      optionalSgd,
      departingChildren,
      siblingDiscountFraction,
    ],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">School leavers fee inputs</legend>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Fee path
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
              htmlFor="leavers-core"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Core leavers fee (SGD)
            </label>
            <input
              id="leavers-core"
              type="number"
              min={0}
              step={10}
              value={coreFeeSgd}
              onChange={(e) =>
                setCoreFeeSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="leavers-yearbook"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Yearbook fee (SGD)
            </label>
            <input
              id="leavers-yearbook"
              type="number"
              min={0}
              step={5}
              value={yearbookSgd}
              onChange={(e) =>
                setYearbookSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="leavers-optional"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Optional packs (SGD)
            </label>
            <input
              id="leavers-optional"
              type="number"
              min={0}
              step={10}
              value={optionalSgd}
              onChange={(e) =>
                setOptionalSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="leavers-children"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Departing children
            </label>
            <input
              id="leavers-children"
              type="number"
              min={1}
              max={6}
              step={1}
              value={departingChildren}
              onChange={(e) =>
                setDepartingChildren(
                  Math.min(6, Math.max(1, Number(e.target.value) || 1)),
                )
              }
              className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="leavers-sibling"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Sibling discount fraction (0–1)
            </label>
            <input
              id="leavers-sibling"
              type="number"
              min={0}
              max={1}
              step={0.05}
              value={siblingDiscountFraction}
              onChange={(e) =>
                setSiblingDiscountFraction(
                  Math.min(1, Math.max(0, Number(e.target.value) || 0)),
                )
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
            <dt className="text-ink-faint">Common sketch</dt>
            <dd className="font-medium tabular-nums text-canopy">
              {formatSgd(result.altCostSgd)}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Delta vs common</dt>
            <dd className="font-medium tabular-nums text-tungsten">
              {formatSgd(Math.max(0, result.savingsVsAltSgd))}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Children</dt>
            <dd className="font-medium tabular-nums text-ink">
              {result.departingChildren}
            </dd>
          </div>
        </dl>
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">{result.note}</p>
        <p className="mt-6 text-xs text-ink-faint">
          Reviewed {SCHOOL_LEAVERS_LAST_REVIEWED}. Not school handbook advice —
          published leavers schedules control real cash.
        </p>
      </aside>
    </div>
  );
}
