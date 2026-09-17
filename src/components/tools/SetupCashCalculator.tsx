"use client";

import { useMemo, useState } from "react";
import {
  IRAS_LEASE_DUTY_URL,
  SETUP_CASH_LAST_REVIEWED,
  estimateSetupCash,
  formatSgd,
  type LeaseYears,
} from "@/lib/tools/setup-cash";

export function SetupCashCalculator() {
  const [monthlyRent, setMonthlyRent] = useState(4500);
  const [leaseYears, setLeaseYears] = useState<LeaseYears>(2);
  const [depositMonths, setDepositMonths] = useState(2);
  const [agentMonths, setAgentMonths] = useState(1);
  const [tempHousingWeeks, setTempHousingWeeks] = useState(2);
  const [tempHousingWeekly, setTempHousingWeekly] = useState(1800);
  const [miscBuffer, setMiscBuffer] = useState(800);

  const breakdown = useMemo(
    () =>
      estimateSetupCash({
        monthlyRent,
        leaseYears,
        depositMonths,
        agentMonths,
        tempHousingWeeks,
        tempHousingWeekly,
        miscBuffer,
      }),
    [
      monthlyRent,
      leaseYears,
      depositMonths,
      agentMonths,
      tempHousingWeeks,
      tempHousingWeekly,
      miscBuffer,
    ],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
      <fieldset className="space-y-8">
        <legend className="sr-only">First-month cash inputs</legend>

        <div>
          <label
            htmlFor="setup-rent"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
          >
            Monthly rent (SGD)
          </label>
          <input
            id="setup-rent"
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
            {([1, 2] as const).map((y) => (
              <button
                key={y}
                type="button"
                onClick={() => {
                  setLeaseYears(y);
                  setDepositMonths(y);
                  setAgentMonths(y === 1 ? 0.5 : 1);
                }}
                className={
                  leaseYears === y
                    ? "bg-ink px-4 py-2.5 text-sm font-semibold text-paper rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tungsten"
                    : "border border-ink/20 px-4 py-2.5 text-sm font-medium text-ink rounded-sm hover:border-ink/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tungsten"
                }
              >
                {y} year{y > 1 ? "s" : ""}
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs text-ink-faint">
            Defaults deposit and agent months to common market practice — edit
            below if your LOI differs.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="setup-deposit"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Security deposit (months)
            </label>
            <input
              id="setup-deposit"
              type="number"
              min={0}
              step={0.5}
              value={depositMonths}
              onChange={(e) => setDepositMonths(Number(e.target.value) || 0)}
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="setup-agent"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Tenant agent fee (months)
            </label>
            <input
              id="setup-agent"
              type="number"
              min={0}
              step={0.5}
              value={agentMonths}
              onChange={(e) => setAgentMonths(Number(e.target.value) || 0)}
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="setup-temp-weeks"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Temp housing (weeks)
            </label>
            <input
              id="setup-temp-weeks"
              type="number"
              min={0}
              step={1}
              value={tempHousingWeeks}
              onChange={(e) =>
                setTempHousingWeeks(Number(e.target.value) || 0)
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
          <div>
            <label
              htmlFor="setup-temp-rate"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
            >
              Temp housing / week (SGD)
            </label>
            <input
              id="setup-temp-rate"
              type="number"
              min={0}
              step={50}
              value={tempHousingWeekly}
              onChange={(e) =>
                setTempHousingWeekly(Number(e.target.value) || 0)
              }
              className="mt-3 w-full border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="setup-misc"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint"
          >
            Misc buffer — SIM, transit, groceries (SGD)
          </label>
          <input
            id="setup-misc"
            type="number"
            min={0}
            step={50}
            value={miscBuffer}
            onChange={(e) => setMiscBuffer(Number(e.target.value) || 0)}
            className="mt-3 w-full max-w-xs border border-ink/15 bg-paper-elevated px-4 py-3 text-ink outline-none focus:border-canopy"
          />
        </div>
      </fieldset>

      <aside className="rounded-sm border border-ink/15 bg-paper-elevated p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
          Est. cash to land
        </p>
        <p className="mt-3 font-display text-4xl text-canopy-deep">
          {formatSgd(breakdown.total)}
        </p>
        <ul className="mt-6 space-y-2 text-sm text-ink-muted">
          <li className="flex justify-between gap-4">
            <span>Advance rent</span>
            <span>{formatSgd(breakdown.advanceRent)}</span>
          </li>
          <li className="flex justify-between gap-4">
            <span>Security deposit</span>
            <span>{formatSgd(breakdown.deposit)}</span>
          </li>
          <li className="flex justify-between gap-4">
            <span>Agent fee</span>
            <span>{formatSgd(breakdown.agentFee)}</span>
          </li>
          <li className="flex justify-between gap-4">
            <span>IRAS lease duty</span>
            <span>{formatSgd(breakdown.stampDuty)}</span>
          </li>
          <li className="flex justify-between gap-4">
            <span>Temp housing</span>
            <span>{formatSgd(breakdown.tempHousing)}</span>
          </li>
          <li className="flex justify-between gap-4">
            <span>Misc buffer</span>
            <span>{formatSgd(breakdown.misc)}</span>
          </li>
        </ul>
        <p className="mt-6 text-xs leading-relaxed text-ink-faint">
          Lease duty uses IRAS&apos;s 0.4% of total rent for leases of four years
          or less (rounded down here). Last reviewed {SETUP_CASH_LAST_REVIEWED}.{" "}
          <a
            href={IRAS_LEASE_DUTY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-canopy underline-offset-2 hover:underline"
          >
            IRAS stamp duty
          </a>
          . Agent fees and deposit months are market practice, not law.
        </p>
      </aside>
    </div>
  );
}
