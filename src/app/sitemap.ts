import type { MetadataRoute } from "next";
import {
  contentDirLatestMtime,
  contentFileMtime,
  getAllGuides,
  getAllSponsoredPosts,
  getBetweenJobsPlaybook,
  getChecklists,
  getClubs,
  getLeavingPlaybook,
  getNeighbourhoods,
  getSchools,
  getServices,
} from "@/lib/content";
import { ServiceCategorySchema } from "@/lib/content/schemas";
import { absoluteUrl } from "@/lib/seo";
import { pillars } from "@/lib/site";

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
  { path: "/journeys/arriving", changeFrequency: "monthly", priority: 0.75 },
  { path: "/journeys/leaving", changeFrequency: "monthly", priority: 0.75 },
  { path: "/journeys/between-jobs", changeFrequency: "monthly", priority: 0.75 },
  { path: "/calendar", changeFrequency: "weekly", priority: 0.75 },
  { path: "/tools", changeFrequency: "monthly", priority: 0.7 },
  { path: "/tools/setup-cash", changeFrequency: "monthly", priority: 0.65 },
  { path: "/tools/lease-duty", changeFrequency: "monthly", priority: 0.65 },
  { path: "/tools/tax-residency", changeFrequency: "monthly", priority: 0.65 },
  { path: "/tools/cost-of-living", changeFrequency: "monthly", priority: 0.65 },
  { path: "/tools/ep-threshold", changeFrequency: "monthly", priority: 0.65 },
  { path: "/sponsored", changeFrequency: "weekly", priority: 0.55 },
  { path: "/advertise", changeFrequency: "monthly", priority: 0.6 },
  { path: "/about", changeFrequency: "yearly", priority: 0.5 },
  { path: "/editorial-policy", changeFrequency: "yearly", priority: 0.5 },
];

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
    leaving,
    betweenJobs,
    calendarMtime,
    neighbourhoodIndexMtime,
    schoolIndexMtime,
    clubIndexMtime,
    serviceIndexMtime,
  ] = await Promise.all([
    getAllGuides(),
    getNeighbourhoods(),
    getSchools(),
    getClubs(),
    getServices(),
    getAllSponsoredPosts(),
    getChecklists(),
    getLeavingPlaybook(),
    getBetweenJobsPlaybook(),
    contentDirLatestMtime("content", "calendar"),
    contentDirLatestMtime("content", "entities", "neighbourhoods"),
    contentDirLatestMtime("content", "entities", "schools"),
    contentDirLatestMtime("content", "entities", "clubs"),
    contentDirLatestMtime("content", "entities", "services"),
  ]);

  const serviceCategories = ServiceCategorySchema.options;

  const [
    neighbourhoodMtimes,
    schoolMtimes,
    clubMtimes,
    serviceMtimes,
    checklistMtimes,
  ] = await Promise.all([
    Promise.all(
      neighbourhoods.map((n) =>
        contentFileMtime(
          "content",
          "entities",
          "neighbourhoods",
          `${n.slug}.json`,
        ),
      ),
    ),
    Promise.all(
      schools.map((s) =>
        contentFileMtime("content", "entities", "schools", `${s.slug}.json`),
      ),
    ),
    Promise.all(
      clubs.map((c) =>
        contentFileMtime("content", "entities", "clubs", `${c.slug}.json`),
      ),
    ),
    Promise.all(
      services.map((s) =>
        contentFileMtime("content", "entities", "services", `${s.slug}.json`),
      ),
    ),
    Promise.all(
      checklists.map((c) =>
        contentFileMtime(
          "content",
          "journeys",
          "checklists",
          `${c.phase}.json`,
        ),
      ),
    ),
  ]);

  const staticLastMod = new Map<string, Date>([
    ["/calendar", calendarMtime],
    ["/neighbourhoods", neighbourhoodIndexMtime],
    ["/schools", schoolIndexMtime],
    ["/clubs", clubIndexMtime],
    ["/directory", serviceIndexMtime],
    ["/journeys/leaving", leaving ? new Date(leaving.lastReviewed) : now],
    [
      "/journeys/between-jobs",
      betweenJobs ? new Date(betweenJobs.lastReviewed) : now,
    ],
  ]);

  return [
    ...STATIC_PATHS.map((item) => ({
      url: absoluteUrl(item.path),
      lastModified: staticLastMod.get(item.path) ?? now,
      changeFrequency: item.changeFrequency,
      priority: item.priority,
    })),
    ...pillars.map((pillar) => ({
      url: absoluteUrl(pillar.href),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...guides.map((guide) => ({
      url: absoluteUrl(`/guides/${guide.slug}`),
      lastModified: new Date(guide.lastReviewed),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...neighbourhoods.map((n, i) => ({
      url: absoluteUrl(`/neighbourhoods/${n.slug}`),
      lastModified: neighbourhoodMtimes[i] ?? now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...schools.map((s, i) => ({
      url: absoluteUrl(`/schools/${s.slug}`),
      lastModified: schoolMtimes[i] ?? now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...clubs.map((c, i) => ({
      url: absoluteUrl(`/clubs/${c.slug}`),
      lastModified: clubMtimes[i] ?? now,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
    ...serviceCategories.map((category) => ({
      url: absoluteUrl(`/directory/${category}`),
      lastModified: serviceIndexMtime,
      changeFrequency: "weekly" as const,
      priority: 0.65,
    })),
    ...services.map((s, i) => ({
      url: absoluteUrl(`/directory/${s.category}/${s.slug}`),
      lastModified: serviceMtimes[i] ?? now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...sponsored.map((post) => ({
      url: absoluteUrl(`/sponsored/${post.slug}`),
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.4,
    })),
    ...checklists.map((c, i) => ({
      url: absoluteUrl(`/journeys/arriving/${c.phase}`),
      lastModified: checklistMtimes[i] ?? new Date(c.lastReviewed),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
