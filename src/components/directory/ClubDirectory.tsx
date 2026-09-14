"use client";

import { useMemo, useState } from "react";
import {
  CLUB_CATEGORY_LABELS,
  type Club,
  type ClubCategory,
} from "@/lib/content/schemas";
import { FilterBar, ListingGrid } from "./FilterAndList";

type Props = {
  clubs: Club[];
};

export function ClubDirectory({ clubs }: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const categoryOptions = useMemo(() => {
    const counts = new Map<ClubCategory, number>();
    for (const c of clubs) {
      counts.set(c.category, (counts.get(c.category) ?? 0) + 1);
    }
    return (Object.keys(CLUB_CATEGORY_LABELS) as ClubCategory[])
      .filter((cat) => counts.has(cat))
      .map((cat) => ({
        value: cat,
        label: CLUB_CATEGORY_LABELS[cat],
        count: counts.get(cat),
      }));
  }, [clubs]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return clubs.filter((c) => {
      if (category && c.category !== category) return false;
      if (!q) return true;
      const hay = [c.name, c.summary, c.category, ...c.focus]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [clubs, search, category]);

  return (
    <>
      <FilterBar
        searchPlaceholder="Search clubs, associations, chambers…"
        search={search}
        onSearchChange={setSearch}
        resultCount={filtered.length}
        filters={[
          {
            id: "category",
            label: "Category",
            options: categoryOptions,
            value: category,
            onChange: setCategory,
          },
        ]}
      />
      <ListingGrid
        items={filtered.map((c) => ({
          slug: c.slug,
          href: `/clubs/${c.slug}`,
          name: c.name,
          summary: c.summary,
          featured: c.featured,
          sponsored: c.sponsored,
          eyebrow: CLUB_CATEGORY_LABELS[c.category],
          meta: c.focus.slice(0, 3),
        }))}
      />
    </>
  );
}
