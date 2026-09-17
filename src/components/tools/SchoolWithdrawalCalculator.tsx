"use client";

import { useMemo, useState } from "react";
import {
  SCHOOL_WITHDRAWAL_LAST_REVIEWED,
  estimateSchoolWithdrawalNotice,
} from "@/lib/tools/school-withdrawal";

const PRESETS = [
  { label: "4 wk", weeks: 4 },
  { label: "6 wk", weeks: 6 },
  { label: "8 wk", weeks: 8 },
  { label: "1 term · 12 wk", weeks: 12 },
] as const;

export function SchoolWithdrawalCalculator() {
  const [lastAttendance, setLastAttendance] = useState("2026-06-15");
  const [noticeWeeks, setNoticeWeeks] = useState(8);
  const [termEnd, setTermEnd] = useState("2026-06-26");

  const result = useMemo(
    () =>
      estimateSchoolWithdrawalNotice({
        lastAttendance,
        noticeWeeks,
        termEnd: termEnd || undefined,
      }),
    [lastAttendance, noticeWeeks, termEnd],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">School withdrawal notice inputs</legend>

        <div>
          <label
            htmlFor="sw-last"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
          >
            Planned last attendance day
          </label>
          <input
            id="sw-last"
            type="date"
            value={lastAttendance}
            onChange={(e) => setLastAttendance(e.target.value)}
            className="mt-3 w-full max-w-xs border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
          />
        </div>

        <div>
          <label
            htmlFor="sw-weeks"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
          >
            Contractual notice (weeks)
          </label>
          <input
            id="sw-weeks"
            type="number"
            min={0}
            max={52}
            step={1}
            value={noticeWeeks}
            onChange={(e) =>
              setNoticeWeeks(Math.max(0, Number(e.target.value) || 0))
            }
            className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
          />
          <div className="mt-3 flex flex-wrap gap-2">
            {PRESETS.map((p) => (
              <button
                key={p.weeks}
                type="button"
                onClick={() => setNoticeWeeks(p.weeks)}
                className={`border px-3 py-1.5 text-xs font-medium ${
                  noticeWeeks === p.weeks
                    ? "border-canopy bg-canopy text-paper"
                    : "border-ink/15 text-ink-muted hover:border-ink/30"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs text-ink-faint">
            Copy the number from your parent handbook / enrolment letter — do
            not invent one from a forum thread.
          </p>
        </div>

        <div>
          <label
            htmlFor="sw-term"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
          >
            Term / fee period end (optional)
          </label>
          <input
            id="sw-term"
            type="date"
            value={termEnd}
            onChange={(e) => setTermEnd(e.target.value)}
            className="mt-3 w-full max-w-xs border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
          />
          <p className="mt-2 text-xs text-ink-faint">
            Used only to flag a mid-term exit cue — not a fee calculator.
          </p>
        </div>
      </fieldset>

      <aside className="rounded-sm border border-ink/15 bg-paper-elevated p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
          Sketch · written notice by
        </p>
        <p className="mt-4 font-display text-3xl tabular-nums text-ink">
          {result.noticeDeadline ?? "—"}
        </p>
        {result.daysUntilDeadline != null ? (
          <p className="mt-3 text-sm text-ink-muted">
            {result.deadlinePassed
              ? `${Math.abs(result.daysUntilDeadline)} day${
                  Math.abs(result.daysUntilDeadline) === 1 ? "" : "s"
                } past the sketched deadline`
              : `${result.daysUntilDeadline} day${
                  result.daysUntilDeadline === 1 ? "" : "s"
                } until the sketched deadline`}
          </p>
        ) : null}
        {result.midTermExit === true ? (
          <p className="mt-3 text-sm text-tungsten">
            Mid-term exit cue — fees may still run to the term end you entered.
          </p>
        ) : null}
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">
          {result.note}
        </p>
        <p className="mt-6 text-xs text-ink-faint">
          Last reviewed {SCHOOL_WITHDRAWAL_LAST_REVIEWED}. Orientation only —
          not legal or school-finance advice.
        </p>
      </aside>
    </div>
  );
}
