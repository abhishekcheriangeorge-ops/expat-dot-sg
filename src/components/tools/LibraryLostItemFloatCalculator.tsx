"use client";

import { useMemo, useState } from "react";
import {
  LIBRARY_LOST_ITEM_FLOAT_LAST_REVIEWED,
  estimateLibraryLostItemFloat,
  formatSgd,
  type LibraryLostItemMode,
} from "@/lib/tools/library-lost-item-float";

const MODES: Array<{ id: LibraryLostItemMode; label: string }> = [
  { id: "return-clear", label: "Return / clear" },
  { id: "overdue-pay", label: "Overdue pay-down" },
  { id: "lost-replace", label: "Lost / replace" },
];

export function LibraryLostItemFloatCalculator() {
  const [mode, setMode] = useState<LibraryLostItemMode>("overdue-pay");
  const [itemsOutstanding, setItemsOutstanding] = useState(2);
  const [overdueDays, setOverdueDays] = useState(10);
  const [overduePerDaySgd, setOverduePerDaySgd] = useState(0.15);
  const [replaceFeeSgd, setReplaceFeeSgd] = useState(45);
  const [adminFeeSgd, setAdminFeeSgd] = useState(5);

  const result = useMemo(
    () =>
      estimateLibraryLostItemFloat({
        mode,
        itemsOutstanding,
        overdueDays,
        overduePerDaySgd,
        replaceFeeSgd,
        adminFeeSgd,
      }),
    [
      mode,
      itemsOutstanding,
      overdueDays,
      overduePerDaySgd,
      replaceFeeSgd,
      adminFeeSgd,
    ],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">Library lost-item float inputs</legend>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Clearance path
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
              htmlFor="lib-items"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Items still outstanding
            </label>
            <input
              id="lib-items"
              type="number"
              min={0}
              max={40}
              step={1}
              value={itemsOutstanding}
              onChange={(e) =>
                setItemsOutstanding(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="lib-overdue-days"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Overdue days (oldest)
            </label>
            <input
              id="lib-overdue-days"
              type="number"
              min={0}
              max={365}
              step={1}
              value={overdueDays}
              onChange={(e) =>
                setOverdueDays(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="lib-overdue-rate"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Overdue per day (SGD)
            </label>
            <input
              id="lib-overdue-rate"
              type="number"
              min={0}
              step={0.05}
              value={overduePerDaySgd}
              onChange={(e) =>
                setOverduePerDaySgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="lib-replace"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Replace fee per title (SGD)
            </label>
            <input
              id="lib-replace"
              type="number"
              min={0}
              step={5}
              value={replaceFeeSgd}
              onChange={(e) =>
                setReplaceFeeSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="lib-admin"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Admin / processing fee (SGD)
            </label>
            <input
              id="lib-admin"
              type="number"
              min={0}
              step={1}
              value={adminFeeSgd}
              onChange={(e) =>
                setAdminFeeSgd(Math.max(0, Number(e.target.value) || 0))
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
            <dt className="text-ink-faint">Items outstanding</dt>
            <dd className="font-medium tabular-nums text-ink">
              {result.itemsOutstanding}
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
            <dt className="text-ink-faint">Overdue days</dt>
            <dd className="font-medium tabular-nums text-ink">
              {result.overdueDays}
            </dd>
          </div>
        </dl>
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">{result.note}</p>
        <p className="mt-6 text-xs text-ink-faint">
          Reviewed {LIBRARY_LOST_ITEM_FLOAT_LAST_REVIEWED}. Not NLB advice —
          published overdue and replacement schedules control real cash.
        </p>
      </aside>
    </div>
  );
}
