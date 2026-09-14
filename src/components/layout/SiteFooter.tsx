import Link from "next/link";

const pillars = [
  { href: "/move", label: "Move" },
  { href: "/home", label: "Home" },
  { href: "/money", label: "Money" },
  { href: "/family", label: "Family" },
  { href: "/life", label: "Life" },
  { href: "/belong", label: "Belong" },
  { href: "/next", label: "Next" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-fog-soft bg-canopy-deep text-paper">
      <div className="mx-auto flex max-w-[var(--max-page)] flex-col gap-10 px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-2xl tracking-tight">expat.sg</p>
            <p className="mt-3 text-sm leading-relaxed text-fog">
              The operating system for Singapore expat life — from the offer
              letter to year three.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-tungsten-soft">
              Pillars
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-sm sm:grid-cols-4">
              {pillars.map((pillar) => (
                <li key={pillar.href}>
                  <Link
                    href={pillar.href}
                    className="text-fog no-underline transition-colors hover:text-paper"
                  >
                    {pillar.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-canopy-mist/40 pt-6 text-xs text-fog sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} expat.sg</p>
          <div className="flex gap-5">
            <Link href="/about" className="no-underline hover:text-paper">
              About
            </Link>
            <Link
              href="/editorial-policy"
              className="no-underline hover:text-paper"
            >
              Editorial policy
            </Link>
            <Link href="/advertise" className="no-underline hover:text-paper">
              Advertise
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
