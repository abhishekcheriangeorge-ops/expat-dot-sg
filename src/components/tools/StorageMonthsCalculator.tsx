"use client";

import { useMemo, useState } from "react";
import {
  STORAGE_BANDS,
  STORAGE_MONTHS_LAST_REVIEWED,
  estimateStorageMonths,
  formatSgd,
  type StorageBandId,
} from "@/lib/tools/storage-months";

export function StorageMonthsCalculator() {
  const [bandId, setBandId] = useState<StorageBandId>("studio");
  const [months, setMonths] = useState(3);
  const [addOnMonthly, setAddOnMonthly] = useState(25);
  const [accessFee, setAccessFee] = useState(80);

  const result = useMemo(
    () =>
      estimateStorageMonths({
        bandId,
        months,
        addOnMonthly,
        accessFee,
      }),
    [bandId, months, addOnMonthly, accessFee],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">Storage months inputs</legend>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Volume band
          </p>
          <div className="mt-3 flex flex-col gap-2">
            {STORAGE_BANDS.map((b) => (
              <button
                key={b.id}
                type="button"
                onClick={() => setBandId(b.id)}
                className={
                  bandId === b.id
                    ? "bg-canopy px-4 py-3 text-left text-sm font-semibold text-paper"
                    : "border border-ink/15 px-4 py-3 text-left text-sm font-medium text-ink hover:border-ink/35"
                }
              >
                {b.label}
                <span className="mt-1 block text-xs font-normal opacity-80">
                  ~{formatSgd(b.monthly)} / month
                </span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="st-months"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
          >
            Months in storage
          </label>
          <input
            id="st-months"
            type="number"
            min={1}
            max={36}
            step={1}
            value={months}
            onChange={(e) => setMonths(Math.max(0, Number(e.target.value) || 0))}
            className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
          />
          <div className="mt-3 flex flex-wrap gap-2">
            {[1, 2, 3, 6].map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMonths(m)}
                className={
                  months === m
                    ? "border border-canopy bg-canopy px-3 py-1.5 text-xs font-medium text-paper"
                    : "border border-ink/15 px-3 py-1.5 text-xs font-medium text-ink-muted hover:border-ink/30"
                }
              >
                {m} mo
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="st-addon"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Insurance / admin add-on (SGD/mo)
            </label>
            <input
              id="st-addon"
              type="number"
              min={0}
              step={5}
              value={addOnMonthly}
              onChange={(e) =>
                setAddOnMonthly(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="st-access"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              One-time access / delivery (SGD)
            </label>
            <input
              id="st-access"
              type="number"
              min={0}
              step={10}
              value={accessFee}
              onChange={(e) =>
                setAccessFee(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
        </div>
      </fieldset>

      <aside className="border border-fog-soft bg-paper-elevated p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
          Sketch · storage total
        </p>
        <p className="mt-4 font-display text-4xl tabular-nums text-ink">
          {formatSgd(result.total)}
        </p>
        <p className="mt-3 text-sm text-ink-muted">
          {result.bandLabel} × {result.months} month
          {result.months === 1 ? "" : "s"}
        </p>
        <dl className="mt-6 space-y-2 text-sm text-ink-muted">
          <div className="flex justify-between gap-4">
            <dt>Recurring</dt>
            <dd className="tabular-nums text-ink">
              {formatSgd(result.recurringTotal)}
            </dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>One-time access</dt>
            <dd className="tabular-nums text-ink">
              {formatSgd(result.accessFee)}
            </dd>
          </div>
        </dl>
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">{result.note}</p>
        <p className="mt-6 text-xs text-ink-faint">
          Last reviewed {STORAGE_MONTHS_LAST_REVIEWED}. Orientation only — not a
          mover quote.
        </p>
      </aside>
    </div>
  );
}
