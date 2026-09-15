"use client";

import { useMemo, useState } from "react";
import {
  DEFAULT_LOCK_IN_MONTHS,
  DEFAULT_NOTICE_MONTHS,
  LEASE_NOTICE_LAST_REVIEWED,
  estimateLeaseNotice,
} from "@/lib/tools/lease-notice";

export function LeaseNoticeCalculator() {
  const [leaseStart, setLeaseStart] = useState("2025-08-01");
  const [leaseMonths, setLeaseMonths] = useState(24);
  const [lockInMonths, setLockInMonths] = useState(DEFAULT_LOCK_IN_MONTHS);
  const [noticeMonths, setNoticeMonths] = useState(DEFAULT_NOTICE_MONTHS);
  const [targetEnd, setTargetEnd] = useState("2026-10-01");

  const result = useMemo(
    () =>
      estimateLeaseNotice({
        leaseStart,
        leaseMonths,
        lockInMonths,
        noticeMonths,
        targetEnd,
      }),
    [leaseStart, leaseMonths, lockInMonths, noticeMonths, targetEnd],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">Diplomatic clause notice inputs</legend>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="ln-start"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Lease start
            </label>
            <input
              id="ln-start"
              type="date"
              value={leaseStart}
              onChange={(e) => setLeaseStart(e.target.value)}
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="ln-end"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Target hand-back
            </label>
            <input
              id="ln-end"
              type="date"
              value={targetEnd}
              onChange={(e) => setTargetEnd(e.target.value)}
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Contracted lease length
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {[12, 24].map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setLeaseMonths(m)}
                className={
                  leaseMonths === m
                    ? "bg-canopy px-4 py-2 text-sm font-semibold text-paper"
                    : "border border-ink/15 px-4 py-2 text-sm font-medium text-ink hover:border-ink/35"
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
              htmlFor="ln-lock"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Lock-in before notice (months)
            </label>
            <input
              id="ln-lock"
              type="number"
              min={0}
              max={36}
              step={1}
              value={lockInMonths}
              onChange={(e) =>
                setLockInMonths(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
            <p className="mt-2 text-xs text-ink-faint">
              Market default on many 24-mo TAs: 12.
            </p>
          </div>
          <div>
            <label
              htmlFor="ln-notice"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Written notice (months)
            </label>
            <input
              id="ln-notice"
              type="number"
              min={0}
              max={6}
              step={1}
              value={noticeMonths}
              onChange={(e) =>
                setNoticeMonths(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
            <p className="mt-2 text-xs text-ink-faint">
              Market default: 2 calendar months.
            </p>
          </div>
        </div>
      </fieldset>

      <aside className="border border-fog-soft bg-paper-elevated p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
          Sketch
        </p>
        <p className="mt-3 text-sm font-medium text-ink-muted">
          {result.formulaLabel}
        </p>
        <p
          className={
            result.canServeByTarget
              ? "mt-4 text-sm font-semibold text-canopy"
              : "mt-4 text-sm font-semibold text-tungsten"
          }
        >
          {result.canServeByTarget
            ? "Target end fits this clause sketch"
            : "Target end does not fit cleanly"}
        </p>
        <dl className="mt-6 space-y-3 text-sm">
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Earliest serve</dt>
            <dd className="font-medium tabular-nums text-ink">
              {result.earliestServe ?? "—"}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Earliest exit</dt>
            <dd className="font-medium tabular-nums text-ink">
              {result.earliestExit ?? "—"}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Lease end</dt>
            <dd className="font-medium tabular-nums text-ink">
              {result.leaseEnd ?? "—"}
            </dd>
          </div>
        </dl>
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">
          {result.note}
        </p>
        <p className="mt-6 text-xs text-ink-faint">
          Reviewed {LEASE_NOTICE_LAST_REVIEWED}. Not legal advice — your signed
          TA controls triggers, proof, and commission clawback.
        </p>
      </aside>
    </div>
  );
}
