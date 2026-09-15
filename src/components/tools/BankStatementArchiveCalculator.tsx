"use client";

import { useMemo, useState } from "react";
import {
  BANK_STATEMENT_ARCHIVE_LAST_REVIEWED,
  estimateBankStatementArchive,
  formatSgd,
  type BankArchiveMode,
} from "@/lib/tools/bank-statement-archive";

const MODES: Array<{ id: BankArchiveMode; label: string }> = [
  { id: "self-serve-pdf", label: "Self-serve PDF" },
  { id: "branch-reprint", label: "Branch reprint" },
  { id: "rush-courier", label: "Rush + courier" },
];

export function BankStatementArchiveCalculator() {
  const [mode, setMode] = useState<BankArchiveMode>("self-serve-pdf");
  const [monthsNeeded, setMonthsNeeded] = useState(24);
  const [monthsOnHand, setMonthsOnHand] = useState(6);
  const [reprintFeeSgd, setReprintFeeSgd] = useState(15);
  const [rushFeeSgd, setRushFeeSgd] = useState(40);
  const [weeksToClose, setWeeksToClose] = useState(3);

  const result = useMemo(
    () =>
      estimateBankStatementArchive({
        mode,
        monthsNeeded,
        monthsOnHand,
        reprintFeeSgd,
        rushFeeSgd,
        weeksToClose,
      }),
    [
      mode,
      monthsNeeded,
      monthsOnHand,
      reprintFeeSgd,
      rushFeeSgd,
      weeksToClose,
    ],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">Bank statement archive inputs</legend>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Archive path
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
              htmlFor="bank-months-needed"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Months needed
            </label>
            <input
              id="bank-months-needed"
              type="number"
              min={0}
              max={84}
              step={1}
              value={monthsNeeded}
              onChange={(e) =>
                setMonthsNeeded(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="bank-months-hand"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Months already on hand
            </label>
            <input
              id="bank-months-hand"
              type="number"
              min={0}
              max={84}
              step={1}
              value={monthsOnHand}
              onChange={(e) =>
                setMonthsOnHand(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="bank-reprint"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Reprint fee / statement (SGD)
            </label>
            <input
              id="bank-reprint"
              type="number"
              min={0}
              step={5}
              value={reprintFeeSgd}
              onChange={(e) =>
                setReprintFeeSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="bank-rush"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Rush / courier fee (SGD)
            </label>
            <input
              id="bank-rush"
              type="number"
              min={0}
              step={10}
              value={rushFeeSgd}
              onChange={(e) =>
                setRushFeeSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="bank-weeks"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Weeks to account close / fly
            </label>
            <input
              id="bank-weeks"
              type="number"
              min={0}
              max={52}
              step={1}
              value={weeksToClose}
              onChange={(e) =>
                setWeeksToClose(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
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
            <dt className="text-ink-faint">Months gap</dt>
            <dd className="font-medium tabular-nums text-ink">
              {result.monthsGap}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Cash out sketch</dt>
            <dd className="font-medium tabular-nums text-tungsten">
              {formatSgd(result.cashOutSgd)}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Weeks to close</dt>
            <dd className="font-medium tabular-nums text-ink">
              {result.weeksToClose}
            </dd>
          </div>
        </dl>
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">{result.note}</p>
        <p className="mt-6 text-xs text-ink-faint">
          Reviewed {BANK_STATEMENT_ARCHIVE_LAST_REVIEWED}. Not bank advice —
          portal retention and reprint desks control real access and fees.
        </p>
      </aside>
    </div>
  );
}
