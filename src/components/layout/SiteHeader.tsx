import Link from "next/link";

const primaryNav = [
  { href: "/arriving", label: "Arriving" },
  { href: "/living", label: "Living" },
  { href: "/guides", label: "Guides" },
  { href: "/neighbourhoods", label: "Neighbourhoods" },
  { href: "/schools", label: "Schools" },
  { href: "/clubs", label: "Clubs" },
] as const;

export function SiteHeader() {
  return (
    <header className="relative z-40 border-b border-fog-soft/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[var(--max-page)] items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-xl tracking-tight text-canopy-deep no-underline sm:text-2xl"
        >
          expat.sg
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 text-sm font-medium text-ink-muted md:flex"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-ink no-underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/advertise"
          className="text-sm font-medium text-canopy no-underline transition-colors hover:text-canopy-mist"
        >
          Advertise
        </Link>
      </div>
    </header>
  );
}
