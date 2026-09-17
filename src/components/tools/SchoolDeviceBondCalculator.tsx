"use client";

import { useMemo, useState } from "react";
import {
  SCHOOL_DEVICE_BOND_LAST_REVIEWED,
  estimateSchoolDeviceBond,
  formatSgd,
  type DeviceBondMode,
} from "@/lib/tools/school-device-bond";

const MODES: Array<{ id: DeviceBondMode; label: string }> = [
  { id: "full-return", label: "Full return" },
  { id: "damage-hold", label: "Damage hold" },
  { id: "lost-forfeit", label: "Lost / forfeit" },
];

export function SchoolDeviceBondCalculator() {
  const [mode, setMode] = useState<DeviceBondMode>("full-return");
  const [bondSgd, setBondSgd] = useState(800);
  const [overdueDays, setOverdueDays] = useState(0);
  const [overduePerDaySgd, setOverduePerDaySgd] = useState(10);
  const [damageSgd, setDamageSgd] = useState(150);
  const [adminFeeSgd, setAdminFeeSgd] = useState(50);

  const result = useMemo(
    () =>
      estimateSchoolDeviceBond({
        mode,
        bondSgd,
        overdueDays,
        overduePerDaySgd,
        damageSgd,
        adminFeeSgd,
      }),
    [mode, bondSgd, overdueDays, overduePerDaySgd, damageSgd, adminFeeSgd],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">School device bond inputs</legend>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Return path
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
              htmlFor="dev-bond"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Device / kit bond (SGD)
            </label>
            <input
              id="dev-bond"
              type="number"
              min={0}
              step={50}
              value={bondSgd}
              onChange={(e) =>
                setBondSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="dev-admin"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Admin / wipe fee (SGD)
            </label>
            <input
              id="dev-admin"
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
              htmlFor="dev-overdue-days"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Overdue days
            </label>
            <input
              id="dev-overdue-days"
              type="number"
              min={0}
              max={120}
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
              htmlFor="dev-overdue-rate"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Overdue fee / day (SGD)
            </label>
            <input
              id="dev-overdue-rate"
              type="number"
              min={0}
              step={5}
              value={overduePerDaySgd}
              onChange={(e) =>
                setOverduePerDaySgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="dev-damage"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Damage / missing kit (SGD)
            </label>
            <input
              id="dev-damage"
              type="number"
              min={0}
              step={25}
              value={damageSgd}
              onChange={(e) =>
                setDamageSgd(Math.max(0, Number(e.target.value) || 0))
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
            <dt className="text-ink-faint">Cash in hope</dt>
            <dd className="font-medium tabular-nums text-canopy">
              {formatSgd(result.cashInSgd)}
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
          Reviewed {SCHOOL_DEVICE_BOND_LAST_REVIEWED}. Not school handbook advice —
          published return windows and replacement schedules control real cash.
        </p>
      </aside>
    </div>
  );
}
