"use client";

import { useMemo, useState } from "react";
import {
  TUITION_BOND_LAST_REVIEWED,
  estimateTuitionCentreBond,
  formatSgd,
  type TuitionBondMode,
} from "@/lib/tools/tuition-centre-bond";

const MODES: Array<{ id: TuitionBondMode; label: string }> = [
  { id: "full-refund", label: "Full refund hope" },
  { id: "notice-partial", label: "Notice partial" },
  { id: "forfeit-package", label: "Forfeit package" },
];

export function TuitionCentreBondCalculator() {
  const [mode, setMode] = useState<TuitionBondMode>("notice-partial");
  const [bondSgd, setBondSgd] = useState(300);
  const [unusedPackageSgd, setUnusedPackageSgd] = useState(600);
  const [noticeFeeSgd, setNoticeFeeSgd] = useState(50);
  const [materialsHoldSgd, setMaterialsHoldSgd] = useState(40);
  const [noticeMonths, setNoticeMonths] = useState(1);
  const [monthlyPackageSgd, setMonthlyPackageSgd] = useState(280);

  const result = useMemo(
    () =>
      estimateTuitionCentreBond({
        mode,
        bondSgd,
        unusedPackageSgd,
        noticeFeeSgd,
        materialsHoldSgd,
        noticeMonths,
        monthlyPackageSgd,
      }),
    [
      mode,
      bondSgd,
      unusedPackageSgd,
      noticeFeeSgd,
      materialsHoldSgd,
      noticeMonths,
      monthlyPackageSgd,
    ],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">Tuition centre bond inputs</legend>

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
              htmlFor="tuition-bond"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Enrolment bond (SGD)
            </label>
            <input
              id="tuition-bond"
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
              htmlFor="tuition-unused"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Unused package value (SGD)
            </label>
            <input
              id="tuition-unused"
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
              htmlFor="tuition-notice-fee"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Notice / admin fee (SGD)
            </label>
            <input
              id="tuition-notice-fee"
              type="number"
              min={0}
              step={10}
              value={noticeFeeSgd}
              onChange={(e) =>
                setNoticeFeeSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="tuition-materials"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Materials hold (SGD)
            </label>
            <input
              id="tuition-materials"
              type="number"
              min={0}
              step={10}
              value={materialsHoldSgd}
              onChange={(e) =>
                setMaterialsHoldSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="tuition-months"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Notice months
            </label>
            <input
              id="tuition-months"
              type="number"
              min={0}
              max={12}
              step={1}
              value={noticeMonths}
              onChange={(e) =>
                setNoticeMonths(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="tuition-monthly"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Monthly package rate (SGD)
            </label>
            <input
              id="tuition-monthly"
              type="number"
              min={0}
              step={10}
              value={monthlyPackageSgd}
              onChange={(e) =>
                setMonthlyPackageSgd(Math.max(0, Number(e.target.value) || 0))
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
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Notice months</dt>
            <dd className="font-medium tabular-nums text-ink">
              {result.noticeMonths}
            </dd>
          </div>
        </dl>
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">{result.note}</p>
        <p className="mt-6 text-xs text-ink-faint">
          Reviewed {TUITION_BOND_LAST_REVIEWED}. Not centre handbook advice —
          published notice and package schedules control real cash.
        </p>
      </aside>
    </div>
  );
}
