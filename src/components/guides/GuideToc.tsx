"use client";

import { useEffect, useState } from "react";
import type { TocItem } from "@/lib/content/toc";

type GuideTocProps = {
  items: TocItem[];
};

export function GuideToc({ items }: GuideTocProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (items.length === 0) return;

    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.25, 0.5, 1],
      },
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="On this page" className="text-sm">
      <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-ink-faint uppercase">
        On this page
      </p>
      <ol className="space-y-2 border-l border-fog-soft">
        {items.map((item) => {
          const active = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={[
                  "block border-l-2 py-0.5 no-underline transition-colors",
                  item.depth === 3 ? "pl-5" : "pl-3",
                  active
                    ? "-ml-px border-tungsten text-ink"
                    : "border-transparent text-ink-faint hover:text-ink-muted",
                ].join(" ")}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
