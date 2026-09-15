import type { Metadata } from "next";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { ExploreLinks } from "@/components/seo/ExploreLinks";
import { Ir21WithholdCalculator } from "@/components/tools";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import { webApplicationJsonLd } from "@/lib/seo-playbooks";

const title = 'IR21 withhold timeline sketch';
const description =
  'Sketch Singapore employer tax-clearance (IR21) withhold windows from a planned cessation date — orientation for exit cash planning.';
const path = '/tools/ir21-withhold';

const RELATED = [
  { href: "/tools", label: "All tools" },
  { href: "/journeys/utility-exit-handover", label: "Utility exit playbook" },
  { href: "/journeys/bank-exit-closure", label: "Bank exit closure" },
  { href: "/journeys/leaving", label: "Leaving playbook" },
  { href: "/money", label: "Money pillar" },
  { href: "/next", label: "Next pillar" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default function Ir21WithholdToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: 'IR21 withhold', path },
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
        eyebrow='Tools · Money'
        title='IR21 withhold, dated forward.'
        summary='Employers often hold final pay while tax clearance runs. Sketch a release window from your last day — then confirm with HR.'
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <Ir21WithholdCalculator />
        <div className="mt-12">
          <ExploreLinks links={RELATED} />
        </div>
      </div>
    </>
  );
}
