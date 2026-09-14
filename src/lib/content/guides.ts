import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import type { ReactElement } from "react";
import {
  GuideFrontmatterSchema,
  type GuideFrontmatter,
  type Pillar,
} from "./schemas";

const GUIDES_DIR = path.join(process.cwd(), "content", "guides");

export type GuideMeta = GuideFrontmatter & {
  readingTimeMinutes: number;
};

export type GuideDocument = {
  meta: GuideMeta;
  /** Compiled MDX content for RSC rendering */
  content: ReactElement;
};

function estimateReadingTime(source: string): number {
  const words = source.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

async function listGuideFiles(): Promise<string[]> {
  try {
    const entries = await fs.readdir(GUIDES_DIR, { withFileTypes: true });
    return entries
      .filter((e) => e.isFile() && /\.mdx?$/.test(e.name))
      .map((e) => path.join(GUIDES_DIR, e.name));
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
}

async function parseGuideFile(filePath: string): Promise<{
  meta: GuideMeta;
  body: string;
}> {
  const raw = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(raw);
  const meta = GuideFrontmatterSchema.parse({
    ...data,
    slug:
      data.slug ??
      path.basename(filePath).replace(/\.mdx?$/, ""),
  });

  return {
    meta: {
      ...meta,
      readingTimeMinutes: estimateReadingTime(content),
    },
    body: content,
  };
}

/** All published guide frontmatter, newest review date first */
export async function getAllGuides(options?: {
  includeDrafts?: boolean;
  pillar?: Pillar;
}): Promise<GuideMeta[]> {
  const files = await listGuideFiles();
  const guides = await Promise.all(files.map(parseGuideFile));

  return guides
    .map((g) => g.meta)
    .filter((g) => options?.includeDrafts || !g.draft)
    .filter((g) => !options?.pillar || g.pillar === options.pillar)
    .sort((a, b) => b.lastReviewed.localeCompare(a.lastReviewed));
}

export async function getGuideBySlug(
  slug: string,
  options?: { includeDrafts?: boolean },
): Promise<GuideDocument | null> {
  const files = await listGuideFiles();

  for (const file of files) {
    const { meta, body } = await parseGuideFile(file);
    if (meta.slug !== slug) continue;
    if (meta.draft && !options?.includeDrafts) return null;

    const { content } = await compileMDX({
      source: body,
      options: { parseFrontmatter: false },
    });

    return { meta, content };
  }

  return null;
}

export async function getGuideSlugs(options?: {
  includeDrafts?: boolean;
}): Promise<string[]> {
  const guides = await getAllGuides(options);
  return guides.map((g) => g.slug);
}
