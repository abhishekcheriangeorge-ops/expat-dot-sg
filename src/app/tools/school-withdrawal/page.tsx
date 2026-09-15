import type { Metadata } from "next";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd, RelatedHubs } from "@/components/seo";
import { SchoolWithdrawalCalculator } from "@/components/tools";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import { webApplicationJsonLd } from "@/lib/seo-howto";

const title = "School withdrawal notice sketch";
const description =
  "Sketch the written-notice deadline for withdrawing a child from an international or private school in Singapore — orientation from your contract’s notice weeks.";
const path = "/tools/school-withdrawal";

const RELATED = [
  { href: "/tools", label: "All tools" },
  { href: "/journeys/loc-dp-work-rights", label: "DP / LOC playbook" },
  { href: "/journeys/leaving", label: "Leaving playbook" },
  { href: "/schools", label: "Schools" },
  { href: "/family", label: "Family pillar" },
  { href: "/calendar", label: "Calendar" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default function SchoolWithdrawalToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "School withdrawal", path },
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
        eyebrow="Tools · Family"
        title="Notice weeks, counted backwards."
        summary="International school contracts usually demand written notice measured in weeks or a full term. Sketch the deadline from your handbook — then confirm fees in writing."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <SchoolWithdrawalCalculator />
        <div className="mt-12">
          <RelatedHubs hubs={RELATED} />
        </div>
      </div>
    </>
  );
}
