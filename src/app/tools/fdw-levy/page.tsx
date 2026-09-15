import type { Metadata } from "next";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd, RelatedHubs } from "@/components/seo";
import { FdwLevyCalculator } from "@/components/tools";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import { webApplicationJsonLd } from "@/lib/seo-howto";

const title = "FDW levy sketch";
const description =
  "Sketch Singapore Foreign Domestic Worker monthly levy across concessionary, full, and subsequent-helper bands — orientation before you budget or transfer employers.";
const path = "/tools/fdw-levy";

const RELATED = [
  { href: "/tools", label: "All tools" },
  { href: "/journeys/hospital-cash-deposit", label: "Hospital cash deposit" },
  { href: "/tools/setup-cash", label: "First-month cash" },
  { href: "/home", label: "Home pillar" },
  { href: "/family", label: "Family pillar" },
  { href: "/living", label: "Living hub" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default function FdwLevyToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "FDW levy", path },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          webApplicationJsonLd({ name: title, description, path }),
          collectionPageJsonLd({
            name: `${title} — related`,
            description,
            path,
            items: RELATED.map((item) => ({
              name: item.label,
              path: item.href,
            })),
          }),
        ]}
      />
      <div className="border-b border-fog-soft">
        <div className="mx-auto max-w-[var(--max-page)] px-5 pt-10 sm:px-8">
          <Breadcrumbs items={crumbs} />
        </div>
      </div>
      <JourneyHero
        eyebrow="Tools · Home"
        title="Helper levy, months multiplied."
        summary="Concessionary, full, or subsequent-helper bands — sketch the year cost, then confirm eligibility on the live MOM table."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <FdwLevyCalculator />
        <div className="mt-12">
          <RelatedHubs hubs={RELATED} />
        </div>
      </div>
    </>
  );
}
