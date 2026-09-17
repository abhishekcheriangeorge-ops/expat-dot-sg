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
        role="group"
        aria-label="Filter events by audience"
      >
        {filters.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f.id)}
              className={
                active
                  ? "rounded-sm bg-ink px-4 py-2.5 text-sm font-semibold text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tungsten"
                  : "rounded-sm border border-ink/15 px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tungsten"
              }
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <ul className="mt-10 flex flex-col border-t border-ink">
        {visible.map((event) => (
          <li
            key={event.slug}
            className="grid gap-2 border-b border-ink/15 py-6 sm:grid-cols-[10rem_1fr] sm:gap-8"
          >
            <div>
              <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-tungsten">
                {formatDateRange(event)}
              </p>
              {event.recurring ? (
                <p className="mt-1 text-xs uppercase tracking-wide text-ink-faint">
                  Annual / recurring
                </p>
              ) : null}
            </div>
            <div>
              <h2 className="font-display text-xl font-medium tracking-tight text-ink sm:text-2xl">
                {event.title}
                {event.featured ? (
                  <span className="ml-2 align-middle font-sans text-xs font-bold uppercase tracking-wide text-tungsten">
                    Featured
                  </span>
                ) : null}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
                {event.summary}
              </p>
              <p className="mt-3 text-xs text-ink-faint">
                <span>{event.venue}</span>
                {event.audience.length > 0 ? (
                  <>
                    <span aria-hidden="true"> · </span>
                    <span>{event.audience.join(", ")}</span>
                  </>
                ) : null}
              </p>
              {event.href ? (
                <a
                  href={event.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block rounded-sm py-1.5 text-sm font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
                >
                  Event site <span aria-hidden="true">→</span>
                  <span className="sr-only"> (opens in a new tab)</span>
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
