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
  draft: z.boolean().default(false),
  ogImage: z.string().optional(),
});
export type GuideFrontmatter = z.infer<typeof GuideFrontmatterSchema>;

export const NeighbourhoodSchema = z.object({
  type: z.literal("neighbourhood"),
  slug: z.string().min(1),
  name: z.string().min(1),
  summary: z.string().min(1),
  region: z.enum([
    "central",
    "east",
    "west",
    "north",
    "northeast",
    "sentosa",
  ]),
  vibe: z.array(z.string()).default([]),
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
  featured: z.boolean().default(false),
});
export type Neighbourhood = z.infer<typeof NeighbourhoodSchema>;

export const SchoolSchema = z.object({
  type: z.literal("school"),
  slug: z.string().min(1),
  name: z.string().min(1),
  summary: z.string().min(1),
  curriculum: z.array(z.string()).min(1),
  ages: z.string().optional(),
  neighbourhood: z.string().optional(),
  website: z.string().url().optional(),
  featured: z.boolean().default(false),
  sponsored: z.boolean().default(false),
});
export type School = z.infer<typeof SchoolSchema>;

export const ClubSchema = z.object({
  type: z.literal("club"),
  slug: z.string().min(1),
  name: z.string().min(1),
  summary: z.string().min(1),
  category: z.enum([
    "membership",
    "association",
    "chamber",
    "hash",
    "faith",
    "nationality",
    "lgbtq",
    "other",
  ]),
  website: z.string().url().optional(),
  neighbourhood: z.string().optional(),
  featured: z.boolean().default(false),
  sponsored: z.boolean().default(false),
});
export type Club = z.infer<typeof ClubSchema>;

export const ServiceListingSchema = z.object({
  type: z.literal("service"),
  slug: z.string().min(1),
  name: z.string().min(1),
  summary: z.string().min(1),
  category: z.enum([
    "movers",
    "clinics",
    "agents",
    "fdw",
    "tutors",
    "insurance",
    "legal",
    "other",
  ]),
  website: z.string().url().optional(),
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
