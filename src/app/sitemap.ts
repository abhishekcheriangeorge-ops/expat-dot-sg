import { readdir } from "node:fs/promises";
import path from "node:path";
import type { MetadataRoute } from "next";
import {
  getAllGuides,
  getAllSponsoredPosts,
  getChecklists,
  getClubs,
  getNeighbourhoods,
  getSchools,
  getServices,
} from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";
import { pillars } from "@/lib/site";
import { ServiceCategorySchema } from "@/lib/content/schemas";
import { CORNERSTONE_SLUGS, isCloneSlug } from "@/lib/content/clones";

const STATIC_PATHS: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/arriving", changeFrequency: "weekly", priority: 0.9 },
  { path: "/living", changeFrequency: "weekly", priority: 0.9 },
  { path: "/guides", changeFrequency: "weekly", priority: 0.9 },
  { path: "/neighbourhoods", changeFrequency: "weekly", priority: 0.85 },
  { path: "/schools", changeFrequency: "weekly", priority: 0.85 },
  { path: "/clubs", changeFrequency: "weekly", priority: 0.85 },
  { path: "/directory", changeFrequency: "weekly", priority: 0.85 },
  { path: "/journeys", changeFrequency: "monthly", priority: 0.8 },
  { path: "/calendar", changeFrequency: "weekly", priority: 0.7 },
  { path: "/tools", changeFrequency: "monthly", priority: 0.7 },
  { path: "/sponsored", changeFrequency: "weekly", priority: 0.55 },
  { path: "/advertise", changeFrequency: "monthly", priority: 0.6 },
  { path: "/about", changeFrequency: "yearly", priority: 0.5 },
  { path: "/editorial-policy", changeFrequency: "yearly", priority: 0.5 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];



async function listAppChildPaths(segment: string): Promise<string[]> {
  const dir = path.join(process.cwd(), "src/app", segment);
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    return entries
      .filter(
        (entry) =>
          entry.isDirectory() &&
          !entry.name.startsWith("[") &&
          !entry.name.startsWith("_"),
      )
      .map((entry) => `/${segment}/${entry.name}`);
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const [
    guides,
    neighbourhoods,
    schools,
    clubs,
    services,
    sponsored,
    checklists,
    toolPaths,
    journeyPaths,
  ] = await Promise.all([
    getAllGuides(),
    getNeighbourhoods(),
    getSchools(),
    getClubs(),
    getServices(),
    getAllSponsoredPosts(),
    getChecklists(),
    listAppChildPaths("tools"),
    listAppChildPaths("journeys"),
  ]);

  const serviceCategories = ServiceCategorySchema.options;
  const seen = new Set<string>();
  const entries: MetadataRoute.Sitemap = [];

  function add(
    pathName: string,
    options: {
      lastModified?: Date;
      changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
      priority: number;
    },
  ) {
    const url = absoluteUrl(pathName);
    if (seen.has(url)) return;
    seen.add(url);
    entries.push({
      url,
      lastModified: options.lastModified ?? now,
      changeFrequency: options.changeFrequency,
      priority: options.priority,
    });
  }

  for (const item of STATIC_PATHS) {
    add(item.path, {
      changeFrequency: item.changeFrequency,
      priority: item.priority,
    });
  }

  for (const pillar of pillars) {
    add(pillar.href, { changeFrequency: "weekly", priority: 0.8 });
  }

  for (const href of toolPaths) {
    add(href, { changeFrequency: "monthly", priority: 0.65 });
  }

  for (const href of journeyPaths) {
    add(href, { changeFrequency: "monthly", priority: 0.75 });
  }

  for (const guide of guides) {
    // getAllGuides already excludes clones; isCloneSlug is a safety net.
    // lastModified comes from frontmatter so timestamps are stable across builds.
    add(`/guides/${guide.slug}`, {
      lastModified: new Date(guide.lastReviewed),
      changeFrequency: "monthly",
      priority: CORNERSTONE_SLUGS.has(guide.slug)
        ? 0.9
        : isCloneSlug(guide.slug)
          ? 0.35
          : 0.7,
    });
  }

  for (const n of neighbourhoods) {
    add(`/neighbourhoods/${n.slug}`, {
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const s of schools) {
    add(`/schools/${s.slug}`, { changeFrequency: "monthly", priority: 0.7 });
  }

  for (const c of clubs) {
    add(`/clubs/${c.slug}`, { changeFrequency: "monthly", priority: 0.65 });
  }

  for (const category of serviceCategories) {
    add(`/directory/${category}`, {
      changeFrequency: "weekly",
      priority: 0.65,
    });
  }

  for (const s of services) {
    add(`/directory/${s.category}/${s.slug}`, {
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  for (const post of sponsored) {
    add(`/sponsored/${post.slug}`, {
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly",
      priority: 0.4,
    });
  }

  for (const c of checklists) {
    add(`/journeys/arriving/${c.phase}`, {
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
