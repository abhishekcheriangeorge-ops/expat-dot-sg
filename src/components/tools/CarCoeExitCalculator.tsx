"use client";

import { useMemo, useState } from "react";
import {
  CAR_COE_EXIT_LAST_REVIEWED,
  estimateCarCoeExit,
  formatSgd,
  type CarCoeExitMode,
} from "@/lib/tools/car-coe-exit";

const MODES: Array<{ id: CarCoeExitMode; label: string }> = [
  { id: "sell-local", label: "Sell local" },
  { id: "export-scrap", label: "Export / scrap" },
  { id: "transfer-keep", label: "Transfer / keep" },
];

export function CarCoeExitCalculator() {
  const [mode, setMode] = useState<CarCoeExitMode>("sell-local");
  const [saleProceedsSgd, setSaleProceedsSgd] = useState(42000);
  const [rebateSketchSgd, setRebateSketchSgd] = useState(12000);
  const [loanBalanceSgd, setLoanBalanceSgd] = useState(18000);
  const [exitFeesSgd, setExitFeesSgd] = useState(1500);
  const [prepaidMonths, setPrepaidMonths] = useState(2);
  const [prepaidMonthlySgd, setPrepaidMonthlySgd] = useState(250);

  const result = useMemo(
    () =>
      estimateCarCoeExit({
        mode,
        saleProceedsSgd,
        rebateSketchSgd,
        loanBalanceSgd,
        exitFeesSgd,
        prepaidMonths,
        prepaidMonthlySgd,
      }),
    [
      mode,
      saleProceedsSgd,
      rebateSketchSgd,
      loanBalanceSgd,
      exitFeesSgd,
      prepaidMonths,
      prepaidMonthlySgd,
    ],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">Car / COE exit inputs</legend>

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
              htmlFor="car-sale"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Sale / transfer proceeds (SGD)
            </label>
            <input
              id="car-sale"
              type="number"
              min={0}
              step={500}
              value={saleProceedsSgd}
              onChange={(e) =>
                setSaleProceedsSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="car-rebate"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              PARF / COE rebate sketch (SGD)
            </label>
            <input
              id="car-rebate"
              type="number"
              min={0}
              step={500}
              value={rebateSketchSgd}
              onChange={(e) =>
                setRebateSketchSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="car-loan"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Loan / HP balance (SGD)
            </label>
            <input
              id="car-loan"
              type="number"
              min={0}
              step={500}
              value={loanBalanceSgd}
              onChange={(e) =>
                setLoanBalanceSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="car-fees"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Exit fees & logistics (SGD)
            </label>
            <input
              id="car-fees"
              type="number"
              min={0}
              step={100}
              value={exitFeesSgd}
              onChange={(e) =>
                setExitFeesSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="car-prepaid-mo"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Prepaid months left
            </label>
            <input
              id="car-prepaid-mo"
              type="number"
              min={0}
              max={36}
              step={1}
              value={prepaidMonths}
              onChange={(e) =>
                setPrepaidMonths(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="car-prepaid-amt"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Prepaid monthly (SGD)
            </label>
            <input
              id="car-prepaid-amt"
              type="number"
              min={0}
              step={10}
              value={prepaidMonthlySgd}
              onChange={(e) =>
                setPrepaidMonthlySgd(Math.max(0, Number(e.target.value) || 0))
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
        <p
          className={
            result.netSketchSgd >= 0
              ? "mt-4 text-sm font-semibold text-canopy"
              : "mt-4 text-sm font-semibold text-tungsten"
          }
        >
          Net {formatSgd(result.netSketchSgd)}
        </p>
        <dl className="mt-6 space-y-3 text-sm">
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Cash in</dt>
            <dd className="font-medium tabular-nums text-ink">
              {formatSgd(result.cashInSgd)}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Cash out</dt>
            <dd className="font-medium tabular-nums text-ink">
              {formatSgd(result.cashOutSgd)}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Prepaid burn</dt>
            <dd className="font-medium tabular-nums text-ink">
              {formatSgd(result.prepaidBurnSgd)}
            </dd>
          </div>
        </dl>
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">{result.note}</p>
        <p className="mt-6 text-xs text-ink-faint">
          Reviewed {CAR_COE_EXIT_LAST_REVIEWED}. Not LTA or finance advice — dealer
          quotes and OneMotoring figures control the real settlement.
        </p>
      </aside>
    </div>
  );
}
