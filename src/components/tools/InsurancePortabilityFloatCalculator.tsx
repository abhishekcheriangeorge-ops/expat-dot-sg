"use client";

import { useMemo, useState } from "react";
import {
  INSURANCE_PORTABILITY_LAST_REVIEWED,
  estimateInsurancePortability,
  formatSgd,
  type InsurancePortMode,
} from "@/lib/tools/insurance-portability-float";

const MODES: Array<{ id: InsurancePortMode; label: string }> = [
  { id: "extend-sg", label: "Extend SG cover" },
  { id: "gap-bridge", label: "Gap bridge" },
  { id: "cancel-and-start", label: "Cancel + start" },
];

export function InsurancePortabilityFloatCalculator() {
  const [mode, setMode] = useState<InsurancePortMode>("gap-bridge");
  const [gapDays, setGapDays] = useState(30);
  const [extendCostSgd, setExtendCostSgd] = useState(450);
  const [bridgeCostSgd, setBridgeCostSgd] = useState(220);
  const [cancelFeeSgd, setCancelFeeSgd] = useState(180);
  const [destinationStartSgd, setDestinationStartSgd] = useState(350);

  const result = useMemo(
    () =>
      estimateInsurancePortability({
        mode,
        gapDays,
        extendCostSgd,
        bridgeCostSgd,
        cancelFeeSgd,
        destinationStartSgd,
      }),
    [
      mode,
      gapDays,
      extendCostSgd,
      bridgeCostSgd,
      cancelFeeSgd,
      destinationStartSgd,
    ],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">Insurance portability inputs</legend>

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
              htmlFor="ins-gap-days"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Gap days needing cover
            </label>
            <input
              id="ins-gap-days"
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
              Extend SG cover cost (SGD)
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
              htmlFor="ins-bridge"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Bridge / travel medical (SGD)
            </label>
            <input
              id="ins-bridge"
              type="number"
              min={0}
              step={10}
              value={bridgeCostSgd}
              onChange={(e) =>
                setBridgeCostSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="ins-cancel"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Early cancel / forfeit (SGD)
            </label>
            <input
              id="ins-cancel"
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
              htmlFor="ins-dest"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Destination start cost (SGD)
            </label>
            <input
              id="ins-dest"
              type="number"
              min={0}
              step={10}
              value={destinationStartSgd}
              onChange={(e) =>
                setDestinationStartSgd(Math.max(0, Number(e.target.value) || 0))
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
          Reviewed {INSURANCE_PORTABILITY_LAST_REVIEWED}. Not insurer advice —
          policy wordings and waiting periods control real cover.
        </p>
      </aside>
    </div>
  );
}
