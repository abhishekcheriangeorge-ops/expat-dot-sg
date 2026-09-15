import Link from "next/link";
import { modes, pillars, primaryNav } from "@/lib/site";

/** Hardcoded explore plane — newer journeys/tools without editing site.ts. */
const EXPLORE_HUBS = [
  { href: "/journeys/family-joining", label: "Family joining" },
  { href: "/tools/ipa-window", label: "IPA window" },
  { href: "/journeys/pre-arrival", label: "Pre-arrival" },
  { href: "/journeys/arriving", label: "Arriving checklists" },
  { href: "/tools", label: "All tools" },
  { href: "/schools", label: "Schools" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-fog-soft bg-canopy-deep text-paper">
      <div className="mx-auto flex max-w-[var(--max-page)] flex-col gap-10 px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-2xl tracking-tight">expat.sg</p>
            <p className="mt-3 text-sm leading-relaxed text-[#d6d1c8]">
              The operating system for Singapore expat life — from the offer
              letter to year three.
            </p>
            <nav aria-label="Modes" className="mt-5 flex gap-5 text-sm">
              {modes.map((mode) => (
                <Link
                  key={mode.slug}
                  href={mode.href}
                  className="font-semibold text-tungsten-soft no-underline transition-colors hover:text-paper"
                >
                  {mode.label}
                </Link>
              ))}
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
                    className="text-[#d6d1c8] no-underline transition-colors hover:text-paper"
                  >
                    {pillar.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Explore">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-tungsten-soft">
              Explore
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-sm lg:grid-cols-1">
              {EXPLORE_HUBS.map((hub) => (
                <li key={hub.href}>
                  <Link
                    href={hub.href}
                    className="text-[#d6d1c8] no-underline transition-colors hover:text-paper"
                  >
                    {hub.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-canopy-mist/40 pt-6 text-xs text-[#d6d1c8] sm:flex-row sm:items-start sm:justify-between">
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
            <Link
              href="/advertise"
              className="opacity-70 no-underline hover:text-paper hover:opacity-100"
            >
              Advertise
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
