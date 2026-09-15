import type { Metadata } from "next";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { HubStrip } from "@/components/seo/HubStrip";
import { ForeignLicenceClockCalculator } from "@/components/tools";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import { webApplicationJsonLd } from "@/lib/seo-movers";

const title = "Foreign licence conversion clock";
const description =
  "Sketch common Singapore foreign-driving-licence windows against arrival or pass-issue dates — orientation only, not SPF advice.";
const path = "/tools/foreign-licence-clock";

const RELATED = [
  { href: "/tools", label: "All tools" },
  { href: "/journeys/mover-lift-booking", label: "Mover lift booking" },
  { href: "/journeys/leaving", label: "Leaving playbook" },
  { href: "/journeys/pre-arrival", label: "Pre-arrival" },
  { href: "/tools/car-coe-exit", label: "Car / COE exit" },
  { href: "/move", label: "Move pillar" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default function ForeignLicenceClockToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "Foreign licence clock", path },
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
        title="Foreign licence clock, sketched."
        summary="Count common 6–12 month windows from arrival or pass issue before movers week or leave flights eat the calendar."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <ForeignLicenceClockCalculator />
        <div className="mt-12">
          <HubStrip links={RELATED} />
        </div>
      </div>
    </>
  );
}
