import Link from "next/link";
import { modes, pillars, primaryNav } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-tungsten-soft/30 bg-canopy-deep text-paper">
      <div className="mx-auto flex max-w-[var(--max-page)] flex-col gap-10 px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-3xl font-semibold tracking-tight">
              expat<span className="text-tungsten-soft">.sg</span>
            </p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-tungsten-soft">
              Singapore expat life, from the offer letter to year three
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#b9b09a]">
              Singapore, decided — not debated. Passes, rents, schools, and
              costs, verified weekly.
            </p>
            <nav aria-label="Modes" className="mt-5 flex flex-wrap gap-5 text-sm">
              {modes.map((mode) => (
                <Link
                  key={mode.slug}
                  href={mode.href}
                  className="font-semibold text-tungsten-soft no-underline transition-colors hover:text-paper"
                >
                  {mode.label}
                </Link>
              ))}
              <Link
                href="/journeys/leaving"
                className="font-semibold text-tungsten-soft no-underline transition-colors hover:text-paper"
              >
                Leaving
              </Link>
            </nav>
          </div>

          <nav aria-label="Pillars">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-tungsten-soft">
              Pillars
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-sm sm:grid-cols-4">
              {pillars.map((pillar) => (
                <li key={pillar.href}>
                  <Link
                    href={pillar.href}
                    className="text-[#b9b09a] no-underline transition-colors hover:text-paper"
                  >
                    {pillar.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-tungsten-soft/20 pt-6 text-xs text-[#b9b09a] sm:flex-row sm:items-start sm:justify-between">
          <p>© {new Date().getFullYear()} expat.sg</p>
          <nav
            aria-label="Site"
            className="flex flex-wrap gap-x-5 gap-y-2 sm:justify-end"
          >
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="no-underline hover:text-paper"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/about" className="no-underline hover:text-paper">
              About
            </Link>
            <Link
              href="/editorial-policy"
              className="no-underline hover:text-paper"
            >
              Editorial policy
            </Link>
            <Link href="/privacy" className="no-underline hover:text-paper">
              Privacy
            </Link>
            <Link href="/terms" className="no-underline hover:text-paper">
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
