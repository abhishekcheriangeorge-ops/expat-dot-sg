import type { Metadata } from "next";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { CrossLinks } from "@/components/seo/CrossLinks";
import { CarCoeExitCalculator } from "@/components/tools";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import { webApplicationJsonLd } from "@/lib/seo-exit";

const title = "Car / COE exit sketch";
const description =
  "Sketch sale, export/scrap, or transfer cash for a Singapore car — proceeds, PARF/COE rebate hope, loan, fees, and prepaid parking burn.";
const path = "/tools/car-coe-exit";

const RELATED = [
  { href: "/tools", label: "All tools" },
  { href: "/journeys/condo-mcst-exit", label: "Condo MCST exit" },
  { href: "/journeys/leaving", label: "Leaving playbook" },
  { href: "/journeys/utility-exit-handover", label: "Utility exit handover" },
  { href: "/tools/storage-months", label: "Storage months sketch" },
  { href: "/move", label: "Move pillar" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default function CarCoeExitToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "Car / COE exit", path },
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
        eyebrow="Tools · Mobility"
        title="Car exit cash, sketched."
        summary="Compare local sale, export/scrap, and transfer floats before you cancel season parking or book the tow."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <CarCoeExitCalculator />
        <div className="mt-12">
          <CrossLinks links={RELATED} />
        </div>
      </div>
    </>
  );
}
