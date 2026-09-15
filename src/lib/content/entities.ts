import fs from "node:fs/promises";
import path from "node:path";
import {
  ClubSchema,
  EntityCollectionSchema,
  NeighbourhoodSchema,
  SchoolSchema,
  ServiceListingSchema,
  type Club,
  type Entity,
  type EntityCollection,
  type Neighbourhood,
  type School,
  type ServiceListing,
} from "./schemas";

const ENTITIES_DIR = path.join(process.cwd(), "content", "entities");

const collectionSchema = {
  neighbourhoods: NeighbourhoodSchema,
  schools: SchoolSchema,
  clubs: ClubSchema,
  services: ServiceListingSchema,
} as const;

async function readJsonFiles(dir: string): Promise<unknown[]> {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files = entries.filter(
      (e) => e.isFile() && e.name.endsWith(".json"),
    );

    return Promise.all(
      files.map(async (file) => {
        const raw = await fs.readFile(path.join(dir, file.name), "utf8");
        return JSON.parse(raw) as unknown;
      }),
    );
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
}

export async function getEntities(
  collection: EntityCollection,
): Promise<Entity[]> {
  const parsed = EntityCollectionSchema.parse(collection);
  const schema = collectionSchema[parsed];
  const dir = path.join(ENTITIES_DIR, parsed);
  const items = await readJsonFiles(dir);

  const entities = items.map((item, index) => {
    const result = schema.safeParse(item);
    if (!result.success) {
      throw new Error(
        `Invalid entity in content/entities/${parsed} (index ${index}): ${result.error.message}`,
      );
    }
    return result.data;
  });

  // Featured listings float to the top (Phase 5 monetization-ready)
  return entities.sort((a, b) => {
    const af = "featured" in a && a.featured ? 1 : 0;
    const bf = "featured" in b && b.featured ? 1 : 0;
    if (af !== bf) return bf - af;
    return a.name.localeCompare(b.name);
  });
}

export async function getEntityBySlug(
  collection: EntityCollection,
  slug: string,
): Promise<Entity | null> {
  const entities = await getEntities(collection);
  return entities.find((e) => e.slug === slug) ?? null;
}

export async function getNeighbourhoods(): Promise<Neighbourhood[]> {
  return (await getEntities("neighbourhoods")) as Neighbourhood[];
}

export async function getSchools(): Promise<School[]> {
  return (await getEntities("schools")) as School[];
}

export async function getClubs(): Promise<Club[]> {
  return (await getEntities("clubs")) as Club[];
}

export async function getServices(): Promise<ServiceListing[]> {
  return (await getEntities("services")) as ServiceListing[];
}

export type ResolvedRelatedEntity = {
  slug: string;
  name: string;
  href: string;
  collection: EntityCollection;
  kindLabel: string;
};

const COLLECTION_KIND_LABEL: Record<EntityCollection, string> = {
  neighbourhoods: "Neighbourhood",
  schools: "School",
  clubs: "Club",
  services: "Service",
};

function entityHref(entity: Entity): string {
  switch (entity.type) {
    case "neighbourhood":
      return `/neighbourhoods/${entity.slug}`;
    case "school":
      return `/schools/${entity.slug}`;
    case "club":
      return `/clubs/${entity.slug}`;
    case "service":
      return `/directory/${entity.category}/${entity.slug}`;
  }
}

/** Resolve relatedEntities frontmatter slugs across all entity collections. */
export async function resolveRelatedEntities(
  slugs: string[],
): Promise<ResolvedRelatedEntity[]> {
  if (!slugs.length) return [];

  const [neighbourhoods, schools, clubs, services] = await Promise.all([
    getNeighbourhoods(),
    getSchools(),
    getClubs(),
    getServices(),
  ]);

  const bySlug = new Map<string, Entity>();
  for (const entity of [
    ...neighbourhoods,
    ...schools,
    ...clubs,
    ...services,
  ]) {
    // First match wins if slugs ever collide across collections
    if (!bySlug.has(entity.slug)) bySlug.set(entity.slug, entity);
  }

  const out: ResolvedRelatedEntity[] = [];
  const seen = new Set<string>();
  for (const slug of slugs) {
    const entity = bySlug.get(slug);
    if (!entity || seen.has(entity.slug)) continue;
    const collection =
      entity.type === "neighbourhood"
        ? "neighbourhoods"
        : entity.type === "school"
          ? "schools"
          : entity.type === "club"
            ? "clubs"
            : "services";
    out.push({
      slug: entity.slug,
      name: entity.name,
      href: entityHref(entity),
      collection,
      kindLabel: COLLECTION_KIND_LABEL[collection],
    });
    seen.add(entity.slug);
  }
  return out;
}
