"use client";

import { useMemo, useState } from "react";
import {
  CLINIC_DEPOSIT_LAST_REVIEWED,
  estimateClinicDepositExit,
  formatSgd,
  type ClinicDepositMode,
} from "@/lib/tools/clinic-deposit-exit";

const MODES: Array<{ id: ClinicDepositMode; label: string }> = [
  { id: "full-refund", label: "Full refund hope" },
  { id: "package-offset", label: "Package offset" },
  { id: "forfeit-hold", label: "Forfeit hold" },
];

export function ClinicDepositExitCalculator() {
  const [mode, setMode] = useState<ClinicDepositMode>("package-offset");
  const [depositSgd, setDepositSgd] = useState(500);
  const [unusedPackageSgd, setUnusedPackageSgd] = useState(300);
  const [noShowFeeSgd, setNoShowFeeSgd] = useState(80);
  const [recordsFeeSgd, setRecordsFeeSgd] = useState(50);
  const [openBalanceSgd, setOpenBalanceSgd] = useState(120);

  const result = useMemo(
    () =>
      estimateClinicDepositExit({
        mode,
        depositSgd,
        unusedPackageSgd,
        noShowFeeSgd,
        recordsFeeSgd,
        openBalanceSgd,
      }),
    [
      mode,
      depositSgd,
      unusedPackageSgd,
      noShowFeeSgd,
      recordsFeeSgd,
      openBalanceSgd,
    ],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">Clinic deposit exit inputs</legend>

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
              htmlFor="clinic-deposit"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Clinic / dental deposit (SGD)
            </label>
            <input
              id="clinic-deposit"
              type="number"
              min={0}
              step={50}
              value={depositSgd}
              onChange={(e) =>
                setDepositSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="clinic-package"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Unused package credit (SGD)
            </label>
            <input
              id="clinic-package"
              type="number"
              min={0}
              step={50}
              value={unusedPackageSgd}
              onChange={(e) =>
                setUnusedPackageSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="clinic-noshow"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              No-show / late-cancel fees (SGD)
            </label>
            <input
              id="clinic-noshow"
              type="number"
              min={0}
              step={10}
              value={noShowFeeSgd}
              onChange={(e) =>
                setNoShowFeeSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="clinic-records"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Records / transfer fee (SGD)
            </label>
            <input
              id="clinic-records"
              type="number"
              min={0}
              step={10}
              value={recordsFeeSgd}
              onChange={(e) =>
                setRecordsFeeSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="clinic-open"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Open consult balance (SGD)
            </label>
            <input
              id="clinic-open"
              type="number"
              min={0}
              step={10}
              value={openBalanceSgd}
              onChange={(e) =>
                setOpenBalanceSgd(Math.max(0, Number(e.target.value) || 0))
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
        </dl>
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">{result.note}</p>
        <p className="mt-6 text-xs text-ink-faint">
          Reviewed {CLINIC_DEPOSIT_LAST_REVIEWED}. Not clinic advice — published
          deposit and package schedules control real cash.
        </p>
      </aside>
    </div>
  );
}
