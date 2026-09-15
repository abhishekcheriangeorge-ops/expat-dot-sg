"use client";

import { useMemo, useState } from "react";
import {
  AGENT_COMMISSION_LAST_REVIEWED,
  estimateAgentCommission,
  formatSgd,
  type AgentSide,
} from "@/lib/tools/agent-commission";

const FEE_PRESETS = [
  { label: "½ mo", months: 0.5 },
  { label: "1 mo", months: 1 },
  { label: "1½ mo", months: 1.5 },
] as const;

export function AgentCommissionCalculator() {
  const [monthlyRent, setMonthlyRent] = useState(4500);
  const [feeMonths, setFeeMonths] = useState(1);
  const [side, setSide] = useState<AgentSide>("tenant");
  const [includeGst, setIncludeGst] = useState(true);

  const result = useMemo(
    () =>
      estimateAgentCommission({
        monthlyRent,
        feeMonths,
        side,
        includeGst,
      }),
    [monthlyRent, feeMonths, side, includeGst],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">Agent commission inputs</legend>

        <div>
          <label
            htmlFor="ac-rent"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
          >
            Monthly rent (SGD)
          </label>
          <input
            id="ac-rent"
            type="number"
            min={0}
            step={100}
            value={monthlyRent}
            onChange={(e) => setMonthlyRent(Number(e.target.value) || 0)}
            className="mt-3 w-full max-w-[12rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Who pays this agent
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {(
              [
                { id: "tenant", label: "Tenant side" },
                { id: "landlord", label: "Landlord side" },
              ] as const
            ).map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSide(opt.id)}
                className={
                  side === opt.id
                    ? "bg-canopy px-4 py-2 text-sm font-semibold text-paper"
                    : "border border-ink/15 px-4 py-2 text-sm font-medium text-ink hover:border-ink/35"
                }
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="ac-months"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
          >
            Fee (months of rent)
          </label>
          <input
            id="ac-months"
            type="number"
            min={0}
            max={6}
            step={0.5}
            value={feeMonths}
            onChange={(e) => setFeeMonths(Number(e.target.value) || 0)}
            className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
          />
          <div className="mt-3 flex flex-wrap gap-2">
            {FEE_PRESETS.map((p) => (
              <button
                key={p.months}
                type="button"
                onClick={() => setFeeMonths(p.months)}
                className={
                  feeMonths === p.months
                    ? "border border-canopy bg-canopy px-3 py-1.5 text-xs font-medium text-paper"
                    : "border border-ink/15 px-3 py-1.5 text-xs font-medium text-ink-muted hover:border-ink/30"
                }
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <label className="flex items-center gap-3 text-sm text-ink-muted">
          <input
            type="checkbox"
            checked={includeGst}
            onChange={(e) => setIncludeGst(e.target.checked)}
            className="size-4 border-ink/30"
          />
          Add 9% GST on the commission
        </label>
      </fieldset>

      <aside className="border border-fog-soft bg-paper-elevated p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
          Sketch · payable
        </p>
        <p className="mt-4 font-display text-4xl tabular-nums text-ink">
          {formatSgd(result.total)}
        </p>
        <p className="mt-3 text-sm text-ink-muted">{result.formulaLabel}</p>
        <dl className="mt-6 space-y-2 text-sm text-ink-muted">
          <div className="flex justify-between gap-4">
            <dt>Base fee</dt>
            <dd className="tabular-nums text-ink">{formatSgd(result.baseFee)}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>GST</dt>
            <dd className="tabular-nums text-ink">{formatSgd(result.gst)}</dd>
          </div>
        </dl>
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">{result.note}</p>
        <p className="mt-6 text-xs text-ink-faint">
          Last reviewed {AGENT_COMMISSION_LAST_REVIEWED}. Orientation only — not
          legal or CEA advice.
        </p>
      </aside>
    </div>
  );
}
