import Link from "next/link";
import { sgd, type HomeStats } from "@/lib/home/stats";

type HomeRentProps = { stats: HomeStats };

/**
 * Rent, as a budget lookup rather than a league table.
 *
 * The obvious move is a median-by-region table. It would mislead. The bands are
 * editorial round numbers, and within-region spread swamps between-region
 * spread: 16 of the 52 central areas start at or below the island-wide median,
 * so a "Central S$2,600" row would tell someone on S$2,300 that central is out
 * of reach when sixteen neighbourhoods are not. Counting how many areas a
 * budget actually opens is both truer and more useful.
 */
export function HomeRent({ stats }: HomeRentProps) {
  const max = stats.oneBedLadder[stats.oneBedLadder.length - 1]?.areas ?? 1;

  return (
    <section className="border-b border-ink/15 bg-paper-elevated text-ink">
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-14 sm:px-8 sm:py-16">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
            What rent actually starts at
          </h2>
          <Link
            href="/neighbourhoods"
            className="text-[12.5px] font-bold uppercase tracking-[0.08em] text-canopy no-underline underline-offset-4 hover:underline"
          >
            All {stats.neighbourhoods} neighbourhoods →
          </Link>
        </div>

        <p className="mt-4 max-w-2xl leading-relaxed text-ink-muted">
          Across every neighbourhood we cover, one-bed asking rents start
          between {sgd(stats.oneBedMin)} and {sgd(stats.oneBedMax)}. The middle
          of that range is {sgd(stats.oneBedMedian)}, and for a family-sized
          place it&rsquo;s {sgd(stats.familyMedian)}. What matters more than the
          average is how much a given budget actually opens up.
        </p>

        <ul className="mt-10 space-y-3">
          {stats.oneBedLadder.map((rung) => (
            <li key={rung.budget} className="flex items-center gap-4 sm:gap-6">
              <span className="w-[4.5rem] shrink-0 text-right font-display text-lg tabular-nums text-ink sm:w-24 sm:text-xl">
                {sgd(rung.budget)}
              </span>
              <span className="relative h-8 flex-1 overflow-hidden bg-ink/[0.06]">
                <span
                  className="absolute inset-y-0 left-0 bg-canopy-deep"
                  style={{ width: `${Math.round((rung.areas / max) * 100)}%` }}
                />
              </span>
              <span className="w-[8.5rem] shrink-0 text-[13px] leading-snug text-ink-muted sm:w-44">
                <strong className="font-semibold tabular-nums text-ink">
                  {rung.areas}
                </strong>{" "}
                of {stats.neighbourhoods} areas
                <span className="hidden sm:inline">
                  , {rung.regions} regions
                </span>
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-2xl text-[13px] leading-relaxed text-ink-faint">
          Counted from the starting figure in each neighbourhood&rsquo;s rent
          band, so read it as the floor you could plausibly find, not the price
          you will pay. Bands are our editorial read of the market and move with
          it — check current listings before you sign anything.
        </p>
      </div>
    </section>
  );
}
