"use client";

import { ToolSketchShell } from "./ToolSketchShell";

import { useMemo, useState } from "react";
import {
  IRAS_LEASE_DUTY_URL,
  IRAS_STAMP_CALCULATOR_URL,
  LEASE_DUTY_LAST_REVIEWED,
  estimateLeaseDuty,
  formatSgd,
} from "@/lib/tools/lease-duty";

const PRESETS = [
  { label: "12 mo", months: 12 },
  { label: "24 mo", months: 24 },
  { label: "36 mo", months: 36 },
  { label: "5 yr", months: 60 },
] as const;

export function LeaseDutyCalculator() {
  const [monthlyRent, setMonthlyRent] = useState(4500);
  const [leaseMonths, setLeaseMonths] = useState(24);
  const [otherMonthly, setOtherMonthly] = useState(0);

  const result = useMemo(
    () =>
      estimateLeaseDuty({
        monthlyRent,
        leaseMonths,
        otherMonthly,
      }),
    [monthlyRent, leaseMonths, otherMonthly],
  );

  return (
    <ToolSketchShell
      name="Lease duty sketch"
      description="Sketch stamp duty on residential leases for expat tenancies."
    >
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">Lease stamp duty inputs</legend>

        <div>
          <label
            htmlFor="lease-rent"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
          >
            Monthly contractual rent (SGD)
          </label>
          <input
            id="lease-rent"
            type="number"
            min={0}
            step={100}
            value={monthlyRent}
            onChange={(e) => setMonthlyRent(Number(e.target.value) || 0)}
            className="mt-3 w-full max-w-xs border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Lease length
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {PRESETS.map((p) => (
              <button
                key={p.months}
                type="button"
                onClick={() => setLeaseMonths(p.months)}
                className={
                  leaseMonths === p.months
                    ? "bg-canopy px-4 py-2 text-sm font-semibold text-paper"
                    : "border border-ink/15 px-4 py-2 text-sm font-medium text-ink hover:border-ink/35"
                }
              >
                {p.label}
              </button>
            ))}
          </div>
          <label htmlFor="lease-months" className="sr-only">
            Lease months
          </label>
          <input
            id="lease-months"
            type="number"
            min={1}
            max={120}
            step={1}
            value={leaseMonths}
            onChange={(e) =>
              setLeaseMonths(Math.max(1, Number(e.target.value) || 1))
            }
            className="mt-3 w-full max-w-[8rem] border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
          />
          <p className="mt-2 text-xs text-ink-faint">Months (custom OK).</p>
        </div>

        <div>
          <label
            htmlFor="lease-other"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
          >
            Other monthly consideration (SGD)
          </label>
          <input
            id="lease-other"
            type="number"
            min={0}
            step={50}
            value={otherMonthly}
            onChange={(e) => setOtherMonthly(Number(e.target.value) || 0)}
            className="mt-3 w-full max-w-xs border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
          />
          <p className="mt-2 max-w-md text-xs text-ink-faint">
            IRAS averages contractual vs market rent and can include furniture,
            service, or similar monthly payments in AAR. Leave at 0 if rent is
            all-in.
          </p>
        </div>
      </fieldset>

      <aside className="space-y-6 border border-ink/10 bg-paper-elevated p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Estimated lease duty
          </p>
          <p className="mt-2 font-display text-4xl text-ink">
            {result.exempt ? "Exempt" : formatSgd(result.duty)}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            {result.formulaLabel}
          </p>
        </div>

        <dl className="space-y-3 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-ink-faint">Total consideration</dt>
            <dd className="font-medium text-ink">
              {formatSgd(result.totalConsideration)}
            </dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-ink-faint">Avg annual rent (sketch)</dt>
            <dd className="font-medium text-ink">
              {formatSgd(result.averageAnnualRent)}
            </dd>
          </div>
          {!result.exempt && (
            <div className="flex justify-between gap-4">
              <dt className="text-ink-faint">Duty base</dt>
              <dd className="font-medium text-ink">
                {formatSgd(result.dutyBase)}
              </dd>
            </div>
          )}
        </dl>

        <p className="text-xs leading-relaxed text-ink-faint">
          Stamp within 14 days if signed in Singapore (30 days if signed
          overseas). Tenant usually pays; confirm on the TA. Rounded down to
          nearest dollar, min S$1 when payable. Last reviewed{" "}
          {LEASE_DUTY_LAST_REVIEWED}.
        </p>

        <p className="text-xs leading-relaxed">
          <a
            href={IRAS_LEASE_DUTY_URL}
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
            target="_blank"
            rel="noopener noreferrer"
          >
            IRAS lease duty rules →
          </a>
          <br />
          <a
            href={IRAS_STAMP_CALCULATOR_URL}
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official IRAS calculators →
          </a>
        </p>
      </aside>
    </div>
    </ToolSketchShell>
  );
}
