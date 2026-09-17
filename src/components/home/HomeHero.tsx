import Link from "next/link";

const LEDGER = [
  {
    label: "EP salary floors",
    value: "S$5,600+; S$6,200 FS",
    href: "/guides/employment-pass-singapore",
  },
  {
    label: "Lease stamp duty",
    value: "0.4% of total rent",
    href: "/guides/renting-process-loi-ta-deposits",
  },
  {
    label: "STVP after EP cancel",
    value: "Up to 90 days — ask HR",
    href: "/guides/between-jobs-stvp-singapore",
  },
];

export function HomeHero() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto max-w-[var(--max-page)] px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="border-ink/15 py-12 pr-0 sm:py-14 lg:border-r lg:pr-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-tungsten">
              The Straits standard · Monocle-sharp
            </p>
            <h1 className="mt-4 max-w-xl font-display text-5xl font-medium leading-[1.02] tracking-[-0.025em] sm:text-6xl">
              Singapore, <em className="font-normal italic">decided</em> — not
              debated.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted sm:text-lg">
              Passes, rents, schools, and the exit sequence — verified against
              primary sources. Pick the job you have.
            </p>
            <div className="mt-8 flex flex-wrap">
              <Link
                href="/arriving"
                className="inline-flex min-h-[44px] items-center border border-ink bg-ink px-7 py-3.5 text-[12.5px] font-bold uppercase tracking-[0.08em] text-paper no-underline transition-colors hover:bg-canopy"
              >
                Landing / first 90 days
              </Link>
              <Link
                href="/journeys/leaving"
                className="inline-flex min-h-[44px] items-center border border-ink border-l-0 px-7 py-3.5 text-[12.5px] font-bold uppercase tracking-[0.08em] text-ink no-underline transition-colors hover:bg-paper-elevated max-sm:border-l max-sm:border-t-0"
              >
                Leaving / between jobs
              </Link>
            </div>
            <p className="mt-6 text-[13px] text-ink-faint">
              <Link
                href="/tools/cost-of-living"
                className="font-semibold text-canopy no-underline underline-offset-4 hover:underline"
              >
                Cost of living sketch
              </Link>
              {" · "}
              <Link
                href="/tools/setup-cash"
                className="font-semibold text-canopy no-underline underline-offset-4 hover:underline"
              >
                Cash to land
              </Link>
            </p>
          </div>

          <div className="relative flex min-h-[380px] flex-col justify-between bg-canopy-deep p-8 text-paper sm:p-9 lg:ml-0">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-2.5 border border-tungsten-soft/20"
            />
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-tungsten-soft">
                The ledger
              </p>
              <p className="mt-4 font-display text-3xl font-medium leading-[1.12]">
                Numbers that decide moves.
              </p>
              <ul className="mt-6">
                {LEDGER.map((row) => (
                  <li
                    key={row.label}
                    className="flex items-baseline justify-between gap-4 border-b border-tungsten-soft/20 py-3 text-sm"
                  >
                    <Link
                      href={row.href}
                      className="font-semibold text-paper/70 no-underline hover:text-paper"
                    >
                      {row.label}
                    </Link>
                    <span className="whitespace-nowrap font-display text-lg text-tungsten-soft">
                      {row.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/guides/employment-pass-singapore"
              className="mt-7 inline-flex min-h-[44px] items-center justify-center bg-tungsten-soft px-6 py-3.5 text-[13px] font-bold uppercase tracking-[0.06em] text-ink no-underline transition-colors hover:bg-paper"
            >
              Employment Pass, in full →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
