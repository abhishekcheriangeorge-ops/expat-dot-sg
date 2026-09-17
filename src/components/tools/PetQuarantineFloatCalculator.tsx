"use client";

import { useMemo, useState } from "react";
import {
  PET_QUARANTINE_LAST_REVIEWED,
  estimatePetQuarantineFloat,
  formatSgd,
  type PetFloatMode,
} from "@/lib/tools/pet-quarantine-float";

const MODES: Array<{ id: PetFloatMode; label: string }> = [
  { id: "direct-export", label: "Direct export" },
  { id: "quarantine-arrival", label: "Arrival quarantine" },
  { id: "delay-hold", label: "Delay / retest" },
];

export function PetQuarantineFloatCalculator() {
  const [mode, setMode] = useState<PetFloatMode>("quarantine-arrival");
  const [vetDocsSgd, setVetDocsSgd] = useState(1200);
  const [travelSgd, setTravelSgd] = useState(1800);
  const [quarantineDays, setQuarantineDays] = useState(14);
  const [quarantineDailySgd, setQuarantineDailySgd] = useState(80);
  const [bufferSgd, setBufferSgd] = useState(400);

  const result = useMemo(
    () =>
      estimatePetQuarantineFloat({
        mode,
        vetDocsSgd,
        travelSgd,
        quarantineDays,
        quarantineDailySgd,
        bufferSgd,
      }),
    [
      mode,
      vetDocsSgd,
      travelSgd,
      quarantineDays,
      quarantineDailySgd,
      bufferSgd,
    ],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">Pet quarantine float inputs</legend>

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
              htmlFor="pet-vet"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Vet / titre / AVS docs (SGD)
            </label>
            <input
              id="pet-vet"
              type="number"
              min={0}
              step={50}
              value={vetDocsSgd}
              onChange={(e) =>
                setVetDocsSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="pet-travel"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Crate + airline pet fee (SGD)
            </label>
            <input
              id="pet-travel"
              type="number"
              min={0}
              step={50}
              value={travelSgd}
              onChange={(e) =>
                setTravelSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="pet-days"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Quarantine / kennel days
            </label>
            <input
              id="pet-days"
              type="number"
              min={0}
              max={180}
              step={1}
              value={quarantineDays}
              onChange={(e) =>
                setQuarantineDays(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="pet-daily"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Daily kennel rate (SGD)
            </label>
            <input
              id="pet-daily"
              type="number"
              min={0}
              step={5}
              value={quarantineDailySgd}
              onChange={(e) =>
                setQuarantineDailySgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="pet-buffer"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Contingency buffer (SGD)
            </label>
            <input
              id="pet-buffer"
              type="number"
              min={0}
              step={50}
              value={bufferSgd}
              onChange={(e) =>
                setBufferSgd(Math.max(0, Number(e.target.value) || 0))
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
            <dt className="text-ink-faint">Quarantine days</dt>
            <dd className="font-medium tabular-nums text-ink">
              {result.quarantineDays}
            </dd>
          </div>
        </dl>
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">{result.note}</p>
        <p className="mt-6 text-xs text-ink-faint">
          Reviewed {PET_QUARANTINE_LAST_REVIEWED}. Not AVS or airline advice —
          destination rules and carrier tariffs control real cash.
        </p>
      </aside>
    </div>
  );
}
