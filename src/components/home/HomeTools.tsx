import Link from "next/link";
import type { HomeStats } from "@/lib/home/stats";

type HomeToolsProps = { stats: HomeStats };

/**
 * Calculators, phrased as the question you actually arrived with.
 * The site has 33 of these and the home page previously linked two.
 */
const QUESTIONS = [
  { q: "Does my salary clear the EP bar?", href: "/tools/ep-threshold" },
  { q: "How much cash do I need to land?", href: "/tools/setup-cash" },
  { q: "What will this month actually cost?", href: "/tools/cost-of-living" },
  { q: "What stamp duty do I owe on this lease?", href: "/tools/lease-duty" },
  { q: "Am I tax resident this year?", href: "/tools/tax-residency" },
  { q: "When must I give notice to leave?", href: "/tools/lease-notice" },
];

export function HomeTools({ stats }: HomeToolsProps) {
  return (
    <section className="border-b border-ink/15 bg-paper text-ink">
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-14 sm:px-8 sm:py-16">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Put your own numbers in
          </h2>
          <Link
            href="/tools"
            className="text-[12.5px] font-bold uppercase tracking-[0.08em] text-canopy no-underline underline-offset-4 hover:underline"
          >
            All {stats.tools} calculators →
          </Link>
        </div>

        <ul className="mt-8 grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-3">
          {QUESTIONS.map((item) => (
            <li key={item.href} className="bg-paper">
              <Link
                href={item.href}
                className="flex min-h-[88px] items-center px-6 py-5 font-display text-lg leading-snug text-ink no-underline transition-colors hover:bg-paper-elevated hover:text-canopy"
              >
                {item.q}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
