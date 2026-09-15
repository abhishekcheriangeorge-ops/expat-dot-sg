import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd, RelatedHubs } from "@/components/seo";
import { getLocDpWorkRightsPlaybook } from "@/lib/content";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import { howToJsonLd } from "@/lib/seo-howto";

const title = "DP work rights & Letter of Consent";
const description =
  "Playbook for Dependant’s Pass work rights — employee vs business-owner LOC, main-pass cascade risk, LTVP adjacency, and when EP is cleaner.";
const path = "/journeys/loc-dp-work-rights";

const RELATED = [
  { href: "/journeys/between-jobs", label: "Between-jobs playbook" },
  { href: "/journeys/family-joining", label: "Family joining later" },
  { href: "/tools/school-withdrawal", label: "School withdrawal sketch" },
  { href: "/tools/ep-threshold", label: "EP salary floors" },
  { href: "/family", label: "Family pillar" },
  { href: "/tools", label: "All tools" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default async function LocDpWorkRightsJourneyPage() {
  const playbook = await getLocDpWorkRightsPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "DP work rights", path },
  ];

  const howTo = howToJsonLd({
    name: playbook.title,
    description: playbook.summary,
    path,
    steps: playbook.sections.map((section) => ({
      name: section.title,
      text: section.body,
    })),
  });

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          collectionPageJsonLd({
            name: title,
            description,
            path,
            items: RELATED.map((item) => ({
              name: item.label,
              path: item.href,
            })),
          }),
          ...(howTo ? [howTo] : []),
        ]}
      />
      <div className="border-b border-fog-soft">
        <div className="mx-auto max-w-[var(--max-page)] px-5 pt-10 sm:px-8">
          <Breadcrumbs items={crumbs} />
        </div>
      </div>
      <JourneyHero
        eyebrow="Family · Work rights"
        title={playbook.title}
        summary="DP alone is not a work pass. Map LOC products, cascade risk, and when a primary work pass is safer."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <RelatedHubs hubs={RELATED} />
      </div>
    </>
  );
}
