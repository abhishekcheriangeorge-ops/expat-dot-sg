"use client";

import { useMemo, useState } from "react";
import {
  FIBRE_ETF_LAST_REVIEWED,
  estimateFibreBroadbandEtf,
  formatSgd,
  type FibreEtfMode,
} from "@/lib/tools/fibre-broadband-etf";

const MODES: Array<{ id: FibreEtfMode; label: string }> = [
  { id: "serve-notice", label: "Serve months" },
  { id: "pay-etf", label: "Pay ETF" },
  { id: "transfer-takeover", label: "Transfer" },
];

export function FibreBroadbandEtfCalculator() {
  const [mode, setMode] = useState<FibreEtfMode>("pay-etf");
  const [monthsRemaining, setMonthsRemaining] = useState(6);
  const [monthlyFeeSgd, setMonthlyFeeSgd] = useState(55);
  const [etfSgd, setEtfSgd] = useState(280);
  const [transferFeeSgd, setTransferFeeSgd] = useState(50);
  const [rebateClawbackSgd, setRebateClawbackSgd] = useState(120);

  const result = useMemo(
    () =>
      estimateFibreBroadbandEtf({
        mode,
        monthsRemaining,
        monthlyFeeSgd,
        etfSgd,
        transferFeeSgd,
        rebateClawbackSgd,
      }),
    [
      mode,
      monthsRemaining,
      monthlyFeeSgd,
      etfSgd,
      transferFeeSgd,
      rebateClawbackSgd,
    ],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">Fibre broadband ETF inputs</legend>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Exit path
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
              htmlFor="fibre-months"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Months remaining
            </label>
            <input
              id="fibre-months"
              type="number"
              min={0}
              max={36}
              step={1}
              value={monthsRemaining}
              onChange={(e) =>
                setMonthsRemaining(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="fibre-monthly"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Monthly plan fee (SGD)
            </label>
            <input
              id="fibre-monthly"
              type="number"
              min={0}
              step={5}
              value={monthlyFeeSgd}
              onChange={(e) =>
                setMonthlyFeeSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="fibre-etf"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              ETF / device reclaim (SGD)
            </label>
            <input
              id="fibre-etf"
              type="number"
              min={0}
              step={10}
              value={etfSgd}
              onChange={(e) =>
                setEtfSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="fibre-transfer"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Transfer / takeover fee (SGD)
            </label>
            <input
              id="fibre-transfer"
              type="number"
              min={0}
              step={10}
              value={transferFeeSgd}
              onChange={(e) =>
                setTransferFeeSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="fibre-rebate"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Rebate clawback (SGD)
            </label>
            <input
              id="fibre-rebate"
              type="number"
              min={0}
              step={10}
              value={rebateClawbackSgd}
              onChange={(e) =>
                setRebateClawbackSgd(Math.max(0, Number(e.target.value) || 0))
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
            <dt className="text-ink-faint">Months left</dt>
            <dd className="font-medium tabular-nums text-ink">
              {result.monthsRemaining}
            </dd>
          </div>
        </dl>
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">{result.note}</p>
        <p className="mt-6 text-xs text-ink-faint">
          Reviewed {FIBRE_ETF_LAST_REVIEWED}. Not ISP advice — published early-exit
          schedules and promo clawbacks control real cash.
        </p>
      </aside>
    </div>
  );
}
