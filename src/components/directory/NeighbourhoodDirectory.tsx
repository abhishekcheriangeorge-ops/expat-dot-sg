"use client";

import { useMemo, useState } from "react";
import {
  NEIGHBOURHOOD_REGION_LABELS,
  type Neighbourhood,
  type NeighbourhoodRegion,
} from "@/lib/content/schemas";
import { FilterBar, ListingGrid } from "./FilterAndList";

type Props = {
  neighbourhoods: Neighbourhood[];
};

export function NeighbourhoodDirectory({ neighbourhoods }: Props) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const regionOptions = useMemo(() => {
    const counts = new Map<NeighbourhoodRegion, number>();
    for (const n of neighbourhoods) {
      counts.set(n.region, (counts.get(n.region) ?? 0) + 1);
    }
    return (Object.keys(NEIGHBOURHOOD_REGION_LABELS) as NeighbourhoodRegion[])
      .filter((r) => counts.has(r))
      .map((r) => ({
        value: r,
        label: NEIGHBOURHOOD_REGION_LABELS[r],
        count: counts.get(r),
      }));
  }, [neighbourhoods]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return neighbourhoods.filter((n) => {
      if (region && n.region !== region) return false;
      if (!q) return true;
      const hay = [n.name, n.summary, n.region, ...n.vibe, ...n.bestFor]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [neighbourhoods, search, region]);

  return (
    <>
      <FilterBar
        searchPlaceholder="Search neighbourhoods, vibes, MRT…"
        search={search}
        onSearchChange={setSearch}
        resultCount={filtered.length}
        filters={[
          {
            id: "region",
            label: "Region",
            options: regionOptions,
            value: region,
            onChange: setRegion,
          },
        ]}
      />
      <ListingGrid
        listName="Neighbourhoods"
        items={filtered.map((n) => ({
          slug: n.slug,
          href: `/neighbourhoods/${n.slug}`,
          name: n.name,
          summary: n.summary,
          featured: n.featured,
          eyebrow: NEIGHBOURHOOD_REGION_LABELS[n.region],
          meta: [
            ...(n.mrt.slice(0, 2).map((m) => `MRT ${m}`)),
            ...(n.rentBand?.familyFrom
              ? [`Family from $${n.rentBand.familyFrom.toLocaleString()}`]
              : []),
          ],
        }))}
      />
    </>
  );
}
