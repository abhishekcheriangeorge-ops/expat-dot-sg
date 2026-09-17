import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { cache, type ReactElement } from "react";
import { guideMdxComponents } from "@/components/guides/mdx-components";
import { mdxCompileOptions } from "./mdx";
import { isCloneSlug } from "./clones";
import {
  GuideFrontmatterSchema,
  type GuideFrontmatter,
  type Pillar,
} from "./schemas";
import { extractToc, type TocItem } from "./toc";

const GUIDES_DIR = path.join(process.cwd(), "content", "guides");

export type GuideMeta = GuideFrontmatter & {
  readingTimeMinutes: number;
};

export type GuideDocument = {
  meta: GuideMeta;
  toc: TocItem[];
  /** Compiled MDX content for RSC rendering */
  content: ReactElement;
};

function estimateReadingTime(source: string): number {
  const words = source.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

async function listGuideFiles(dir = GUIDES_DIR): Promise<string[]> {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files: string[] = [];

    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        files.push(...(await listGuideFiles(full)));
      } else if (entry.isFile() && /\.mdx?$/.test(entry.name)) {
        const slug = entry.name.replace(/\.mdx?$/, "");
        if (isCloneSlug(slug)) continue;
        files.push(full);
      }
    }

    return files;
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
}

async function parseGuideFile(filePath: string): Promise<{
  meta: GuideMeta;
  body: string;
  toc: TocItem[];
}> {
  const raw = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(raw);
  const meta = GuideFrontmatterSchema.parse({
    ...data,
    slug: data.slug ?? path.basename(filePath).replace(/\.mdx?$/, ""),
  });

  return {
    meta: {
      ...meta,
      readingTimeMinutes: estimateReadingTime(content),
    },
    body: content,
    toc: extractToc(content),
  };
}

const loadParsedGuides = cache(async () => {
  const files = await listGuideFiles();
  return Promise.all(files.map(parseGuideFile));
});

/** All published guide frontmatter, newest review date first */
export async function getAllGuides(options?: {
  includeDrafts?: boolean;
  pillar?: Pillar;
  journey?: GuideFrontmatter["journey"];
}): Promise<GuideMeta[]> {
  const guides = await loadParsedGuides();

  return guides
    .map((g) => g.meta)
    .filter((g) => options?.includeDrafts || !g.draft)
    .filter((g) => !options?.pillar || g.pillar === options.pillar)
    .filter((g) => {
      if (!options?.journey) return true;
      return g.journey === options.journey || g.journey === "both";
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

export async function getGuideMetaBySlug(
  slug: string,
  options?: { includeDrafts?: boolean },
): Promise<GuideMeta | null> {
  const guides = await loadParsedGuides();
  const hit = guides.find((g) => g.meta.slug === slug);
  if (!hit) return null;
  if (hit.meta.draft && !options?.includeDrafts) return null;
  return hit.meta;
}

export async function getGuideBySlug(
  slug: string,
  options?: { includeDrafts?: boolean },
): Promise<GuideDocument | null> {
  const guides = await loadParsedGuides();
  const hit = guides.find((g) => g.meta.slug === slug);
  if (!hit) return null;
  if (hit.meta.draft && !options?.includeDrafts) return null;

  const { content } = await compileMDX({
    source: hit.body,
    components: guideMdxComponents,
    options: mdxCompileOptions,
  });

  return { meta: hit.meta, toc: hit.toc, content };
}

export async function getGuideSlugs(options?: {
  includeDrafts?: boolean;
}): Promise<string[]> {
  const guides = await getAllGuides(options);
  return guides.map((g) => g.slug);
}

/** Resolve guide metas by slug (skips unknown / draft-missing entries). */
export async function resolveGuidesBySlug(
  slugs: string[],
): Promise<GuideMeta[]> {
  if (!slugs.length) return [];
  const all = await getAllGuides();
  const bySlug = new Map(all.map((g) => [g.slug, g]));
  const out: GuideMeta[] = [];
  const seen = new Set<string>();
  for (const slug of slugs) {
    const hit = bySlug.get(slug);
    if (!hit || seen.has(hit.slug)) continue;
    out.push(hit);
    seen.add(hit.slug);
  }
  return out;
}

/**
 * Related guides: explicit frontmatter first, then reciprocal fill
 * (same pillar, then cross-pillar), then same-pillar chronological fill.
 * Shell reciprocity closes one-way frontmatter edges without mass MDX edits.
 */
export async function getRelatedGuides(
  guide: GuideMeta,
  limit = 4,
): Promise<GuideMeta[]> {
  const all = await getAllGuides();
  const bySlug = new Map(all.map((g) => [g.slug, g]));
  const picked: GuideMeta[] = [];
  const seen = new Set<string>([guide.slug]);

  for (const slug of guide.relatedGuides) {
    const hit = bySlug.get(slug);
    if (hit && !seen.has(hit.slug)) {
      picked.push(hit);
      seen.add(hit.slug);
    }
    if (picked.length >= limit) return picked;
  }

  // Prefer same-pillar guides that list this slug back
  for (const candidate of all) {
    if (seen.has(candidate.slug)) continue;
    if (candidate.pillar !== guide.pillar) continue;
    if (!candidate.relatedGuides.includes(guide.slug)) continue;
    picked.push(candidate);
    seen.add(candidate.slug);
    if (picked.length >= limit) return picked;
  }

  // Then cross-pillar reverse links (tick-3 depth without MDX reciprocity edits)
  for (const candidate of all) {
    if (seen.has(candidate.slug)) continue;
    if (!candidate.relatedGuides.includes(guide.slug)) continue;
    picked.push(candidate);
    seen.add(candidate.slug);
    if (picked.length >= limit) return picked;
  }

  for (const candidate of all) {
    if (seen.has(candidate.slug)) continue;
    if (candidate.pillar !== guide.pillar) continue;
    picked.push(candidate);
    seen.add(candidate.slug);
    if (picked.length >= limit) break;
  }

  return picked;
}

/** Guides whose relatedEntities frontmatter includes the given entity slug. */
export async function getGuidesLinkingToEntity(
  entitySlug: string,
  limit = 6,
): Promise<GuideMeta[]> {
  const all = await getAllGuides();
  const hits = all.filter((g) => g.relatedEntities.includes(entitySlug));
  return hits.slice(0, limit);
}

export const PILLAR_LABELS: Record<Pillar, string> = {
  move: "Move",
  home: "Home",
  money: "Money",
  family: "Family",
  life: "Life",
  belong: "Belong",
  next: "Next",
};

export const JOURNEY_LABELS: Record<GuideFrontmatter["journey"], string> = {
  arriving: "Arriving",
  living: "Living",
  both: "Arriving & Living",
};
