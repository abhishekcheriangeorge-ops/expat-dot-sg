"use client";

import { ToolSketchShell } from "./ToolSketchShell";

import { useMemo, useState } from "react";
import {
  IR21_WINDOW_PRESETS,
  IR21_WITHHOLD_LAST_REVIEWED,
  estimateIr21Withhold,
  formatSgd,
  type Ir21WindowId,
} from "@/lib/tools/ir21-withhold";

export function Ir21WithholdCalculator() {
  const [cessationDate, setCessationDate] = useState("2026-10-31");
  const [windowId, setWindowId] = useState<Ir21WindowId>("typical");
  const [customDays, setCustomDays] = useState("");
  const [monthlyNet, setMonthlyNet] = useState(8000);

  const result = useMemo(
    () =>
      estimateIr21Withhold({
        cessationDate,
        windowId,
        customDays: customDays.trim() ? Number(customDays) : undefined,
        monthlyNet,
      }),
    [cessationDate, windowId, customDays, monthlyNet],
  );

  return (
    <ToolSketchShell
      name="IR21 withhold sketch"
      description="Sketch IR21 tax clearance withhold cash when ending Singapore employment."
    >
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">IR21 withhold inputs</legend>

        <div>
          <label
            htmlFor="ir21-cessation"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
          >
            Planned cessation / last day
          </label>
          <input
            id="ir21-cessation"
            type="date"
            value={cessationDate}
            onChange={(e) => setCessationDate(e.target.value)}
            className="mt-3 w-full max-w-xs border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Clearance window sketch
          </p>
          <div className="mt-3 flex flex-col gap-2">
            {IR21_WINDOW_PRESETS.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setWindowId(p.id)}
                className={
                  windowId === p.id
                    ? "bg-canopy px-4 py-3 text-left text-sm font-semibold text-paper"
                    : "border border-ink/15 px-4 py-3 text-left text-sm font-medium text-ink hover:border-ink/35"
                }
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="ir21-custom"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Custom days (optional)
            </label>
            <input
              id="ir21-custom"
              type="number"
              min={1}
              max={120}
              placeholder="HR quote"
              value={customDays}
              onChange={(e) => setCustomDays(e.target.value)}
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="ir21-net"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Monthly net at risk (SGD)
            </label>
            <input
              id="ir21-net"
              type="number"
              min={0}
              step={100}
              value={monthlyNet}
              onChange={(e) =>
                setMonthlyNet(Math.max(0, Number(e.target.value) || 0))
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
        </div>
      </fieldset>

      <aside className="border border-fog-soft bg-paper-elevated p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
          Sketch · estimated release
        </p>
        <p className="mt-4 font-display text-3xl tabular-nums text-ink">
          {result.estimatedRelease ?? "—"}
        </p>
        {result.daysUntilRelease != null ? (
          <p className="mt-3 text-sm text-ink-muted">
            {result.daysUntilRelease < 0
              ? `${Math.abs(result.daysUntilRelease)} day${
                  Math.abs(result.daysUntilRelease) === 1 ? "" : "s"
                } past sketched release`
              : `${result.daysUntilRelease} day${
                  result.daysUntilRelease === 1 ? "" : "s"
                } until sketched release`}
          </p>
        ) : null}
        <dl className="mt-6 space-y-2 text-sm text-ink-muted">
          <div className="flex justify-between gap-4">
            <dt>Window</dt>
            <dd className="text-ink">{result.windowLabel}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>Cash at risk (1 mo net)</dt>
            <dd className="tabular-nums text-ink">
              {formatSgd(result.cashAtRisk)}
            </dd>
          </div>
        </dl>
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">{result.note}</p>
        <p className="mt-6 text-xs text-ink-faint">
          Last reviewed {IR21_WITHHOLD_LAST_REVIEWED}. Orientation only — not tax
          advice. See{" "}
          <a
            href="https://www.iras.gov.sg/taxes/individual-income-tax/employers/tax-clearance-for-foreigners-leaving-singapore"
            className="font-medium text-canopy no-underline hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            IRAS tax clearance
          </a>
          .
        </p>
      </aside>
    </div>
    </ToolSketchShell>
  );
}
