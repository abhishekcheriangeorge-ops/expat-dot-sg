"use client";

import { useMemo, useState } from "react";
import {
  ENRICHMENT_TERM_NOTICE_FLOAT_LAST_REVIEWED,
  estimateEnrichmentTermNoticeFloat,
  formatSgd,
  type EnrichmentTermNoticeMode,
} from "@/lib/tools/enrichment-term-notice-float";

const MODES: Array<{ id: EnrichmentTermNoticeMode; label: string }> = [
  { id: "ride-term", label: "Ride out term" },
  { id: "notice-short", label: "Notice shortfall" },
  { id: "early-exit", label: "Early exit" },
];

export function EnrichmentTermNoticeFloatCalculator() {
  const [mode, setMode] = useState<EnrichmentTermNoticeMode>("notice-short");
  const [lessonsLeft, setLessonsLeft] = useState(6);
  const [feePerLessonSgd, setFeePerLessonSgd] = useState(75);
  const [noticeLessonsShort, setNoticeLessonsShort] = useState(2);
  const [earlyExitFeeSgd, setEarlyExitFeeSgd] = useState(50);
  const [siblingFeeSgd, setSiblingFeeSgd] = useState(0);

  const result = useMemo(
    () =>
      estimateEnrichmentTermNoticeFloat({
        mode,
        lessonsLeft,
        feePerLessonSgd,
        noticeLessonsShort,
        earlyExitFeeSgd,
        siblingFeeSgd,
      }),
    [
      mode,
      lessonsLeft,
      feePerLessonSgd,
      noticeLessonsShort,
      earlyExitFeeSgd,
      siblingFeeSgd,
    ],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">Enrichment term-notice float inputs</legend>

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
              htmlFor="enr-lessons-left"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Lessons left in term
            </label>
            <input
              id="enr-lessons-left"
              type="number"
              min={0}
              max={60}
              step={1}
              value={lessonsLeft}
              onChange={(e) =>
                setLessonsLeft(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="enr-fee"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Fee per lesson (SGD)
            </label>
            <input
              id="enr-fee"
              type="number"
              min={0}
              step={5}
              value={feePerLessonSgd}
              onChange={(e) =>
                setFeePerLessonSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="enr-notice-short"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Notice lessons still short
            </label>
            <input
              id="enr-notice-short"
              type="number"
              min={0}
              max={60}
              step={1}
              value={noticeLessonsShort}
              onChange={(e) =>
                setNoticeLessonsShort(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="enr-early-exit"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Early-exit / admin fee (SGD)
            </label>
            <input
              id="enr-early-exit"
              type="number"
              min={0}
              step={10}
              value={earlyExitFeeSgd}
              onChange={(e) =>
                setEarlyExitFeeSgd(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="enr-sibling"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Sibling fee still due (SGD)
            </label>
            <input
              id="enr-sibling"
              type="number"
              min={0}
              step={10}
              value={siblingFeeSgd}
              onChange={(e) =>
                setSiblingFeeSgd(Math.max(0, Number(e.target.value) || 0))
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
            <dt className="text-ink-faint">Lessons left</dt>
            <dd className="font-medium tabular-nums text-ink">
              {result.lessonsLeft}
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
            <dt className="text-ink-faint">Notice lessons short</dt>
            <dd className="font-medium tabular-nums text-ink">
              {result.noticeLessonsShort}
            </dd>
          </div>
        </dl>
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">{result.note}</p>
        <p className="mt-6 text-xs text-ink-faint">
          Reviewed {ENRICHMENT_TERM_NOTICE_FLOAT_LAST_REVIEWED}. Not studio
          advice — published notice windows and sibling fee clauses control real
          cash.
        </p>
      </aside>
    </div>
  );
}
