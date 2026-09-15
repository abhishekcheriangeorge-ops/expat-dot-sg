import type { Metadata } from "next";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { ExploreLinks } from "@/components/seo/ExploreLinks";
import { StorageMonthsCalculator } from "@/components/tools";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import { webApplicationJsonLd } from "@/lib/seo-playbooks";

const title = 'Storage months sketch';
const description =
  'Sketch Singapore temporary self-storage cost as monthly band × months, plus optional insurance and access fees — orientation for relocation gaps.';
const path = '/tools/storage-months';

const RELATED = [
  { href: "/tools", label: "All tools" },
  { href: "/journeys/bank-exit-closure", label: "Bank exit playbook" },
  { href: "/journeys/leaving", label: "Leaving playbook" },
  { href: "/journeys/utility-exit-handover", label: "Utility exit handover" },
  { href: "/move", label: "Move pillar" },
  { href: "/money", label: "Money pillar" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default function StorageMonthsToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: 'Storage months', path },
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
        eyebrow='Tools · Move'
        title='Storage months, priced roughly.'
        summary='Locker to family-volume bands × months, plus optional insurance and access fees — float enough SGD before you close the bank account.'
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <StorageMonthsCalculator />
        <div className="mt-12">
          <ExploreLinks links={RELATED} />
        </div>
      </div>
    </>
  );
}
