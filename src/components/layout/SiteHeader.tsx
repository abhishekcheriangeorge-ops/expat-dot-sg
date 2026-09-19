"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { pillars, primaryNav, primaryNavDesktop } from "@/lib/site";

function navActive(pathname: string, href: string) {
  if (href === "/journeys") {
    return pathname === "/journeys" || pathname.startsWith("/journeys/arriving");
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky inset-x-0 top-0 z-40">
      <div className="border-b-[3px] border-double border-ink/70 bg-paper/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[var(--max-page)] items-center justify-between gap-6 px-5 sm:px-8">
          <Link
            href="/"
            className="font-display text-[1.7rem] font-semibold tracking-tight text-ink no-underline"
          >
            expat<span className="text-tungsten">.sg</span>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-5 text-[12.5px] font-semibold uppercase tracking-[0.08em] text-ink-muted xl:flex"
          >
            {primaryNavDesktop.map((item) => {
              const active = navActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`no-underline transition-colors ${
                    active ? "text-tungsten" : "hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <form
              action="/guides"
              method="get"
              role="search"
              className="hidden lg:block"
            >
              <label className="sr-only" htmlFor="masthead-search">
                Search guides
              </label>
              <input
                id="masthead-search"
                type="search"
                name="q"
                placeholder="Search"
                className="h-10 w-36 rounded-sm border border-ink/20 bg-paper-elevated px-3 text-sm text-ink placeholder:text-ink-faint focus:border-tungsten focus:outline-2 focus:outline-tungsten xl:w-44"
              />
            </form>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-ink xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <span aria-hidden className="flex w-5 flex-col gap-1.5">
                <span
                  className={`block h-px w-full bg-ink transition ${
                    open ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-px w-full bg-ink transition ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-px w-full bg-ink transition ${
                    open ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {open ? (
          <div
            id="mobile-nav"
            className="border-t border-ink/15 bg-paper text-ink xl:hidden"
          >
            <nav
              aria-label="Mobile primary"
              className="mx-auto flex max-w-[var(--max-page)] flex-col gap-1 px-5 py-5 sm:px-8"
            >
              <form action="/guides" method="get" role="search" className="mb-3">
                <label className="sr-only" htmlFor="mobile-search">
                  Search guides
                </label>
                <input
                  id="mobile-search"
                  type="search"
                  name="q"
                  placeholder="Search guides"
                  className="h-12 w-full rounded-sm border border-ink/20 bg-paper-elevated px-4 text-sm text-ink placeholder:text-ink-faint focus:border-tungsten focus:outline-2 focus:outline-tungsten"
                />
              </form>
              {primaryNav.map((item) => {
                const active = navActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    aria-current={active ? "page" : undefined}
                    className={`py-2.5 text-base font-medium no-underline ${
                      active ? "text-tungsten" : "text-ink"
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
                    onClick={close}
                    className="py-2 text-sm text-ink-muted no-underline"
                  >
                    {pillar.label}
                  </Link>
                ))}
              </div>
              <div className="mt-4 flex flex-col gap-1 border-t border-ink/15 pt-4">
                <Link
                  href="/about"
                  onClick={close}
                  className="py-2.5 text-base font-medium text-ink-muted no-underline"
                >
                  About
                </Link>
                <Link
                  href="/editorial-policy"
                  onClick={close}
                  className="py-2.5 text-base font-medium text-ink-muted no-underline"
                >
                  Editorial policy
                </Link>
              </div>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
