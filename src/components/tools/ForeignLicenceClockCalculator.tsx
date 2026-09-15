"use client";

import { useMemo, useState } from "react";
import {
  FOREIGN_LICENCE_LAST_REVIEWED,
  LICENCE_WINDOW_PRESETS,
  estimateForeignLicenceClock,
  type LicenceWindowId,
} from "@/lib/tools/foreign-licence-clock";

export function ForeignLicenceClockCalculator() {
  const [startDate, setStartDate] = useState("2025-10-01");
  const [windowId, setWindowId] = useState<LicenceWindowId>("arrive-12");
  const [customMonths, setCustomMonths] = useState("");
  const [needToDriveUntil, setNeedToDriveUntil] = useState("2026-09-30");

  const result = useMemo(
    () =>
      estimateForeignLicenceClock({
        startDate,
        windowId,
        customMonths: customMonths.trim()
          ? Number(customMonths)
          : undefined,
        needToDriveUntil: needToDriveUntil || undefined,
      }),
    [startDate, windowId, customMonths, needToDriveUntil],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">Foreign licence clock inputs</legend>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="fl-start"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Clock start
            </label>
            <input
              id="fl-start"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
            <p className="mt-2 text-xs text-ink-faint">
              Arrival, first drive, or pass-issue date — pick what your case uses.
            </p>
          </div>
          <div>
            <label
              htmlFor="fl-need"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Need to drive until
            </label>
            <input
              id="fl-need"
              type="date"
              value={needToDriveUntil}
              onChange={(e) => setNeedToDriveUntil(e.target.value)}
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Window sketch
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {LICENCE_WINDOW_PRESETS.filter((p) => p.id !== "custom").map(
              (p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => {
                    setWindowId(p.id);
                    setCustomMonths("");
                  }}
                  className={
                    windowId === p.id && !customMonths.trim()
                      ? "bg-canopy px-4 py-2 text-sm font-semibold text-paper"
                      : "border border-ink/15 px-4 py-2 text-sm font-medium text-ink hover:border-ink/35"
                  }
                >
                  {p.label}
                </button>
              ),
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="fl-custom"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
          >
            Custom months (optional)
          </label>
          <input
            id="fl-custom"
            type="number"
            min={1}
            max={36}
            step={1}
            value={customMonths}
            onChange={(e) => {
              setCustomMonths(e.target.value);
              if (e.target.value.trim()) setWindowId("custom");
            }}
            placeholder="e.g. 12"
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
            result.deadlinePassed || result.coversNeedUntil === false
              ? "mt-4 text-sm font-semibold text-tungsten"
              : "mt-4 text-sm font-semibold text-canopy"
          }
        >
          {result.headline}
        </p>
        <dl className="mt-6 space-y-3 text-sm">
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Start</dt>
            <dd className="font-medium tabular-nums text-ink">
              {result.startDate ?? "—"}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Deadline</dt>
            <dd className="font-medium tabular-nums text-ink">
              {result.deadline ?? "—"}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Days remaining</dt>
            <dd className="font-medium tabular-nums text-ink">
              {result.daysRemaining ?? "—"}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Covers need-until</dt>
            <dd className="font-medium text-ink">
              {result.coversNeedUntil == null
                ? "—"
                : result.coversNeedUntil
                  ? "Yes"
                  : "No"}
            </dd>
          </div>
        </dl>
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">
          {result.note}
        </p>
        <p className="mt-6 text-xs text-ink-faint">
          Reviewed {FOREIGN_LICENCE_LAST_REVIEWED}. Not SPF advice — conversion
          eligibility and BTT/FTT rules control what you can actually do.
        </p>
      </aside>
    </div>
  );
}
