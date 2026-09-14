import { z } from "zod";

/** Seven life pillars — every guide and most entities map to one */
export const PillarSchema = z.enum([
  "move",
  "home",
  "money",
  "family",
  "life",
  "belong",
  "next",
]);
export type Pillar = z.infer<typeof PillarSchema>;

export const JourneyModeSchema = z.enum(["arriving", "living", "both"]);
export type JourneyMode = z.infer<typeof JourneyModeSchema>;

export const SegmentSchema = z.enum([
  "singles",
  "couples",
  "families",
  "lgbtq",
  "pets",
  "entrepreneurs",
  "asean",
  "western",
]);
export type Segment = z.infer<typeof SegmentSchema>;

/** MDX guide frontmatter */
export const GuideSponsorSlotSchema = z.object({
  enabled: z.boolean().default(false),
  disclosure: z.string().optional(),
  category: z.string().optional(),
});
export type GuideSponsorSlot = z.infer<typeof GuideSponsorSlotSchema>;

export const GuideFrontmatterSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  slug: z.string().min(1).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  pillar: PillarSchema,
  journey: JourneyModeSchema.default("both"),
  segments: z.array(SegmentSchema).default([]),
  lastReviewed: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  citations: z
    .array(
      z.object({
        label: z.string(),
        url: z.string().url(),
      }),
    )
    .default([]),
  relatedEntities: z.array(z.string()).default([]),
  relatedGuides: z.array(z.string()).default([]),
  sponsorSlot: GuideSponsorSlotSchema.optional(),
  draft: z.boolean().default(false),
  ogImage: z.string().optional(),
});
export type GuideFrontmatter = z.infer<typeof GuideFrontmatterSchema>;

export const NeighbourhoodRegionSchema = z.enum([
  "central",
  "east",
  "west",
  "north",
  "northeast",
  "sentosa",
]);
export type NeighbourhoodRegion = z.infer<typeof NeighbourhoodRegionSchema>;

export const NeighbourhoodSchema = z.object({
  type: z.literal("neighbourhood"),
  slug: z.string().min(1),
  name: z.string().min(1),
  summary: z.string().min(1),
  body: z.string().min(1).optional(),
  region: NeighbourhoodRegionSchema,
  vibe: z.array(z.string()).default([]),
  bestFor: z.array(z.string()).default([]),
  watchOuts: z.array(z.string()).default([]),
  housingMix: z.string().optional(),
  commuteNotes: z.string().optional(),
  rentBand: z
    .object({
      currency: z.literal("SGD").default("SGD"),
      oneBedFrom: z.number().optional(),
      oneBedTo: z.number().optional(),
      familyFrom: z.number().optional(),
      familyTo: z.number().optional(),
    })
    .optional(),
  mrt: z.array(z.string()).default([]),
  schoolsNearby: z.array(z.string()).default([]),
  image: z.string().optional(),
  /** Phase 5 monetization — featured / paid placement flag */
  featured: z.boolean().default(false),
});
export type Neighbourhood = z.infer<typeof NeighbourhoodSchema>;

export const SchoolSchema = z.object({
  type: z.literal("school"),
  slug: z.string().min(1),
  name: z.string().min(1),
  summary: z.string().min(1),
  body: z.string().min(1).optional(),
  curriculum: z.array(z.string()).min(1),
  sector: z.enum(["international", "local", "special"]).default("international"),
  ages: z.string().optional(),
  neighbourhood: z.string().optional(),
  campus: z.string().optional(),
  languages: z.array(z.string()).default([]),
  feesBand: z.string().optional(),
  waitlistNotes: z.string().optional(),
  website: z.string().url().optional(),
  /** Phase 5 monetization — featured / paid placement flag */
  featured: z.boolean().default(false),
  sponsored: z.boolean().default(false),
});
export type School = z.infer<typeof SchoolSchema>;

export const ClubCategorySchema = z.enum([
  "membership",
  "association",
  "chamber",
  "hash",
  "faith",
  "nationality",
  "lgbtq",
  "other",
]);
export type ClubCategory = z.infer<typeof ClubCategorySchema>;

export const ClubSchema = z.object({
  type: z.literal("club"),
  slug: z.string().min(1),
  name: z.string().min(1),
  summary: z.string().min(1),
  body: z.string().min(1).optional(),
  category: ClubCategorySchema,
  focus: z.array(z.string()).default([]),
  membershipNotes: z.string().optional(),
  website: z.string().url().optional(),
  neighbourhood: z.string().optional(),
  /** Phase 5 monetization — featured / paid placement flag */
  featured: z.boolean().default(false),
  sponsored: z.boolean().default(false),
});
export type Club = z.infer<typeof ClubSchema>;

