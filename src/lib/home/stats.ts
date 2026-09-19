/**
 * Home page figures, computed from the corpus at build time.
 *
 * Nothing here is hand-typed. The page this feeds used to carry a fabricated
 * issue number and three frozen figures, which is what made the rest of the
 * site's numbers look invented too. Everything below is derived, so it either
 * stays true or the build changes it.
 */
import { readdir } from "node:fs/promises";
import path from "node:path";

import { getAllGuides, PILLAR_LABELS } from "@/lib/content/guides";
import { getNeighbourhoods, getSchools } from "@/lib/content/entities";
import type { Pillar } from "@/lib/content/schemas";
import { pillars } from "@/lib/site";

export type PillarWeight = {
  slug: Pillar;
  href: string;
  label: string;
  tagline: string;
  guides: number;
};

export type BudgetRung = {
  budget: number;
  areas: number;
  regions: number;
};

export type HomeStats = {
  guides: number;
  neighbourhoods: number;
  schools: number;
  tools: number;
  journeys: number;
  citations: number;
  citationHosts: number;
  govShare: number;
  topSources: { host: string; count: number }[];
  oneBedMin: number;
  oneBedMedian: number;
  oneBedMax: number;
  familyMedian: number;
  oneBedLadder: BudgetRung[];
  pillarWeights: PillarWeight[];
  arriving: number;
  living: number;
};

function median(values: number[]): number {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)] ?? 0;
}

/** Rungs are chosen to actually separate the set, not to look tidy. */
const ONE_BED_RUNGS = [2000, 2200, 2400, 2600, 3000];

export async function getHomeStats(): Promise<HomeStats> {
  const [guides, neighbourhoods, schools, tools, journeys] = await Promise.all([
    getAllGuides(),
    getNeighbourhoods(),
    getSchools(),
    countDir("src/app/tools", (n) => !n.startsWith("[") && !n.endsWith(".tsx")),
    countDir("content/journeys", (n) => n.endsWith(".json")),
  ]);

  // Citations: one entry per official source listed in a guide's frontmatter.
  const hostCounts = new Map<string, number>();
  let citations = 0;
  for (const guide of guides) {
    for (const citation of guide.citations ?? []) {
      citations += 1;
      try {
        const host = new URL(citation.url).hostname.replace(/^www\./, "");
        hostCounts.set(host, (hostCounts.get(host) ?? 0) + 1);
      } catch {
        /* a malformed citation URL should not break the build */
      }
    }
  }
  const govCitations = [...hostCounts.entries()]
    .filter(([host]) => host.endsWith(".gov.sg"))
    .reduce((sum, [, count]) => sum + count, 0);

  const banded = neighbourhoods.filter((n) => n.rentBand?.oneBedFrom);
  const oneBedFloors = banded.map((n) => n.rentBand!.oneBedFrom!);
  const familyFloors = neighbourhoods
    .filter((n) => n.rentBand?.familyFrom)
    .map((n) => n.rentBand!.familyFrom!);

  // A count of areas in reach at a budget, rather than a regional median.
  // Regional medians read as precision the source data does not have: the
  // bands are editorial round numbers (20 distinct values across 113 areas),
  // and within-region spread swamps between-region spread badly enough to
  // mislead — 16 of 52 central areas start at or below the island median, so
  // "Central S$2,600" would wrongly rule central out for someone on S$2,300.
  const oneBedLadder: BudgetRung[] = ONE_BED_RUNGS.map((budget) => {
    const inReach = banded.filter((n) => n.rentBand!.oneBedFrom! <= budget);
    return {
      budget,
      areas: inReach.length,
      regions: new Set(inReach.map((n) => n.region)).size,
    };
  });

  const byPillar = new Map<string, number>();
  for (const guide of guides) {
    byPillar.set(guide.pillar, (byPillar.get(guide.pillar) ?? 0) + 1);
  }

  return {
    guides: guides.length,
    neighbourhoods: neighbourhoods.length,
    schools: schools.length,
    tools,
    journeys,
    citations,
    citationHosts: hostCounts.size,
    govShare: citations ? Math.round((govCitations / citations) * 100) : 0,
    topSources: [...hostCounts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([host, count]) => ({ host, count })),
    oneBedMin: Math.min(...oneBedFloors),
    oneBedMedian: median(oneBedFloors),
    oneBedMax: Math.max(...oneBedFloors),
    familyMedian: median(familyFloors),
    oneBedLadder,
    pillarWeights: pillars.map((p) => ({
      slug: p.slug,
      href: p.href,
      label: PILLAR_LABELS[p.slug] ?? p.label,
      tagline: p.tagline,
      guides: byPillar.get(p.slug) ?? 0,
    })),
    arriving: guides.filter((g) => g.journey === "arriving" || g.journey === "both").length,
    living: guides.filter((g) => g.journey === "living" || g.journey === "both").length,
  };
}

/** Counted off the filesystem, so adding a tool or a playbook updates the page. */
async function countDir(rel: string, filter: (name: string) => boolean) {
  try {
    const entries = await readdir(path.join(process.cwd(), rel), {
      withFileTypes: true,
    });
    return entries.filter((e) => filter(e.name)).length;
  } catch {
    return 0;
  }
}

export function sgd(value: number): string {
  return `S$${value.toLocaleString("en-SG")}`;
}
