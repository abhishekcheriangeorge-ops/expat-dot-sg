"use client";

import { ToolSketchShell } from "./ToolSketchShell";

import { useMemo, useState } from "react";
import {
  SIM_OTP_LAST_REVIEWED,
  estimateSimOtpKeep,
  formatSgd,
  type SimStrategy,
} from "@/lib/tools/sim-otp-keep";

const STRATEGIES: Array<{ id: SimStrategy; label: string }> = [
  { id: "keep-prepaid", label: "Keep prepaid" },
  { id: "keep-postpaid", label: "Keep postpaid" },
  { id: "port-out", label: "Port / transfer" },
  { id: "drop-replace", label: "Drop & replace" },
];

export function SimOtpKeepCalculator() {
  const [monthsNeeded, setMonthsNeeded] = useState(3);
  const [prepaidMonthlySgd, setPrepaidMonthlySgd] = useState(20);
  const [postpaidMonthlySgd, setPostpaidMonthlySgd] = useState(48);
  const [portOneTimeSgd, setPortOneTimeSgd] = useState(40);
  const [replaceOneTimeSgd, setReplaceOneTimeSgd] = useState(80);
  const [strategy, setStrategy] = useState<SimStrategy>("keep-prepaid");

  const result = useMemo(
    () =>
      estimateSimOtpKeep({
        monthsNeeded,
        prepaidMonthlySgd,
        postpaidMonthlySgd,
        portOneTimeSgd,
        replaceOneTimeSgd,
        strategy,
      }),
    [
      monthsNeeded,
      prepaidMonthlySgd,
      postpaidMonthlySgd,
      portOneTimeSgd,
      replaceOneTimeSgd,
      strategy,
    ],
  );

  return (
    <ToolSketchShell
      name="SIM OTP keep sketch"
      description="Sketch prepaid/postpaid keep-or-cancel timing for OTP and banking SMS."
    >
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">SIM / OTP keep inputs</legend>

        <div>
          <label
            htmlFor="sim-months"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
          >
            Months you still need +65 OTP
          </label>
          <input
            id="sim-months"
            type="number"
            min={1}
            max={24}
            step={1}
            value={monthsNeeded}
            onChange={(e) =>
              setMonthsNeeded(Math.max(1, Number(e.target.value) || 1))
            }
            className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Strategy to price
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {STRATEGIES.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setStrategy(s.id)}
                className={
                  strategy === s.id
                    ? "bg-canopy px-4 py-2 text-sm font-semibold text-paper"
                    : "border border-ink/15 px-4 py-2 text-sm font-medium text-ink hover:border-ink/35"
                }
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="sim-prepaid"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Prepaid monthly (SGD)
            </label>
            <input
              id="sim-prepaid"
              type="number"
              min={0}
              step={5}
              value={prepaidMonthlySgd}
              onChange={(e) =>
                setPrepaidMonthlySgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="sim-postpaid"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Postpaid monthly (SGD)
            </label>
            <input
              id="sim-postpaid"
              type="number"
              min={0}
              step={5}
              value={postpaidMonthlySgd}
              onChange={(e) =>
                setPostpaidMonthlySgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="sim-port"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Port / admin one-time (SGD)
            </label>
            <input
              id="sim-port"
              type="number"
              min={0}
              step={10}
              value={portOneTimeSgd}
              onChange={(e) =>
                setPortOneTimeSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="sim-replace"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Replace OTP path one-time (SGD)
            </label>
            <input
              id="sim-replace"
              type="number"
              min={0}
              step={10}
              value={replaceOneTimeSgd}
              onChange={(e) =>
                setReplaceOneTimeSgd(Math.max(0, Number(e.target.value) || 0))
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
            <dt className="text-ink-faint">This strategy cost</dt>
            <dd className="font-medium tabular-nums text-ink">
              {formatSgd(result.keepCostSgd)}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Cheaper sketch path</dt>
            <dd className="font-medium tabular-nums text-canopy">
              {formatSgd(result.alternativeCostSgd)}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Delta vs cheaper</dt>
            <dd className="font-medium tabular-nums text-tungsten">
              {formatSgd(Math.max(0, result.savingsVsAltSgd))}
            </dd>
          </div>
        </dl>
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">{result.note}</p>
        <p className="mt-6 text-xs text-ink-faint">
          Reviewed {SIM_OTP_LAST_REVIEWED}. Not telco advice — contracts, early
          termination, and number-port rules control the real bill.
        </p>
      </aside>
    </div>
    </ToolSketchShell>
  );
}
