import type { Metadata } from "next";
import { DirectoryHero, SchoolDirectory } from "@/components/directory";
import { JsonLd } from "@/components/seo";
import { getSchools } from "@/lib/content";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Schools",
  description:
    "Singapore international schools directory plus key local options — filter by curriculum, sector, and campus.",
  path: "/schools",
});

export default async function SchoolsPage() {
  const schools = await getSchools();
  const international = schools.filter((s) => s.sector === "international").length;
  const local = schools.filter((s) => s.sector === "local").length;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Family", path: "/family" },
    { name: "Schools", path: "/schools" },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          collectionPageJsonLd({
            name: "Schools",
            description:
              "Singapore international and key local schools for expat families.",
            path: "/schools",
            items: schools.slice(0, 24).map((s) => ({
              name: s.name,
              path: `/schools/${s.slug}`,
            })),
          }),
        ]}
      />
      <DirectoryHero
        eyebrow="Family"
        title="Schools"
        description="Curriculum, campus geography, and waitlist realism — not glossy brochure copy. Start with sector and pathway, then open the schools that match your child’s year and your housing map."
        meta={`${schools.length} schools · ${international} international · ${local} key local · see Family pillar guides`}
        crumbs={crumbs}
      />
      <SchoolDirectory schools={schools} />
    </>
  );
}
