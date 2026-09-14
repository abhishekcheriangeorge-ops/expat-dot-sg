"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { pillars, primaryNav, primaryNavDesktop } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const overHero = isHome && !scrolled;
  const shell = overHero
    ? "border-transparent bg-transparent text-paper"
    : "border-fog-soft/80 bg-paper/90 text-ink backdrop-blur-md";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${shell}`}
    >
      <div className="mx-auto flex h-16 max-w-[var(--max-page)] items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          href="/"
          className={`font-display text-xl tracking-tight no-underline sm:text-2xl ${
            overHero ? "text-paper" : "text-canopy-deep"
          }`}
        >
          expat.sg
        </Link>

        <nav
          aria-label="Primary"
          className={`hidden items-center gap-5 text-sm font-medium lg:flex ${
            overHero ? "text-fog" : "text-ink-muted"
          }`}
        >
          {primaryNavDesktop.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`no-underline transition-colors ${
                  active
                    ? overHero
                      ? "text-paper"
                      : "text-ink"
                    : overHero
                      ? "hover:text-paper"
                      : "hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/advertise"
            className={`hidden text-sm font-medium no-underline transition-colors sm:inline ${
              overHero
                ? "text-tungsten-soft hover:text-paper"
                : "text-canopy hover:text-canopy-mist"
            }`}
          >
            Advertise
          </Link>

          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-sm lg:hidden ${
              overHero ? "text-paper" : "text-ink"
            }`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden className="flex w-5 flex-col gap-1.5">
              <span
                className={`block h-px w-full transition ${
                  overHero ? "bg-paper" : "bg-ink"
                } ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-full transition ${
                  overHero ? "bg-paper" : "bg-ink"
                } ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-px w-full transition ${
                  overHero ? "bg-paper" : "bg-ink"
                } ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-fog-soft/40 bg-paper text-ink lg:hidden"
        >
          <nav
            aria-label="Mobile primary"
            className="mx-auto flex max-w-[var(--max-page)] flex-col gap-1 px-5 py-5 sm:px-8"
          >
            {primaryNav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`py-2.5 text-base font-medium no-underline ${
                    active ? "text-canopy" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-tungsten">
              Pillars
            </p>
            <div className="mt-1 grid grid-cols-2 gap-x-4">
              {pillars.map((pillar) => (
                <Link
                  key={pillar.slug}
                  href={pillar.href}
                  className="py-2 text-sm text-ink-muted no-underline"
                >
                  {pillar.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-1 border-t border-fog-soft pt-4">
              <Link
                href="/sponsored"
                className="py-2.5 text-base font-medium text-ink no-underline"
              >
                Sponsored
              </Link>
              <Link
                href="/advertise"
                className="py-2.5 text-base font-medium text-canopy no-underline"
              >
                Advertise
              </Link>
              <Link
                href="/about"
                className="py-2.5 text-base font-medium text-ink-muted no-underline"
              >
                About
              </Link>
              <Link
                href="/editorial-policy"
                className="py-2.5 text-base font-medium text-ink-muted no-underline"
              >
                Editorial policy
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
