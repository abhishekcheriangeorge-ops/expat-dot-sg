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
    <div className="sticky top-0 z-30 border-b border-fog-soft bg-paper/95 backdrop-blur-md">
      <div
        className="mx-auto flex max-w-[var(--max-page)] flex-col gap-4 px-5 py-4 sm:px-8"
        role="search"
        aria-label="Filter directory"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <label className="relative block w-full max-w-md">
            <span className="sr-only">Search</span>
            <input
              type="search"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={searchPlaceholder}
              className="w-full border border-fog-soft bg-paper-elevated px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-canopy-mist focus:outline-none"
            />
          </label>
          <p className="text-sm text-ink-faint" aria-live="polite">
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
          ? "border border-canopy bg-canopy px-3 py-1.5 text-xs font-medium text-paper transition-colors"
          : "border border-fog-soft bg-transparent px-3 py-1.5 text-xs font-medium text-ink-muted transition-colors hover:border-canopy-mist hover:text-ink"
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
  /** Visible ItemList name for directory indexes */
  listName?: string;
};

export function ListingGrid({
  items,
  emptyMessage = "No matches. Clear a filter or try another search.",
  listName = "Directory results",
}: ListingGridProps) {
  if (items.length === 0) {
    return (
      <p className="mx-auto max-w-[var(--max-page)] px-5 py-16 text-center text-ink-muted sm:px-8">
        {emptyMessage}
      </p>
    );
  }

  return (
    <ul
      className="mx-auto grid max-w-[var(--max-page)] gap-px bg-fog-soft px-0 sm:grid-cols-2 lg:grid-cols-3"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content={listName} />
      <meta itemProp="numberOfItems" content={String(items.length)} />
      {items.map((item, index) => (
        <li
          key={item.slug}
          className="bg-paper"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <meta itemProp="position" content={String(index + 1)} />
          <Link
            href={item.href}
            itemProp="url"
            className="group flex h-full flex-col gap-3 p-6 no-underline transition-colors hover:bg-paper-elevated sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              {item.eyebrow ? (
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-canopy-mist">
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
            <h2
              itemProp="name"
              className="font-display text-2xl leading-snug text-ink transition-colors group-hover:text-canopy-deep"
            >
              {item.name}
            </h2>
            <p
              itemProp="description"
              className="flex-1 text-sm leading-relaxed text-ink-muted"
            >
              {item.summary}
            </p>
            {item.meta && item.meta.length > 0 ? (
              <p className="text-xs text-ink-faint">{item.meta.join(" · ")}</p>
            ) : null}
            <span className="text-sm font-medium text-canopy">View →</span>
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
        <h2 className="font-display text-2xl text-canopy-deep">{title}</h2>
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
    <div itemScope itemType="https://schema.org/ItemList">
      <meta itemProp="name" content={label} />
      <meta itemProp="numberOfItems" content={String(items.length)} />
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">
        {label}
      </p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((item, index) => (
          <li
            key={item}
            className="border border-fog-soft bg-paper-elevated px-3 py-1 text-sm text-ink-muted"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <meta itemProp="position" content={String(index + 1)} />
            <span itemProp="name">{item}</span>
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
      className="inline-flex items-center border border-canopy px-5 py-2.5 text-sm font-semibold text-canopy no-underline transition-colors hover:bg-canopy hover:text-paper"
    >
      {label} ↗
    </a>
  );
}
