"use client";

import { useMemo, useState } from "react";
import {
  SCHOOL_EXAM_IB_DEPOSIT_LAST_REVIEWED,
  estimateSchoolExamIbDeposit,
  formatSgd,
  type ExamIbDepositMode,
} from "@/lib/tools/school-exam-ib-deposit";

const MODES: Array<{ id: ExamIbDepositMode; label: string }> = [
  { id: "full-refund", label: "Full refund" },
  { id: "partial-hold", label: "Partial hold" },
  { id: "full-forfeit", label: "Full forfeit" },
];

export function SchoolExamIbDepositCalculator() {
  const [mode, setMode] = useState<ExamIbDepositMode>("full-refund");
  const [depositSgd, setDepositSgd] = useState(1200);
  const [sittingFeeSgd, setSittingFeeSgd] = useState(350);
  const [adminFeeSgd, setAdminFeeSgd] = useState(50);
  const [lateCancelSgd, setLateCancelSgd] = useState(200);
  const [weeksToRefundClose, setWeeksToRefundClose] = useState(4);

  const result = useMemo(
    () =>
      estimateSchoolExamIbDeposit({
        mode,
        depositSgd,
        sittingFeeSgd,
        adminFeeSgd,
        lateCancelSgd,
        weeksToRefundClose,
      }),
    [
      mode,
      depositSgd,
      sittingFeeSgd,
      adminFeeSgd,
      lateCancelSgd,
      weeksToRefundClose,
    ],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">School exam / IB deposit inputs</legend>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Refund path
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
              htmlFor="exam-deposit"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Exam / IB deposit (SGD)
            </label>
            <input
              id="exam-deposit"
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
              htmlFor="exam-sitting"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Sitting / registration fee (SGD)
            </label>
            <input
              id="exam-sitting"
              type="number"
              min={0}
              step={25}
              value={sittingFeeSgd}
              onChange={(e) =>
                setSittingFeeSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="exam-admin"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Admin / transcript fee (SGD)
            </label>
            <input
              id="exam-admin"
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
              htmlFor="exam-late"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Late-cancel / no-show (SGD)
            </label>
            <input
              id="exam-late"
              type="number"
              min={0}
              step={25}
              value={lateCancelSgd}
              onChange={(e) =>
                setLateCancelSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="exam-weeks"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Weeks to refund-window close
            </label>
            <input
              id="exam-weeks"
              type="number"
              min={0}
              max={52}
              step={1}
              value={weeksToRefundClose}
              onChange={(e) =>
                setWeeksToRefundClose(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
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
            <dt className="text-ink-faint">Weeks to window close</dt>
            <dd className="font-medium tabular-nums text-ink">
              {result.weeksToRefundClose}
            </dd>
          </div>
        </dl>
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">{result.note}</p>
        <p className="mt-6 text-xs text-ink-faint">
          Reviewed {SCHOOL_EXAM_IB_DEPOSIT_LAST_REVIEWED}. Not school handbook
          advice — published refund windows and sitting schedules control real
          cash.
        </p>
      </aside>
    </div>
  );
}
