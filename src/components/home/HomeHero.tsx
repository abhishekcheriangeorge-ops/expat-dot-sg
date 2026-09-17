import Link from "next/link";

const LEDGER = [
  { label: "EP qualifying salary", value: "S$5,600 · Sep 26" },
  { label: "Tiong Bahru 2-bed", value: "S$6,800 · ▲ 2%" },
  { label: "UWC Dover Y4–Y6", value: "Waitlist open" },
];

const STATS = [
  { value: "120+", label: "Verified guides" },
  { value: "40+", label: "Money tools" },
  { value: "Weekly", label: "Repriced figures" },
  { value: "< 1s", label: "Median load" },
];

/**
 * Straits Standard hero — server-rendered, no hero image, no JS motion.
 * Split masthead: confident headline left, this week's ledger right.
 */
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
              Singapore, <em className="font-normal">decided</em> — not
              debated.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted sm:text-lg">
              One confident briefing for passes, rents, schools and costs.
              Reported weekly, verified against primary sources. No threads,
              no noise.
            </p>
            <div className="mt-8 flex">
              <Link
                href="/arriving"
                className="inline-flex items-center border border-ink bg-ink px-7 py-3.5 text-[12.5px] font-bold uppercase tracking-[0.08em] text-paper no-underline transition-colors hover:bg-canopy"
              >
                Read the briefing
              </Link>
              <Link
                href="/tools"
                className="inline-flex items-center border border-ink border-l-0 px-7 py-3.5 text-[12.5px] font-bold uppercase tracking-[0.08em] text-ink no-underline transition-colors hover:bg-paper-elevated"
              >
                Cost calculator
              </Link>
            </div>
            <p className="mt-6 text-[13px] text-ink-faint">
              120+ verified guides · 40+ money tools · median load &lt; 1s
            </p>
          </div>

          <div className="relative flex min-h-[380px] flex-col justify-between bg-canopy-deep p-8 text-paper sm:p-9 lg:ml-0">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-2.5 border border-tungsten-soft/20"
            />
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-tungsten-soft">
                This week&apos;s ledger
              </p>
              <p className="mt-4 font-display text-3xl font-medium leading-[1.12]">
                COMPASS, rents &amp; the Bukit Timah question.
              </p>
              <ul className="mt-6">
                {LEDGER.map((row) => (
                  <li
                    key={row.label}
                    className="flex items-baseline justify-between gap-4 border-b border-tungsten-soft/20 py-3 text-sm"
                  >
                    <span className="font-semibold">{row.label}</span>
                    <span className="whitespace-nowrap text-[#8f8875]">
                      {row.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/guides"
              className="mt-7 inline-flex items-center justify-center bg-tungsten-soft px-6 py-3.5 text-[13px] font-bold uppercase tracking-[0.06em] text-ink no-underline transition-colors hover:bg-paper"
            >
              Read in 12 min →
            </Link>
          </div>
        </div>

        <dl className="grid grid-cols-2 border-y border-ink lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-4 ${i > 0 ? "border-l border-ink/15" : ""} ${
                i === 2 ? "max-lg:border-l-0 max-lg:border-t max-lg:border-ink/15" : ""
              } ${i === 3 ? "max-lg:border-t max-lg:border-ink/15" : ""}`}
            >
              <dt className="order-2 mt-1 text-[11.5px] font-medium uppercase tracking-[0.12em] text-ink-faint">
                {s.label}
              </dt>
              <dd className="order-1 font-display text-2xl font-semibold">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
