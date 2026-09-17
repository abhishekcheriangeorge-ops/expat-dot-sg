"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { FeaturedBadge } from "./BadgesAndHeroes";

export type FilterOption = {
  value: string;
  label: string;
  count?: number;
};

type FilterBarProps = {
  searchPlaceholder?: string;
  filters: {
    id: string;
    label: string;
    options: FilterOption[];
    /** empty string = All */
    value: string;
    onChange: (value: string) => void;
  }[];
  search: string;
  onSearchChange: (value: string) => void;
  resultCount: number;
};

export function FilterBar({
  searchPlaceholder = "Search…",
  filters,
  search,
  onSearchChange,
  resultCount,
}: FilterBarProps) {
  return (
    <div className="border-b border-ink/15 bg-paper">
      <div className="mx-auto flex max-w-[var(--max-page)] flex-col gap-4 px-5 py-5 sm:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <label className="relative block w-full max-w-md">
            <span className="sr-only">Search listings</span>
            <input
              type="search"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={searchPlaceholder}
              aria-label={searchPlaceholder}
              className="w-full rounded-sm border border-ink/20 bg-paper-elevated px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-tungsten focus:outline-2 focus:outline-tungsten"
            />
          </label>
          <p className="text-sm text-ink-faint" role="status">
            <span className="font-medium text-ink-muted">{resultCount}</span>{" "}
            {resultCount === 1 ? "result" : "results"}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {filters.map((filter) => (
            <div key={filter.id} className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint sm:w-28">
                {filter.label}
              </span>
              <div className="flex flex-wrap gap-2" role="group" aria-label={filter.label}>
                <FilterChip
                  active={filter.value === ""}
                  onClick={() => filter.onChange("")}
                  label="All"
                />
                {filter.options.map((opt) => (
                  <FilterChip
                    key={opt.value}
                    active={filter.value === opt.value}
                    onClick={() => filter.onChange(opt.value)}
                    label={
                      opt.count !== undefined
                        ? `${opt.label} (${opt.count})`
                        : opt.label
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        active
          ? "rounded-sm border border-ink bg-ink px-4 py-2.5 text-[13px] font-semibold text-paper transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tungsten"
          : "rounded-sm border border-ink/20 bg-transparent px-4 py-2.5 text-[13px] font-medium text-ink-muted transition-colors hover:border-ink/50 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tungsten"
      }
    >
      {label}
    </button>
  );
}

export type ListingItem = {
  slug: string;
  href: string;
  name: string;
  summary: string;
  featured?: boolean;
  sponsored?: boolean;
  meta?: string[];
  eyebrow?: string;
};

type ListingGridProps = {
  items: ListingItem[];
  emptyMessage?: string;
};

export function ListingGrid({
  items,
  emptyMessage = "No matches. Clear a filter or try another search.",
}: ListingGridProps) {
  if (items.length === 0) {
    return (
      <p className="mx-auto max-w-[var(--max-page)] px-5 py-16 text-center text-ink-muted sm:px-8">
        {emptyMessage}
      </p>
    );
  }

  return (
    <ul className="mx-auto grid max-w-[var(--max-page)] gap-px bg-fog-soft px-0 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.slug} className="bg-paper">
          <Link
            href={item.href}
            className="group flex h-full flex-col gap-3 p-6 no-underline transition-colors hover:bg-paper-elevated sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              {item.eyebrow ? (
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-tungsten">
                  {item.eyebrow}
                </p>
              ) : (
                <span />
              )}
              <FeaturedBadge
                featured={item.featured}
                sponsored={item.sponsored}
              />
            </div>
            <h2 className="font-display text-2xl font-medium leading-snug text-ink transition-colors group-hover:text-canopy">
              {item.name}
            </h2>
            <p className="flex-1 text-sm leading-relaxed text-ink-muted">
              {item.summary}
            </p>
            {item.meta && item.meta.length > 0 ? (
              <p className="text-xs text-ink-faint">{item.meta.join(" · ")}</p>
            ) : null}
            <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-ink transition-colors group-hover:text-tungsten">
              View <span aria-hidden="true">→</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

type ProseSectionProps = {
  title?: string;
  children: ReactNode;
};

export function ProseSection({ title, children }: ProseSectionProps) {
  return (
    <section className="mx-auto max-w-[var(--max-prose)] px-5 py-12 sm:px-8">
      {title ? (
        <h2 className="font-display text-2xl font-medium tracking-tight text-ink">{title}</h2>
      ) : null}
      <div
        className={`text-base leading-relaxed text-ink-muted ${title ? "mt-4" : ""} space-y-4`}
      >
        {children}
      </div>
    </section>
  );
}

type ChipListProps = {
  label: string;
  items: string[];
};

export function ChipList({ label, items }: ChipListProps) {
  if (items.length === 0) return null;
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">
        {label}
      </p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-sm border border-ink/15 bg-paper-elevated px-3 py-1.5 text-sm text-ink-muted"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

type ExternalLinkProps = {
  href: string;
  label?: string;
};

export function ExternalLink({ href, label = "Visit website" }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-[44px] items-center rounded-sm border border-ink px-5 py-3 text-sm font-semibold text-ink no-underline transition-colors hover:bg-ink hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tungsten"
    >
      {label} <span aria-hidden="true">↗</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
