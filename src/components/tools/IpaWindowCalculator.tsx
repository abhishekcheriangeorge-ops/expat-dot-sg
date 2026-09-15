"use client";

import { ToolSketchShell } from "./ToolSketchShell";

import { useMemo, useState } from "react";
import {
  IPA_ENTER_ISSUE_MONTHS,
  IPA_EXTENSION_LEAD_WEEKS,
  IPA_NOTIFICATION_LETTER_DAYS,
  IPA_WINDOW_LAST_REVIEWED,
  MOM_EP_APPLY_URL,
  MOM_IPA_EXTEND_URL,
  estimateIpaWindow,
} from "@/lib/tools/ipa-window";

export function IpaWindowCalculator() {
  const [ipaDate, setIpaDate] = useState("2026-06-01");
  const [entryDate, setEntryDate] = useState("2026-09-15");
  const [issueDate, setIssueDate] = useState("2026-09-18");

  const result = useMemo(
    () => estimateIpaWindow({ ipaDate, entryDate, issueDate }),
    [ipaDate, entryDate, issueDate],
  );

  const ok = result.entryInsideWindow && result.issueInsideWindow;

  return (
    <ToolSketchShell
      name="IPA window sketch"
      description="Sketch In-Principle Approval validity windows before entry or pass issuance."
    >
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">IPA window inputs</legend>

        <div>
          <label
            htmlFor="ipa-date"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
          >
            IPA approval date
          </label>
          <input
            id="ipa-date"
            type="date"
            value={ipaDate}
            onChange={(e) => setIpaDate(e.target.value)}
            className="mt-3 w-full max-w-xs border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="ipa-entry"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Planned entry
            </label>
            <input
              id="ipa-entry"
              type="date"
              value={entryDate}
              onChange={(e) => setEntryDate(e.target.value)}
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="ipa-issue"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Planned issuance
            </label>
            <input
              id="ipa-issue"
              type="date"
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
        </div>

        <p className="max-w-xl text-sm leading-relaxed text-ink-muted">
          MOM’s EP IPA is normally a single-entry pre-approval: enter Singapore
          and get the pass issued within about {IPA_ENTER_ISSUE_MONTHS} months.
          Dependant Pass IPAs need the same issuance discipline once approved.
        </p>
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
            ok
              ? "mt-4 text-sm font-semibold text-canopy"
              : "mt-4 text-sm font-semibold text-tungsten"
          }
        >
          {ok ? "Entry + issuance fit this window" : "Dates sit outside the window"}
        </p>
        <dl className="mt-6 space-y-3 text-sm">
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Issue-by deadline</dt>
            <dd className="font-medium tabular-nums text-ink">
              {result.deadline ?? "—"}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Days left after entry</dt>
            <dd className="font-medium tabular-nums text-ink">
              {result.daysUntilDeadline ?? "—"}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Extension lead (~{IPA_EXTENSION_LEAD_WEEKS}w)</dt>
            <dd className="font-medium tabular-nums text-ink">
              {result.extensionLeadDate ?? "—"}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-ink-faint">Notification letter</dt>
            <dd className="font-medium tabular-nums text-ink">
              ~{IPA_NOTIFICATION_LETTER_DAYS} days
            </dd>
          </div>
        </dl>
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">{result.note}</p>
        <p className="mt-6 text-xs text-ink-faint">
          Reviewed {IPA_WINDOW_LAST_REVIEWED}. Not immigration advice — your IPA
          letter controls.
        </p>
        <div className="mt-4 flex flex-col gap-2 text-sm">
          <a
            href={MOM_EP_APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            MOM — apply / IPA basics →
          </a>
          <a
            href={MOM_IPA_EXTEND_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            MOM — extend IPA validity →
          </a>
        </div>
      </aside>
    </div>
    </ToolSketchShell>
  );
}
