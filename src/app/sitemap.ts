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
  { path: "/journeys/pre-arrival", changeFrequency: "monthly", priority: 0.75 },
  {
    path: "/journeys/singpass-myinfo-exit",
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    path: "/journeys/mover-lift-booking",
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    path: "/journeys/condo-visitor-qr-exit",
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    path: "/journeys/condo-ev-charger-clear",
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    path: "/journeys/utility-meter-photo-handoff",
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    path: "/journeys/condo-visitor-parking-clear",
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    path: "/journeys/condo-access-card-deposit",
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    path: "/journeys/cpf-nomination-exit",
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    path: "/journeys/pharmacy-chronic-script-exit",
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    path: "/journeys/nlb-library-exit",
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    path: "/journeys/enrichment-class-exit",
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    path: "/journeys/mobile-postpaid-exit",
    changeFrequency: "monthly",
    priority: 0.75,
  },
  { path: "/journeys/leaving", changeFrequency: "monthly", priority: 0.75 },
  { path: "/calendar", changeFrequency: "weekly", priority: 0.7 },
  { path: "/tools", changeFrequency: "monthly", priority: 0.7 },
  { path: "/tools/setup-cash", changeFrequency: "monthly", priority: 0.65 },
  { path: "/tools/lease-duty", changeFrequency: "monthly", priority: 0.65 },
  { path: "/tools/lease-notice", changeFrequency: "monthly", priority: 0.65 },
  { path: "/tools/cost-of-living", changeFrequency: "monthly", priority: 0.65 },
  { path: "/tools/ep-threshold", changeFrequency: "monthly", priority: 0.65 },
  {
    path: "/tools/school-deposit-clawback",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/tools/foreign-licence-clock",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/tools/school-device-bond",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/tools/school-cca-kit-bond",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/tools/school-exam-ib-deposit",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/tools/helper-levy-final-month",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/tools/bank-statement-archive",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/tools/school-bus-last-week-float",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/tools/pharmacy-last-refill-float",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/tools/library-lost-item-float",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/tools/enrichment-term-notice-float",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/tools/mobile-contract-etf-float",
    changeFrequency: "monthly",
    priority: 0.65,
  },
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
  ] = await Promise.all([
    getAllGuides(),
    getNeighbourhoods(),
    getSchools(),
    getClubs(),
    getServices(),
    getAllSponsoredPosts(),
    getChecklists(),
  ]);

  const serviceCategories = ServiceCategorySchema.options;

  const entries: MetadataRoute.Sitemap = [
    ...STATIC_PATHS.map((item) => ({
      url: absoluteUrl(item.path),
      lastModified: now,
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
    ...neighbourhoods.map((n) => ({
      url: absoluteUrl(`/neighbourhoods/${n.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...schools.map((s) => ({
      url: absoluteUrl(`/schools/${s.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...clubs.map((c) => ({
      url: absoluteUrl(`/clubs/${c.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
    ...serviceCategories.map((category) => ({
      url: absoluteUrl(`/directory/${category}`),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.65,
    })),
    ...services.map((s) => ({
      url: absoluteUrl(`/directory/${s.category}/${s.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...sponsored.map((post) => ({
      url: absoluteUrl(`/sponsored/${post.slug}`),
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.4,
    })),
    ...checklists.map((c) => ({
      url: absoluteUrl(`/journeys/arriving/${c.phase}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return entries;
}
