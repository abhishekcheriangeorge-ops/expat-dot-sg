import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import type { ReactElement } from "react";
import { guideMdxComponents } from "@/components/guides/mdx-components";
import {
  SponsorPlacementSchema,
  SponsoredPostFrontmatterSchema,
  type SponsorPlacement,
  type SponsoredPostFrontmatter,
} from "./schemas";
import { extractToc, type TocItem } from "./toc";

const SPONSORED_DIR = path.join(process.cwd(), "content", "sponsored");
const PLACEMENTS_PATH = path.join(SPONSORED_DIR, "placements.json");

export type SponsoredPostMeta = SponsoredPostFrontmatter & {
  readingTimeMinutes: number;
};

export type SponsoredPostDocument = {
  meta: SponsoredPostMeta;
  toc: TocItem[];
  content: ReactElement;
};

function estimateReadingTime(source: string): number {
  const words = source.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

async function listSponsoredFiles(): Promise<string[]> {
  try {
    const entries = await fs.readdir(SPONSORED_DIR, { withFileTypes: true });
    return entries
      .filter((e) => e.isFile() && /\.mdx?$/.test(e.name))
      .map((e) => path.join(SPONSORED_DIR, e.name));
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
}

async function parseSponsoredFile(filePath: string): Promise<{
  meta: SponsoredPostMeta;
  body: string;
  toc: TocItem[];
}> {
  const raw = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(raw);
  const meta = SponsoredPostFrontmatterSchema.parse({
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

export async function getAllSponsoredPosts(options?: {
  includeDrafts?: boolean;
}): Promise<SponsoredPostMeta[]> {
  const files = await listSponsoredFiles();
  const posts = await Promise.all(files.map(parseSponsoredFile));

  return posts
    .map((p) => p.meta)
    .filter((p) => options?.includeDrafts || !p.draft)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export async function getSponsoredPostBySlug(
  slug: string,
  options?: { includeDrafts?: boolean },
): Promise<SponsoredPostDocument | null> {
  const files = await listSponsoredFiles();

  for (const file of files) {
    const { meta, body, toc } = await parseSponsoredFile(file);
    if (meta.slug !== slug) continue;
    if (meta.draft && !options?.includeDrafts) return null;

    const { content } = await compileMDX({
      source: body,
      components: guideMdxComponents,
      options: { parseFrontmatter: false },
    });

    return { meta, toc, content };
  }

  return null;
}

export async function getSponsoredPostSlugs(options?: {
  includeDrafts?: boolean;
}): Promise<string[]> {
  const posts = await getAllSponsoredPosts(options);
  return posts.map((p) => p.slug);
}

export async function getSponsorPlacements(): Promise<SponsorPlacement[]> {
  try {
    const raw = await fs.readFile(PLACEMENTS_PATH, "utf8");
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.map((item, index) => {
      const result = SponsorPlacementSchema.safeParse(item);
      if (!result.success) {
        throw new Error(
          `Invalid placement in content/sponsored/placements.json (index ${index}): ${result.error.message}`,
        );
      }
      return result.data;
    });
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
}

export async function getActivePlacementByCategory(
  category: string,
): Promise<SponsorPlacement | null> {
  const placements = await getSponsorPlacements();
  return (
    placements.find(
      (p) => p.active && p.category.toLowerCase() === category.toLowerCase(),
    ) ?? null
  );
}
