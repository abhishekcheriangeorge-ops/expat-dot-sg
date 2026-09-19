import Link from "next/link";
import type { HomeStats } from "@/lib/home/stats";

type HomeSourcingProps = { stats: HomeStats };

/**
 * The block that replaces the fake issue number.
 *
 * The header used to carry "Weekly briefing · Nº 042" — a publication that does
 * not exist, implying forty-one prior issues. It was performing authority. This
 * does the same job with figures that are counted rather than claimed, which is
 * the only version that survives someone checking.
 */
export function HomeSourcing({ stats }: HomeSourcingProps) {
  return (
    <section className="bg-canopy-deep text-paper">
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-tungsten-soft">
              Where the numbers come from
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-[1.12] sm:text-4xl">
              {stats.govShare}% of what we cite is a Singapore government source.
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-paper/70">
              {stats.citations.toLocaleString("en-SG")} citations across{" "}
              {stats.citationHosts} sources.
              Rules come from the agency that sets them, and every guide carries
              the date it was last read — so you can tell how old the answer is
              before you act on it.
            </p>
            <Link
              href="/editorial-policy"
              className="mt-8 inline-flex min-h-[44px] items-center bg-tungsten-soft px-6 py-3.5 text-[13px] font-bold uppercase tracking-[0.06em] text-ink no-underline transition-colors hover:bg-paper"
            >
              How we check things →
            </Link>
          </div>

          <ul className="self-end">
            {stats.topSources.map((source) => (
              <li
                key={source.host}
                className="flex items-baseline justify-between gap-4 border-b border-tungsten-soft/20 py-3"
              >
                <span className="font-mono text-sm text-paper/70">
                  {source.host}
                </span>
                <span className="font-display text-lg tabular-nums text-tungsten-soft">
                  {source.count}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
