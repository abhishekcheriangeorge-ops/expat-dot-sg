import type { Metadata } from "next";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { LinkRail } from "@/components/seo/LinkRail";
import { DrivingInsuranceGapCalculator } from "@/components/tools";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import { webApplicationJsonLd } from "@/lib/seo-handoff";

const title = "Driving insurance gap sketch";
const description =
  "Sketch extend-cover vs daily float vs Grab-only costs for the weeks after school bus cancel or before you leave Singapore.";
const path = "/tools/driving-insurance-gap";

const RELATED = [
  { href: "/tools", label: "All tools" },
  { href: "/journeys/school-bus-cca-exit", label: "School bus / CCA exit" },
  { href: "/tools/foreign-licence-clock", label: "Foreign licence clock" },
  { href: "/journeys/leaving", label: "Leaving playbook" },
  { href: "/move", label: "Move pillar" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default function DrivingInsuranceGapToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "Driving insurance gap", path },
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
        title="Insurance gap weeks, sketched."
        summary="When the bus ends early, compare extending cover, a daily self-drive float, and Grab-only budgets."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <DrivingInsuranceGapCalculator />
        <LinkRail links={RELATED} />
      </div>
    </>
  );
}
