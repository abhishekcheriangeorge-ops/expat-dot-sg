import { SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/seo";
import type {
  Club,
  Entity,
  EntityCollection,
  Neighbourhood,
  School,
  ServiceListing,
} from "@/lib/content/schemas";

/** Entity JSON-LD helpers — outside claimed seo*.ts through #252. */

function entityPath(entity: Entity): string {
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

export function neighbourhoodJsonLd(entity: Neighbourhood) {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: entity.name,
    description: entity.summary,
    url: absoluteUrl(entityPath(entity)),
    address: {
      "@type": "PostalAddress",
      addressCountry: "SG",
      addressLocality: "Singapore",
      addressRegion: entity.region,
    },
    containedInPlace: {
      "@type": "City",
      name: "Singapore",
    },
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
  };
}

export function schoolJsonLd(entity: School) {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: entity.name,
    description: entity.summary,
    url: entity.website ?? absoluteUrl(entityPath(entity)),
    sameAs: entity.website ? [entity.website] : undefined,
    address: {
      "@type": "PostalAddress",
      addressCountry: "SG",
      addressLocality: entity.campus ?? "Singapore",
    },
    areaServed: "Singapore",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
  };
}

export function clubJsonLd(entity: Club) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: entity.name,
    description: entity.summary,
    url: entity.website ?? absoluteUrl(entityPath(entity)),
    sameAs: entity.website ? [entity.website] : undefined,
    areaServed: "Singapore",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
  };
}

export function serviceListingJsonLd(entity: ServiceListing) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: entity.name,
    description: entity.summary,
    url: entity.website ?? absoluteUrl(entityPath(entity)),
    telephone: entity.phone,
    areaServed:
      entity.areasServed.length > 0 ? entity.areasServed : "Singapore",
    address: {
      "@type": "PostalAddress",
      addressCountry: "SG",
      addressLocality: "Singapore",
    },
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
  };
}

export function entityJsonLd(entity: Entity) {
  switch (entity.type) {
    case "neighbourhood":
      return neighbourhoodJsonLd(entity);
    case "school":
      return schoolJsonLd(entity);
    case "club":
      return clubJsonLd(entity);
    case "service":
      return serviceListingJsonLd(entity);
  }
}

const COLLECTION_LIST_NAME: Record<EntityCollection, string> = {
  neighbourhoods: "Singapore neighbourhoods for expats",
  schools: "Schools in Singapore",
  clubs: "Clubs and communities in Singapore",
  services: "Expat service directory",
};

const COLLECTION_PATH: Record<EntityCollection, string> = {
  neighbourhoods: "/neighbourhoods",
  schools: "/schools",
  clubs: "/clubs",
  services: "/directory",
};

export function entitiesItemListJsonLd(input: {
  collection: EntityCollection;
  entities: Array<{ name: string; slug: string; path?: string }>;
}) {
  const basePath = COLLECTION_PATH[input.collection];
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: COLLECTION_LIST_NAME[input.collection],
    url: absoluteUrl(basePath),
    numberOfItems: input.entities.length,
    itemListElement: input.entities.map((entity, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entity.name,
      url: absoluteUrl(entity.path ?? `${basePath}/${entity.slug}`),
    })),
  };
}
