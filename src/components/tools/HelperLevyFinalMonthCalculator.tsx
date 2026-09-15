"use client";

import { useMemo, useState } from "react";
import {
  HELPER_LEVY_FINAL_MONTH_LAST_REVIEWED,
  estimateHelperLevyFinalMonth,
  formatSgd,
  type HelperLevyMode,
} from "@/lib/tools/helper-levy-final-month";

const MODES: Array<{ id: HelperLevyMode; label: string }> = [
  { id: "keep-through-month", label: "Keep through month" },
  { id: "mid-month-cancel", label: "Mid-month cancel" },
  { id: "transfer-out", label: "Transfer out" },
];

export function HelperLevyFinalMonthCalculator() {
  const [mode, setMode] = useState<HelperLevyMode>("mid-month-cancel");
  const [monthlyLevySgd, setMonthlyLevySgd] = useState(300);
  const [daysEmployed, setDaysEmployed] = useState(12);
  const [daysInMonth, setDaysInMonth] = useState(30);
  const [adminFeeSgd, setAdminFeeSgd] = useState(60);
  const [waiverClawbackSgd, setWaiverClawbackSgd] = useState(0);

  const result = useMemo(
    () =>
      estimateHelperLevyFinalMonth({
        mode,
        monthlyLevySgd,
        daysEmployed,
        daysInMonth,
        adminFeeSgd,
        waiverClawbackSgd,
      }),
    [
      mode,
      monthlyLevySgd,
      daysEmployed,
      daysInMonth,
      adminFeeSgd,
      waiverClawbackSgd,
    ],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">Helper levy final-month inputs</legend>

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
              htmlFor="levy-monthly"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Monthly levy (SGD)
            </label>
            <input
              id="levy-monthly"
              type="number"
              min={0}
              step={10}
              value={monthlyLevySgd}
              onChange={(e) =>
                setMonthlyLevySgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="levy-admin"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Admin / transfer fee (SGD)
            </label>
            <input
              id="levy-admin"
              type="number"
              min={0}
              step={10}
              value={adminFeeSgd}
              onChange={(e) =>
                setAdminFeeSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="levy-days-employed"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Days employed in final month
            </label>
            <input
              id="levy-days-employed"
              type="number"
              min={0}
              max={31}
              step={1}
              value={daysEmployed}
              onChange={(e) =>
                setDaysEmployed(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="levy-days-month"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Days in that month
            </label>
            <input
              id="levy-days-month"
              type="number"
              min={28}
              max={31}
              step={1}
              value={daysInMonth}
              onChange={(e) =>
                setDaysInMonth(Math.max(28, Number(e.target.value) || 30))
              }
              className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="levy-waiver"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Waiver / concession clawback (SGD)
            </label>
            <input
              id="levy-waiver"
              type="number"
              min={0}
              step={10}
              value={waiverClawbackSgd}
              onChange={(e) =>
                setWaiverClawbackSgd(Math.max(0, Number(e.target.value) || 0))
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
            <dt className="text-ink-faint">Pro-rata levy</dt>
            <dd className="font-medium tabular-nums text-ink">
              {formatSgd(result.proRataLevySgd)}
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
            <dt className="text-ink-faint">Days employed</dt>
            <dd className="font-medium tabular-nums text-ink">
              {result.daysEmployed}
            </dd>
          </div>
        </dl>
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">{result.note}</p>
        <p className="mt-6 text-xs text-ink-faint">
          Reviewed {HELPER_LEVY_FINAL_MONTH_LAST_REVIEWED}. Not MOM filing advice —
          levy concession tables and transfer dates control real cash.
        </p>
      </aside>
    </div>
  );
}
