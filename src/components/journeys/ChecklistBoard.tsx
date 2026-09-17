"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import type { JourneyChecklist } from "@/lib/content";

const storageKey = (slug: string) => `expat.sg:checklist:${slug}`;

function subscribeToStorage(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function readStored(slug: string): string {
  try {
    return localStorage.getItem(storageKey(slug)) ?? "";
  } catch {
    return "";
  }
}

function parseStored(raw: string): Record<string, boolean> {
  if (!raw) return {};
  try {
    return JSON.parse(raw) as Record<string, boolean>;
  } catch {
    return {};
  }
}

type ChecklistBoardProps = {
  checklist: JourneyChecklist;
};

export function ChecklistBoard({ checklist }: ChecklistBoardProps) {
  // Hydration-safe persisted state: server renders unchecked, client
  // re-renders with stored values without set-state-in-effect.
  const storedRaw = useSyncExternalStore(
    subscribeToStorage,
    () => readStored(checklist.slug),
    () => "",
  );
  const [overrides, setOverrides] = useState<Record<string, boolean>>({});

  const done = useMemo(() => {
    return { ...parseStored(storedRaw), ...overrides };
  }, [storedRaw, overrides]);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey(checklist.slug), JSON.stringify(done));
    } catch {
      /* ignore */
    }
  }, [done, checklist.slug]);

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
    setOverrides((prev) => ({ ...prev, [id]: !done[id] }));
  }

  function reset() {
    setOverrides(
      Object.fromEntries(checklist.items.map((item) => [item.id, false])),
    );
  }

  return (
    <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm text-ink-muted">
            Your ticks stay in this browser.
          </p>
          <p
            className="mt-2 font-display text-2xl font-medium text-ink"
            role="status"
          >
            {completedRequired} of {required.length} essentials · {progress}%
          </p>
        </div>
        <button
          type="button"
          onClick={reset}
          className="self-start rounded-sm px-2 py-2.5 text-sm font-medium text-ink-faint underline-offset-4 hover:text-ink hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
        >
          Reset checklist
        </button>
      </div>

      <div
        className="mb-10 h-1.5 w-full overflow-hidden rounded-full bg-ink/10"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Checklist progress"
      >
        <div
          className="h-full rounded-full bg-canopy transition-[width] duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <ul className="flex flex-col">
        {checklist.items.map((item) => {
          const checked = Boolean(done[item.id]);
          const inputId = `checklist-${checklist.slug}-${item.id}`;
          return (
            <li
              key={item.id}
              className="border-b border-ink/15 py-5 last:border-0"
            >
              <div className="flex gap-4">
                <input
                  id={inputId}
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggle(item.id)}
                  className="mt-1 size-6 shrink-0 cursor-pointer accent-canopy"
                />
                <div className="min-w-0 flex-1">
                  <label
                    htmlFor={inputId}
                    className="block cursor-pointer"
                  >
                    <span
                      className={
                        checked ? "text-ink-faint line-through" : "text-ink"
                      }
                    >
                      {item.title}
                    </span>
                    {item.optional ? (
                      <span className="ml-2 text-xs font-normal uppercase tracking-wide text-ink-faint">
                        optional
                      </span>
                    ) : null}
                  </label>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                    {item.detail}
                  </p>
                  {item.href ? (
                    item.href.startsWith("http") ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block rounded-sm py-1 text-sm font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
                      >
                        Source <span aria-hidden="true">→</span>
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="mt-2 inline-block rounded-sm py-1 text-sm font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
                      >
                        Related <span aria-hidden="true">→</span>
                      </Link>
                    )
                  ) : null}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
