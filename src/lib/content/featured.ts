import {
  getClubs,
  getNeighbourhoods,
  getSchools,
  getServices,
  type Club,
  type Entity,
  type EntityCollection,
  type Neighbourhood,
  type School,
  type ServiceListing,
} from "@/lib/content";

/**
 * Featured listing helpers — READ entity `featured` / `sponsored` flags only.
 * Do not mutate JSON here; sample placements flip flags in a few entity files.
 */

export function isFeaturedEntity(entity: Entity): boolean {
  return Boolean("featured" in entity && entity.featured);
}

export function isSponsoredEntity(entity: Entity): boolean {
  return Boolean("sponsored" in entity && entity.sponsored);
}

export function sortFeaturedFirst<T extends { featured?: boolean; name: string }>(
  items: T[],
): T[] {
  return [...items].sort((a, b) => {
    const af = a.featured ? 1 : 0;
    const bf = b.featured ? 1 : 0;
    if (af !== bf) return bf - af;
    return a.name.localeCompare(b.name);
  });
}

export async function getFeaturedNeighbourhoods(): Promise<Neighbourhood[]> {
  const all = await getNeighbourhoods();
  return all.filter(isFeaturedEntity);
}

export async function getFeaturedSchools(): Promise<School[]> {
  const all = await getSchools();
  return all.filter(isFeaturedEntity);
}

export async function getFeaturedClubs(): Promise<Club[]> {
  const all = await getClubs();
  return all.filter(isFeaturedEntity);
}

export async function getFeaturedServices(): Promise<ServiceListing[]> {
  const all = await getServices();
  return all.filter(isFeaturedEntity);
}

export async function getFeaturedEntities(
  collection: EntityCollection,
): Promise<Entity[]> {
  switch (collection) {
    case "neighbourhoods":
      return getFeaturedNeighbourhoods();
    case "schools":
      return getFeaturedSchools();
    case "clubs":
      return getFeaturedClubs();
    case "services":
      return getFeaturedServices();
    default: {
      const _exhaustive: never = collection;
      return _exhaustive;
    }
  }
}

/** All currently featured placements across directories (for advertise media kit). */
export async function getAllFeaturedListings(): Promise<
  {
    collection: EntityCollection;
    entity: Entity;
  }[]
> {
  const [neighbourhoods, schools, clubs, services] = await Promise.all([
    getFeaturedNeighbourhoods(),
    getFeaturedSchools(),
    getFeaturedClubs(),
    getFeaturedServices(),
  ]);

  return [
    ...neighbourhoods.map((entity) => ({
      collection: "neighbourhoods" as const,
      entity,
    })),
    ...schools.map((entity) => ({
      collection: "schools" as const,
      entity,
    })),
    ...clubs.map((entity) => ({ collection: "clubs" as const, entity })),
    ...services.map((entity) => ({
      collection: "services" as const,
      entity,
    })),
  ];
}
