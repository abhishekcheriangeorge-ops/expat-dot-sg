"use client";

import { useMemo, useState } from "react";
import {
  PHARMACY_LAST_REFILL_FLOAT_LAST_REVIEWED,
  estimatePharmacyLastRefillFloat,
  formatSgd,
  type PharmacyLastRefillMode,
} from "@/lib/tools/pharmacy-last-refill-float";

const MODES: Array<{ id: PharmacyLastRefillMode; label: string }> = [
  { id: "polyclinic-refill", label: "Polyclinic refill" },
  { id: "private-topup", label: "Private top-up" },
  { id: "travel-fill", label: "Travel / extended fill" },
];

export function PharmacyLastRefillFloatCalculator() {
  const [mode, setMode] = useState<PharmacyLastRefillMode>("private-topup");
  const [daysCoverNeeded, setDaysCoverNeeded] = useState(45);
  const [daysOnHand, setDaysOnHand] = useState(14);
  const [refillFeeSgd, setRefillFeeSgd] = useState(80);
  const [privatePremiumSgd, setPrivatePremiumSgd] = useState(120);
  const [familyAddOnSgd, setFamilyAddOnSgd] = useState(0);

  const result = useMemo(
    () =>
      estimatePharmacyLastRefillFloat({
        mode,
        daysCoverNeeded,
        daysOnHand,
        refillFeeSgd,
        privatePremiumSgd,
        familyAddOnSgd,
      }),
    [
      mode,
      daysCoverNeeded,
      daysOnHand,
      refillFeeSgd,
      privatePremiumSgd,
      familyAddOnSgd,
    ],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">Pharmacy last-refill float inputs</legend>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Refill path
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
              htmlFor="rx-days-needed"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Days of cover needed
            </label>
            <input
              id="rx-days-needed"
              type="number"
              min={0}
              max={180}
              step={1}
              value={daysCoverNeeded}
              onChange={(e) =>
                setDaysCoverNeeded(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="rx-days-hand"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Days already on hand
            </label>
            <input
              id="rx-days-hand"
              type="number"
              min={0}
              max={180}
              step={1}
              value={daysOnHand}
              onChange={(e) =>
                setDaysOnHand(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="rx-refill-fee"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Refill / script fee (SGD)
            </label>
            <input
              id="rx-refill-fee"
              type="number"
              min={0}
              step={10}
              value={refillFeeSgd}
              onChange={(e) =>
                setRefillFeeSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="rx-private-premium"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Private consult premium (SGD)
            </label>
            <input
              id="rx-private-premium"
              type="number"
              min={0}
              step={10}
              value={privatePremiumSgd}
              onChange={(e) =>
                setPrivatePremiumSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="rx-family"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Family add-on still due (SGD)
            </label>
            <input
              id="rx-family"
              type="number"
              min={0}
              step={10}
              value={familyAddOnSgd}
              onChange={(e) =>
                setFamilyAddOnSgd(Math.max(0, Number(e.target.value) || 0))
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
            <dt className="text-ink-faint">Days still uncovered</dt>
            <dd className="font-medium tabular-nums text-ink">
              {result.daysGap}
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
            <dt className="text-ink-faint">Days of cover needed</dt>
            <dd className="font-medium tabular-nums text-ink">
              {result.daysCoverNeeded}
            </dd>
          </div>
        </dl>
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">{result.note}</p>
        <p className="mt-6 text-xs text-ink-faint">
          Reviewed {PHARMACY_LAST_REFILL_FLOAT_LAST_REVIEWED}. Not clinical or
          HSA advice — clinic refill rules and destination import limits control
          real cash and carry rights.
        </p>
      </aside>
    </div>
  );
}
