"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { pillars, primaryNav, primaryNavDesktop } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky inset-x-0 top-0 z-40">
      {/* Ticker — Straits Standard briefing strip */}
      <div className="bg-canopy-deep text-tungsten-soft">
        <div className="mx-auto flex max-w-[var(--max-page)] items-center justify-between gap-4 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] sm:px-8">
          <span>Singapore · Weekly briefing · Nº 042</span>
          <span className="hidden sm:inline">
            EP S$5,600 · Tiong Bahru 2-bed S$6,800 · UWC waitlist open
          </span>
        </div>
      </div>

      {/* Masthead */}
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
            className="hidden items-center gap-6 text-[12.5px] font-semibold uppercase tracking-[0.08em] text-ink-muted lg:flex"
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
                    active ? "text-tungsten" : "hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-ink lg:hidden"
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
            className="border-t border-ink/15 bg-paper text-ink lg:hidden"
          >
            <nav
              aria-label="Mobile primary"
              className="mx-auto flex max-w-[var(--max-page)] flex-col gap-1 px-5 py-5 sm:px-8"
            >
              {primaryNav.map((item) => {
                const active =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);
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
