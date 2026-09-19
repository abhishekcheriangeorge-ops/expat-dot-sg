import Link from "next/link";
import type { HomeStats } from "@/lib/home/stats";

type HomeHeroProps = { stats: HomeStats };

/**
 * One column, one claim.
 *
 * This used to be a two-column hero with a dark "ledger" panel holding three
 * hardcoded figures. Two heavy elements side by side gave the eye no hierarchy,
 * and the figures could not update themselves. The numbers below are counted
 * from the corpus at build time, and they sit under the headline rather than
 * fighting it.
 */
export function HomeHero({ stats }: HomeHeroProps) {
  return (
    <section className="border-b border-ink/15 bg-paper text-ink">
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-14 sm:px-8 sm:py-20">
        <h1 className="max-w-3xl font-display text-5xl font-medium leading-[1.03] tracking-[-0.025em] sm:text-6xl lg:text-7xl">
          Singapore, <em className="font-normal italic">decided</em> — not
          debated.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
          Passes, rent, schools and the exit sequence. Every rule here is
          checked against the agency that actually sets it, and every guide
          says when it was last read.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row sm:flex-wrap">
          <Link
            href="/arriving"
            className="inline-flex min-h-[48px] items-center justify-center border border-ink bg-ink px-7 py-3.5 text-[12.5px] font-bold uppercase tracking-[0.08em] text-paper no-underline transition-colors hover:bg-canopy sm:justify-start"
          >
            I&rsquo;m arriving
          </Link>
          <Link
            href="/living"
            className="inline-flex min-h-[48px] items-center justify-center border border-ink px-7 py-3.5 text-[12.5px] font-bold uppercase tracking-[0.08em] text-ink no-underline transition-colors hover:bg-paper-elevated max-sm:border-t-0 sm:justify-start sm:border-l-0"
          >
            I&rsquo;m already here
          </Link>
          <Link
            href="/journeys/leaving"
            className="inline-flex min-h-[48px] items-center justify-center border border-ink px-7 py-3.5 text-[12.5px] font-bold uppercase tracking-[0.08em] text-ink no-underline transition-colors hover:bg-paper-elevated max-sm:border-t-0 sm:justify-start sm:border-l-0"
          >
            I&rsquo;m leaving
          </Link>
        </div>

        <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 border-t border-ink/15 pt-8 sm:grid-cols-4">
          {[
            { k: stats.guides, v: "guides", h: "/guides" },
            { k: stats.neighbourhoods, v: "neighbourhoods, with rents", h: "/neighbourhoods" },
            { k: stats.tools, v: "calculators", h: "/tools" },
            { k: stats.citations, v: "cited official sources", h: "/editorial-policy" },
          ].map((item) => (
            <div key={item.v}>
              <dt className="font-display text-4xl font-medium tabular-nums text-ink">
                <Link href={item.h} className="text-ink no-underline hover:text-canopy">
                  {item.k.toLocaleString("en-SG")}
                </Link>
              </dt>
              <dd className="mt-1 text-[13px] leading-snug text-ink-faint">
                {item.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
