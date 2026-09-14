"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { JourneyChecklist } from "@/lib/content";

const storageKey = (slug: string) => `expat.sg:checklist:${slug}`;

type ChecklistBoardProps = {
  checklist: JourneyChecklist;
};

export function ChecklistBoard({ checklist }: ChecklistBoardProps) {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey(checklist.slug));
      if (raw) setDone(JSON.parse(raw) as Record<string, boolean>);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, [checklist.slug]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(storageKey(checklist.slug), JSON.stringify(done));
    } catch {
      /* ignore */
    }
  }, [done, checklist.slug, hydrated]);

  const required = useMemo(
    () => checklist.items.filter((i) => !i.optional),
    [checklist.items],
  );
  const completedRequired = required.filter((i) => done[i.id]).length;
  const progress =
    required.length === 0
      ? 0
      : Math.round((completedRequired / required.length) * 100);

  function toggle(id: string) {
    setDone((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function reset() {
    setDone({});
  }

  return (
    <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm text-ink-muted">
            Progress saves in this browser only — a quiet checklist, not an
            account.
          </p>
          <p className="mt-2 font-display text-2xl text-ink">
            {completedRequired} of {required.length} essentials · {progress}%
          </p>
        </div>
        <button
          type="button"
          onClick={reset}
          className="self-start text-sm font-medium text-ink-faint underline-offset-4 hover:text-ink hover:underline"
        >
          Reset checklist
        </button>
      </div>

      <div
        className="mb-10 h-1.5 w-full overflow-hidden bg-fog-soft"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Checklist progress"
      >
        <div
          className="h-full bg-canopy transition-[width] duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <ul className="flex flex-col gap-4">
        {checklist.items.map((item) => {
          const checked = Boolean(done[item.id]);
          return (
            <li
              key={item.id}
              className="border-b border-fog-soft/90 pb-4 last:border-0"
            >
              <label className="flex cursor-pointer gap-4">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggle(item.id)}
                  className="mt-1 size-5 shrink-0 accent-[var(--canopy)]"
                />
                <span className="min-w-0 flex-1">
                  <span
                    className={`block font-medium ${checked ? "text-ink-faint line-through" : "text-ink"}`}
                  >
                    {item.title}
                    {item.optional ? (
                      <span className="ml-2 text-xs font-normal uppercase tracking-wide text-ink-faint">
                        optional
                      </span>
                    ) : null}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-ink-muted">
                    {item.detail}
                  </span>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="mt-2 inline-block text-sm font-medium text-canopy no-underline hover:text-canopy-mist"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Related →
                    </Link>
                  ) : null}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
