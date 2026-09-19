"use client";

import type { ReactNode } from "react";

type KenBurnsProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Soft ken-burns + rain-light shift for hero media.
 * Wrap an image or full-bleed visual plane — not for UI chrome.
 */
export function KenBurns({ children, className }: KenBurnsProps) {
  return (
    <div
      data-ken-burns=""
      className={`relative h-full w-full overflow-hidden ${className ?? ""}`}
    >
      {children}
      <div
        aria-hidden
        data-ken-burns-light=""
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(242,238,230,0.14),transparent_45%)] mix-blend-soft-light"
      />
    </div>
  );
}
