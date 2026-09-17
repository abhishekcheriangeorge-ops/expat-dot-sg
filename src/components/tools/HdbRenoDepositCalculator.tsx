"use client";

import { useMemo, useState } from "react";
import {
  HDB_RENO_DEPOSIT_LAST_REVIEWED,
  estimateHdbRenoDeposit,
  formatSgd,
  type RenoOutcome,
} from "@/lib/tools/hdb-reno-deposit";

const OUTCOMES: Array<{ id: RenoOutcome; label: string }> = [
  { id: "clean-pass", label: "Clean pass" },
  { id: "minor-defects", label: "Minor defects" },
  { id: "major-forfeit", label: "Major forfeit" },
];

export function HdbRenoDepositCalculator() {
  const [depositSgd, setDepositSgd] = useState(5000);
  const [holdDays, setHoldDays] = useState(60);
  const [inspectionDate, setInspectionDate] = useState("2026-09-01");
  const [outcome, setOutcome] = useState<RenoOutcome>("clean-pass");
  const [defectCostSgd, setDefectCostSgd] = useState(800);

  const result = useMemo(
    () =>
      estimateHdbRenoDeposit({
        depositSgd,
        holdDays,
        inspectionDate,
        outcome,
        defectCostSgd,
      }),
    [depositSgd, holdDays, inspectionDate, outcome, defectCostSgd],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">HDB renovation deposit inputs</legend>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="reno-deposit"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Deposit lodged (SGD)
            </label>
            <input
              id="reno-deposit"
              type="number"
              min={0}
              step={100}
              value={depositSgd}
              onChange={(e) =>
                setDepositSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="reno-hold"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Hold / processing days
            </label>
            <input
              id="reno-hold"
              type="number"
              min={0}
              max={365}
              step={1}
              value={holdDays}
              onChange={(e) =>
                setHoldDays(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="reno-inspect"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Inspection / reinstatement date
            </label>
            <input
              id="reno-inspect"
              type="date"
              value={inspectionDate}
              onChange={(e) => setInspectionDate(e.target.value)}
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          {outcome === "minor-defects" ? (
            <div>
              <label
                htmlFor="reno-defect"
                className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
              >
                Defect / make-good cost (SGD)
              </label>
              <input
                id="reno-defect"
                type="number"
                min={0}
                step={50}
                value={defectCostSgd}
                onChange={(e) =>
                  setDefectCostSgd(Math.max(0, Number(e.target.value) || 0))
                }
                className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
              />
            </div>
          ) : null}
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Inspection outcome sketch
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {OUTCOMES.map((o) => (
              <button
                key={o.id}
                type="button"
                onClick={() => setOutcome(o.id)}
                className={
                  outcome === o.id
                    ? "bg-ink px-4 py-2.5 text-sm font-semibold text-paper rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tungsten"
                    : "border border-ink/20 px-4 py-2.5 text-sm font-medium text-ink rounded-sm hover:border-ink/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tungsten"
                }
              >
                {o.label}
              </button>
            ))}
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
            <dt className="text-ink-faint">Expected refund date</dt>
            <dd className="font-medium tabular-nums text-ink">
              {result.expectedRefundDate ?? "—"}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Days until refund</dt>
            <dd className="font-medium tabular-nums text-ink">
              {result.daysUntilRefund ?? "—"}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Refund sketch</dt>
            <dd className="font-medium tabular-nums text-canopy">
              {formatSgd(result.refundSketchSgd)}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">At risk</dt>
            <dd className="font-medium tabular-nums text-tungsten">
              {formatSgd(result.atRiskSgd)}
            </dd>
          </div>
        </dl>
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">{result.note}</p>
        <p className="mt-6 text-xs text-ink-faint">
          Reviewed {HDB_RENO_DEPOSIT_LAST_REVIEWED}. Not HDB advice — permit
          terms and inspection letters control the real refund.
        </p>
      </aside>
    </div>
  );
}
