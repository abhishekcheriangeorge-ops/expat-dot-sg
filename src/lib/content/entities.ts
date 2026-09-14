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

  return items.map((item, index) => {
    const result = schema.safeParse(item);
    if (!result.success) {
      throw new Error(
        `Invalid entity in content/entities/${parsed} (index ${index}): ${result.error.message}`,
      );
    }
    return result.data;
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
