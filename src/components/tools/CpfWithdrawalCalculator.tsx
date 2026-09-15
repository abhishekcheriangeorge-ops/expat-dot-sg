"use client";

import { useMemo, useState } from "react";
import {
  CPF_WINDOW_PRESETS,
  CPF_WITHDRAWAL_LAST_REVIEWED,
  estimateCpfWithdrawal,
  formatSgd,
  type CpfWindowId,
} from "@/lib/tools/cpf-withdrawal";

export function CpfWithdrawalCalculator() {
  const [departureDate, setDepartureDate] = useState("2026-12-15");
  const [windowId, setWindowId] = useState<CpfWindowId>("typical");
  const [customDays, setCustomDays] = useState("");
  const [balanceSketch, setBalanceSketch] = useState(25000);

  const result = useMemo(
    () =>
      estimateCpfWithdrawal({
        departureDate,
        windowId,
        customDays: customDays.trim() ? Number(customDays) : undefined,
        balanceSketch,
      }),
    [departureDate, windowId, customDays, balanceSketch],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">CPF withdrawal timing inputs</legend>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="cpf-depart"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Planned departure
            </label>
            <input
              id="cpf-depart"
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="cpf-balance"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              OA+SA sketch (SGD)
            </label>
            <input
              id="cpf-balance"
              type="number"
              min={0}
              step={500}
              value={balanceSketch}
              onChange={(e) =>
                setBalanceSketch(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
            <p className="mt-2 text-xs text-ink-faint">
              Orientation only — not a CPF Board quote.
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Processing window
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {CPF_WINDOW_PRESETS.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => {
                  setWindowId(p.id);
                  setCustomDays("");
                }}
                className={
                  windowId === p.id && !customDays.trim()
                    ? "bg-canopy px-4 py-2 text-sm font-semibold text-paper"
                    : "border border-ink/15 px-4 py-2 text-sm font-medium text-ink hover:border-ink/35"
                }
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="cpf-custom"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
          >
            Custom days (optional)
          </label>
          <input
            id="cpf-custom"
            type="number"
            min={1}
            step={1}
            value={customDays}
            onChange={(e) => setCustomDays(e.target.value)}
            placeholder="e.g. 21"
            className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
          />
        </div>
      </fieldset>

      <aside className="border border-fog-soft bg-paper-elevated p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
          Sketch
        </p>
        <p className="mt-3 text-sm font-medium text-ink-muted">
          {result.windowLabel}
        </p>
        <p
          className={
            result.daysUntilApplyBy != null && result.daysUntilApplyBy < 0
              ? "mt-4 text-sm font-semibold text-tungsten"
              : "mt-4 text-sm font-semibold text-canopy"
          }
        >
          {result.applyBy
            ? result.daysUntilApplyBy != null && result.daysUntilApplyBy < 0
              ? "Apply-by date already past"
              : "Apply by this date for the sketch window"
            : "Enter a valid departure date"}
        </p>
        <dl className="mt-6 space-y-3 text-sm">
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Apply by</dt>
            <dd className="font-medium tabular-nums text-ink">
              {result.applyBy ?? "—"}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Days until apply-by</dt>
            <dd className="font-medium tabular-nums text-ink">
              {result.daysUntilApplyBy ?? "—"}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Process days</dt>
            <dd className="font-medium tabular-nums text-ink">
              {result.processDays}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Balance sketch</dt>
            <dd className="font-medium tabular-nums text-ink">
              {formatSgd(result.balanceSketch)}
            </dd>
          </div>
        </dl>
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">
          {result.note}
        </p>
        <p className="mt-6 text-xs text-ink-faint">
          Reviewed {CPF_WITHDRAWAL_LAST_REVIEWED}. Not CPF Board advice — status,
          pledges, and MediSave rules control what you can actually take.
        </p>
      </aside>
    </div>
  );
}
