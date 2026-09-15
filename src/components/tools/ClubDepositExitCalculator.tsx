"use client";

import { ToolSketchShell } from "./ToolSketchShell";

import { useMemo, useState } from "react";
import {
  CLUB_DEPOSIT_LAST_REVIEWED,
  estimateClubDepositExit,
  formatSgd,
  type ClubExitMode,
} from "@/lib/tools/club-deposit-exit";

const MODES: Array<{ id: ClubExitMode; label: string }> = [
  { id: "full-refund", label: "Full refund hope" },
  { id: "partial-refund", label: "Partial refund" },
  { id: "forfeit-dues", label: "Forfeit + dues" },
];

export function ClubDepositExitCalculator() {
  const [mode, setMode] = useState<ClubExitMode>("partial-refund");
  const [depositSgd, setDepositSgd] = useState(15000);
  const [monthlyDuesSgd, setMonthlyDuesSgd] = useState(280);
  const [noticeMonths, setNoticeMonths] = useState(3);
  const [adminFeeSgd, setAdminFeeSgd] = useState(150);
  const [prepaidMonthsBurn, setPrepaidMonthsBurn] = useState(1);

  const result = useMemo(
    () =>
      estimateClubDepositExit({
        mode,
        depositSgd,
        monthlyDuesSgd,
        noticeMonths,
        adminFeeSgd,
        prepaidMonthsBurn,
      }),
    [
      mode,
      depositSgd,
      monthlyDuesSgd,
      noticeMonths,
      adminFeeSgd,
      prepaidMonthsBurn,
    ],
  );

  return (
    <ToolSketchShell
      name="Club deposit exit sketch"
      description="Sketch club resignation deposit refund hope vs notice dues and prepaid burn."
    >
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">Club deposit exit inputs</legend>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Resignation sketch
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
              htmlFor="club-deposit"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Deposit / entrance hope (SGD)
            </label>
            <input
              id="club-deposit"
              type="number"
              min={0}
              step={500}
              value={depositSgd}
              onChange={(e) =>
                setDepositSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="club-dues"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Monthly dues (SGD)
            </label>
            <input
              id="club-dues"
              type="number"
              min={0}
              step={10}
              value={monthlyDuesSgd}
              onChange={(e) =>
                setMonthlyDuesSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="club-notice"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Notice months
            </label>
            <input
              id="club-notice"
              type="number"
              min={0}
              max={24}
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
              htmlFor="club-admin"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Admin / resignation fee (SGD)
            </label>
            <input
              id="club-admin"
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
              htmlFor="club-prepaid"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Prepaid months burned
            </label>
            <input
              id="club-prepaid"
              type="number"
              min={0}
              max={24}
              step={1}
              value={prepaidMonthsBurn}
              onChange={(e) =>
                setPrepaidMonthsBurn(Math.max(0, Number(e.target.value) || 0))
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
        <p
          className={
            result.netSketchSgd >= 0
              ? "mt-4 text-sm font-semibold text-canopy"
              : "mt-4 text-sm font-semibold text-tungsten"
          }
        >
          Net {formatSgd(result.netSketchSgd)}
        </p>
        <dl className="mt-6 space-y-3 text-sm">
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Cash in</dt>
            <dd className="font-medium tabular-nums text-ink">
              {formatSgd(result.cashInSgd)}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Cash out</dt>
            <dd className="font-medium tabular-nums text-ink">
              {formatSgd(result.cashOutSgd)}
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
          Reviewed {CLUB_DEPOSIT_LAST_REVIEWED}. Not club advice — the
          constitution and resignation letter control refunds.
        </p>
      </aside>
    </div>
    </ToolSketchShell>
  );
}
