import type { Metadata } from "next";
import {
  DirectoryHero,
  NeighbourhoodDirectory,
} from "@/components/directory";
import { JsonLd } from "@/components/seo";
import { getNeighbourhoods } from "@/lib/content";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Neighbourhoods",
  description:
    "Compare Singapore neighbourhoods for expat housing — rents, MRT, schools nearby, and who each area suits.",
  path: "/neighbourhoods",
});

export default async function NeighbourhoodsPage() {
  const neighbourhoods = await getNeighbourhoods();
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Home pillar", path: "/home" },
    { name: "Neighbourhoods", path: "/neighbourhoods" },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          collectionPageJsonLd({
            name: "Neighbourhoods",
            description:
              "Singapore neighbourhoods for expat housing shortlists.",
            path: "/neighbourhoods",
            items: neighbourhoods.slice(0, 24).map((n) => ({
              name: n.name,
              path: `/neighbourhoods/${n.slug}`,
            })),
          }),
        ]}
      />
      <DirectoryHero
        eyebrow="Home"
        title="Neighbourhoods"
        description="Where you live shapes school runs, weekends, and how quickly Singapore feels like yours. Shortlist by region, vibe, and rent — then dig into the detail pages."
        meta={`${neighbourhoods.length} areas · filter by region · paired with the Home pillar`}
        crumbs={crumbs}
      />
      <NeighbourhoodDirectory neighbourhoods={neighbourhoods} />
    </>
  );
}
