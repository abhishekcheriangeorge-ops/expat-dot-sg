"use client";

import { useMemo, useState } from "react";
import {
  SERVICE_CATEGORY_LABELS,
  type ServiceCategory,
  type ServiceListing,
} from "@/lib/content/schemas";
import { FilterBar, ListingGrid } from "./FilterAndList";

type Props = {
  services: ServiceListing[];
  /** When set, hide category filter and lock to this category */
  lockedCategory?: ServiceCategory;
};

export function ServiceDirectory({ services, lockedCategory }: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(lockedCategory ?? "");

  const categoryOptions = useMemo(() => {
    const counts = new Map<ServiceCategory, number>();
    for (const s of services) {
      counts.set(s.category, (counts.get(s.category) ?? 0) + 1);
    }
    return (Object.keys(SERVICE_CATEGORY_LABELS) as ServiceCategory[])
      .filter((cat) => counts.has(cat))
      .map((cat) => ({
        value: cat,
        label: SERVICE_CATEGORY_LABELS[cat],
        count: counts.get(cat),
      }));
  }, [services]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    const cat = lockedCategory ?? category;
    return services.filter((s) => {
      if (cat && s.category !== cat) return false;
      if (!q) return true;
      const hay = [s.name, s.summary, s.category, ...s.areasServed]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [services, search, category, lockedCategory]);

  return (
    <>
      <FilterBar
        searchPlaceholder="Search services…"
        search={search}
        onSearchChange={setSearch}
        resultCount={filtered.length}
        filters={
          lockedCategory
            ? []
            : [
                {
                  id: "category",
                  label: "Category",
                  options: categoryOptions,
                  value: category,
                  onChange: setCategory,
                },
              ]
        }
      />
      <ListingGrid
        items={filtered.map((s) => ({
          slug: s.slug,
          href: `/directory/${s.category}/${s.slug}`,
          name: s.name,
          summary: s.summary,
          featured: s.featured,
          sponsored: s.sponsored,
          eyebrow: SERVICE_CATEGORY_LABELS[s.category],
          meta: s.areasServed.slice(0, 2),
        }))}
      />
    </>
  );
}
