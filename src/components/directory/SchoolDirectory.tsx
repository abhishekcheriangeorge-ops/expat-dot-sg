"use client";

import { useMemo, useState } from "react";
import type { School } from "@/lib/content/schemas";
import { FilterBar, ListingGrid } from "./FilterAndList";

type Props = {
  schools: School[];
};

const SECTOR_LABELS: Record<School["sector"], string> = {
  international: "International",
  local: "Local",
  special: "Special / inclusive",
};

export function SchoolDirectory({ schools }: Props) {
  const [search, setSearch] = useState("");
  const [sector, setSector] = useState("");
  const [curriculum, setCurriculum] = useState("");

  const curriculumOptions = useMemo(() => {
    const counts = new Map<string, number>();
    for (const s of schools) {
      for (const c of s.curriculum) {
        counts.set(c, (counts.get(c) ?? 0) + 1);
      }
    }
    return [...counts.entries()]
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([value, count]) => ({ value, label: value, count }));
  }, [schools]);

  const sectorOptions = useMemo(() => {
    const counts = new Map<string, number>();
    for (const s of schools) {
      counts.set(s.sector, (counts.get(s.sector) ?? 0) + 1);
    }
    return (["international", "local", "special"] as const)
      .filter((s) => counts.has(s))
      .map((s) => ({
        value: s,
        label: SECTOR_LABELS[s],
        count: counts.get(s),
      }));
  }, [schools]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return schools.filter((s) => {
      if (sector && s.sector !== sector) return false;
      if (curriculum && !s.curriculum.includes(curriculum)) return false;
      if (!q) return true;
      const hay = [
        s.name,
        s.summary,
        s.campus ?? "",
        s.neighbourhood ?? "",
        ...s.curriculum,
        ...s.languages,
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [schools, search, sector, curriculum]);

  return (
    <>
      <FilterBar
        searchPlaceholder="Search schools, curriculum, campus…"
        search={search}
        onSearchChange={setSearch}
        resultCount={filtered.length}
        filters={[
          {
            id: "sector",
            label: "Sector",
            options: sectorOptions,
            value: sector,
            onChange: setSector,
          },
          {
            id: "curriculum",
            label: "Curriculum",
            options: curriculumOptions,
            value: curriculum,
            onChange: setCurriculum,
          },
        ]}
      />
      <ListingGrid
        items={filtered.map((s) => ({
          slug: s.slug,
          href: `/schools/${s.slug}`,
          name: s.name,
          summary: s.summary,
          featured: s.featured,
          sponsored: s.sponsored,
          eyebrow: SECTOR_LABELS[s.sector],
          meta: [
            s.curriculum.slice(0, 3).join(", "),
            s.feesBand,
            s.campus,
          ].filter(Boolean) as string[],
        }))}
      />
    </>
  );
}
