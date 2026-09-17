"use client";

import { useMemo, useState } from "react";
import {
  SCHOOL_DEPOSIT_LAST_REVIEWED,
  estimateSchoolDepositClawback,
  formatSgd,
  type ClawbackMode,
} from "@/lib/tools/school-deposit-clawback";

export function SchoolDepositClawbackCalculator() {
  const [depositSgd, setDepositSgd] = useState(5000);
  const [remainingTuitionSgd, setRemainingTuitionSgd] = useState(12000);
  const [mode, setMode] = useState<ClawbackMode>("pro-rata-term");
  const [forfeitFraction, setForfeitFraction] = useState(1);
  const [termRemainingFraction, setTermRemainingFraction] = useState(0.5);
  const [noticeMet, setNoticeMet] = useState(false);

  const result = useMemo(
    () =>
      estimateSchoolDepositClawback({
        depositSgd,
        remainingTuitionSgd,
        mode,
        forfeitFraction,
        termRemainingFraction,
        noticeMet,
      }),
    [
      depositSgd,
      remainingTuitionSgd,
      mode,
      forfeitFraction,
      termRemainingFraction,
      noticeMet,
    ],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">School deposit clawback inputs</legend>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="sdc-deposit"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Deposit held (SGD)
            </label>
            <input
              id="sdc-deposit"
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
              htmlFor="sdc-tuition"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Remaining tuition (SGD)
            </label>
            <input
              id="sdc-tuition"
              type="number"
              min={0}
              step={100}
              value={remainingTuitionSgd}
              onChange={(e) =>
                setRemainingTuitionSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Contract sketch
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {(
              [
                ["full-forfeit", "Full / heavy forfeit"],
                ["pro-rata-term", "Pro-rata term"],
                ["notice-protected", "Notice-protected"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setMode(id)}
                className={
                  mode === id
                    ? "bg-ink px-4 py-2.5 text-sm font-semibold text-paper rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tungsten"
                    : "border border-ink/20 px-4 py-2.5 text-sm font-medium text-ink rounded-sm hover:border-ink/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tungsten"
                }
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="sdc-forfeit"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Deposit forfeit fraction
            </label>
            <input
              id="sdc-forfeit"
              type="number"
              min={0}
              max={1}
              step={0.05}
              value={forfeitFraction}
              onChange={(e) =>
                setForfeitFraction(
                  Math.min(1, Math.max(0, Number(e.target.value) || 0)),
                )
              }
              className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
            <p className="mt-2 text-xs text-ink-faint">0 = keep all · 1 = lose all</p>
          </div>
          {mode === "pro-rata-term" ? (
            <div>
              <label
                htmlFor="sdc-remain"
                className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
              >
                Term still remaining
              </label>
              <input
                id="sdc-remain"
                type="number"
                min={0}
                max={1}
                step={0.05}
                value={termRemainingFraction}
                onChange={(e) =>
                  setTermRemainingFraction(
                    Math.min(1, Math.max(0, Number(e.target.value) || 0)),
                  )
                }
                className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
              />
              <p className="mt-2 text-xs text-ink-faint">
                e.g. 0.5 if half the term is left
              </p>
            </div>
          ) : null}
          {mode === "notice-protected" ? (
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
                Written notice met?
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[true, false].map((v) => (
                  <button
                    key={String(v)}
                    type="button"
                    onClick={() => setNoticeMet(v)}
                    className={
                      noticeMet === v
                        ? "bg-ink px-4 py-2.5 text-sm font-semibold text-paper rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tungsten"
                        : "border border-ink/20 px-4 py-2.5 text-sm font-medium text-ink rounded-sm hover:border-ink/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tungsten"
                    }
                  >
                    {v ? "Yes" : "No"}
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </fieldset>

      <aside className="rounded-sm border border-ink/15 bg-paper-elevated p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
          Sketch
        </p>
        <p className="mt-4 text-sm font-semibold text-ink">{result.headline}</p>
        <dl className="mt-6 space-y-3 text-sm">
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Deposit at risk</dt>
            <dd className="font-medium tabular-nums text-ink">
              {formatSgd(result.depositAtRiskSgd)}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Tuition at risk</dt>
            <dd className="font-medium tabular-nums text-ink">
              {formatSgd(result.tuitionAtRiskSgd)}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Total cash at risk</dt>
            <dd className="font-medium tabular-nums text-tungsten">
              {formatSgd(result.totalAtRiskSgd)}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Deposit refund sketch</dt>
            <dd className="font-medium tabular-nums text-canopy">
              {formatSgd(result.refundSketchSgd)}
            </dd>
          </div>
        </dl>
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">{result.note}</p>
        <p className="mt-6 text-xs text-ink-faint">
          Reviewed {SCHOOL_DEPOSIT_LAST_REVIEWED}. Not school or legal advice —
          your enrolment contract controls cut-offs and clawbacks.
        </p>
      </aside>
    </div>
  );
}