export const ServiceCategorySchema = z.enum([
  "movers",
  "clinics",
  "agents",
  "fdw",
  "tutors",
  "insurance",
  "legal",
  "other",
]);
export type ServiceCategory = z.infer<typeof ServiceCategorySchema>;

export const ServiceListingSchema = z.object({
  type: z.literal("service"),
  slug: z.string().min(1),
  name: z.string().min(1),
  summary: z.string().min(1),
  body: z.string().min(1).optional(),
  category: ServiceCategorySchema,
  areasServed: z.array(z.string()).default([]),
  website: z.string().url().optional(),
  phone: z.string().optional(),
  /** Phase 5 monetization — featured / paid placement flag */
  featured: z.boolean().default(false),
  sponsored: z.boolean().default(false),
});
export type ServiceListing = z.infer<typeof ServiceListingSchema>;

export const EntitySchema = z.discriminatedUnion("type", [
  NeighbourhoodSchema,
  SchoolSchema,
  ClubSchema,
  ServiceListingSchema,
]);
export type Entity = z.infer<typeof EntitySchema>;

export const EntityCollectionSchema = z.enum([
  "neighbourhoods",
  "schools",
  "clubs",
  "services",
]);
export type EntityCollection = z.infer<typeof EntityCollectionSchema>;

/** Human labels for filters / UI */
export const NEIGHBOURHOOD_REGION_LABELS: Record<NeighbourhoodRegion, string> =
  {
    central: "Central",
    east: "East",
    west: "West",
    north: "North",
    northeast: "North-East",
    sentosa: "Sentosa",
  };

export const CLUB_CATEGORY_LABELS: Record<ClubCategory, string> = {
  membership: "Membership clubs",
  association: "Associations",
  chamber: "Chambers",
  hash: "Hash houses",
  faith: "Faith communities",
  nationality: "Nationality groups",
  lgbtq: "LGBTQ+",
  other: "Other",
};

export const SERVICE_CATEGORY_LABELS: Record<ServiceCategory, string> = {
  movers: "Movers & relocation",
  clinics: "Clinics & health",
  agents: "Property agents",
  fdw: "Helper agencies",
  tutors: "Tutors & enrichment",
  insurance: "Insurance",
  legal: "Legal & immigration",
  other: "Other services",
};

/** Arriving checklist phases (7 / 30 / 90 day) */
export const ChecklistPhaseSchema = z.enum(["day-7", "day-30", "day-90"]);
export type ChecklistPhase = z.infer<typeof ChecklistPhaseSchema>;

export const ChecklistItemSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  detail: z.string().min(1),
  pillar: PillarSchema.optional(),
  optional: z.boolean().default(false),
  href: z.string().optional(),
});
export type ChecklistItem = z.infer<typeof ChecklistItemSchema>;

export const JourneyChecklistSchema = z.object({
  type: z.literal("checklist"),
  slug: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().min(1),
  phase: ChecklistPhaseSchema,
  journey: JourneyModeSchema.default("arriving"),
  lastReviewed: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  items: z.array(ChecklistItemSchema).min(1),
});
export type JourneyChecklist = z.infer<typeof JourneyChecklistSchema>;

export const LeavingSectionSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  body: z.string().min(1),
  bullets: z.array(z.string()).default([]),
  href: z.string().optional(),
});
export type LeavingSection = z.infer<typeof LeavingSectionSchema>;

export const LeavingPlaybookSchema = z.object({
  type: z.literal("playbook"),
  slug: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().min(1),
  lastReviewed: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  sections: z.array(LeavingSectionSchema).min(1),
});
export type LeavingPlaybook = z.infer<typeof LeavingPlaybookSchema>;

export const CalendarAudienceSchema = z.enum([
  "everyone",
  "kids",
  "families",
  "culture",
  "sports",
]);
export type CalendarAudience = z.infer<typeof CalendarAudienceSchema>;

export const CalendarEventSchema = z.object({
  type: z.literal("event"),
  slug: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().min(1),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  endDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .optional(),
  recurring: z.boolean().default(false),
  venue: z.string().optional(),
  neighbourhood: z.string().optional(),
  audience: z.array(CalendarAudienceSchema).default(["everyone"]),
  href: z.string().url().optional(),
  featured: z.boolean().default(false),
});
export type CalendarEvent = z.infer<typeof CalendarEventSchema>;
