"use client";

import { useMemo, useState } from "react";
import {
  MOBILE_CONTRACT_ETF_FLOAT_LAST_REVIEWED,
  estimateMobileContractEtfFloat,
  formatSgd,
  type MobileContractEtfMode,
} from "@/lib/tools/mobile-contract-etf-float";

const MODES: Array<{ id: MobileContractEtfMode; label: string }> = [
  { id: "ride-contract", label: "Ride out contract" },
  { id: "early-etf", label: "Early ETF" },
  { id: "port-out", label: "Port-out" },
];

export function MobileContractEtfFloatCalculator() {
  const [mode, setMode] = useState<MobileContractEtfMode>("early-etf");
  const [monthsLeft, setMonthsLeft] = useState(8);
  const [monthlyFeeSgd, setMonthlyFeeSgd] = useState(58);
  const [etfSgd, setEtfSgd] = useState(280);
  const [deviceBalanceSgd, setDeviceBalanceSgd] = useState(200);
  const [finalBillSgd, setFinalBillSgd] = useState(40);

  const result = useMemo(
    () =>
      estimateMobileContractEtfFloat({
        mode,
        monthsLeft,
        monthlyFeeSgd,
        etfSgd,
        deviceBalanceSgd,
        finalBillSgd,
      }),
    [
      mode,
      monthsLeft,
      monthlyFeeSgd,
      etfSgd,
      deviceBalanceSgd,
      finalBillSgd,
    ],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">Mobile contract ETF float inputs</legend>

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
              htmlFor="mob-months"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Months left on contract
            </label>
            <input
              id="mob-months"
              type="number"
              min={0}
              max={36}
              step={1}
              value={monthsLeft}
              onChange={(e) =>
                setMonthsLeft(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="mob-monthly"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Monthly plan fee (SGD)
            </label>
            <input
              id="mob-monthly"
              type="number"
              min={0}
              step={1}
              value={monthlyFeeSgd}
              onChange={(e) =>
                setMonthlyFeeSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="mob-etf"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Quoted ETF (SGD)
            </label>
            <input
              id="mob-etf"
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
              htmlFor="mob-device"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Device balance (SGD)
            </label>
            <input
              id="mob-device"
              type="number"
              min={0}
              step={10}
              value={deviceBalanceSgd}
              onChange={(e) =>
                setDeviceBalanceSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="mob-final"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Final-bill / admin (SGD)
            </label>
            <input
              id="mob-final"
              type="number"
              min={0}
              step={5}
              value={finalBillSgd}
              onChange={(e) =>
                setFinalBillSgd(Math.max(0, Number(e.target.value) || 0))
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
            <dt className="text-ink-faint">Months left</dt>
            <dd className="font-medium tabular-nums text-ink">
              {result.monthsLeft}
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
            <dt className="text-ink-faint">ETF quoted</dt>
            <dd className="font-medium tabular-nums text-ink">
              {formatSgd(result.etfSgd)}
            </dd>
          </div>
        </dl>
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">{result.note}</p>
        <p className="mt-6 text-xs text-ink-faint">
          Reviewed {MOBILE_CONTRACT_ETF_FLOAT_LAST_REVIEWED}. Not telco advice —
          published ETF and device schedules control real cash.
        </p>
      </aside>
    </div>
  );
}
