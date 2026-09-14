"use client";

import { useMemo, useState } from "react";
import type { CalendarAudience, CalendarEvent } from "@/lib/content";

const filters: { id: CalendarAudience | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "kids", label: "Kids" },
  { id: "families", label: "Families" },
  { id: "culture", label: "Culture" },
  { id: "sports", label: "Sports" },
  { id: "everyone", label: "Everyone" },
];

function formatDateRange(event: CalendarEvent): string {
  if (event.recurring && event.date.endsWith("-01-01") && !event.endDate) {
    return "Recurring";
  }
  const start = formatIso(event.date);
  if (!event.endDate) return start;
  return `${start} – ${formatIso(event.endDate)}`;
}

function formatIso(iso: string): string {
  const d = new Date(`${iso}T12:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-SG", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

type CalendarBoardProps = {
  events: CalendarEvent[];
};

export function CalendarBoard({ events }: CalendarBoardProps) {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");

  const visible = useMemo(() => {
    if (filter === "all") return events;
    return events.filter((e) => e.audience.includes(filter));
  }, [events, filter]);

  return (
    <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Calendar audience"
      >
        {filters.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f.id)}
              className={
                active
                  ? "bg-canopy px-4 py-2 text-sm font-semibold text-paper"
                  : "border border-ink/15 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-ink/35"
              }
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <ul className="mt-10 flex flex-col">
        {visible.map((event) => (
          <li
            key={event.slug}
            className="grid gap-2 border-b border-fog-soft py-6 sm:grid-cols-[10rem_1fr] sm:gap-8"
          >
            <div>
              <p className="text-sm font-medium text-canopy">
                {formatDateRange(event)}
              </p>
              {event.recurring ? (
                <p className="mt-1 text-xs uppercase tracking-wide text-ink-faint">
                  Annual / recurring
                </p>
              ) : null}
            </div>
            <div>
              <h2 className="font-display text-xl text-ink sm:text-2xl">
                {event.title}
                {event.featured ? (
                  <span className="ml-2 align-middle text-xs font-sans font-semibold uppercase tracking-wide text-tungsten">
                    Featured
                  </span>
                ) : null}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
                {event.summary}
              </p>
              <p className="mt-3 text-xs text-ink-faint">
                {[event.venue, event.audience.join(" · ")]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
              {event.href ? (
                <a
                  href={event.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-canopy no-underline hover:text-canopy-mist"
                >
                  Event site →
                </a>
              ) : null}
            </div>
          </li>
        ))}
        {visible.length === 0 ? (
          <li className="py-12 text-ink-muted">No events in this filter.</li>
        ) : null}
      </ul>
    </div>
  );
}
