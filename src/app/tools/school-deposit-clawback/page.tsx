import type { Metadata } from "next";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { ExploreLinks } from "@/components/seo/ExploreLinks";
import { SchoolDepositClawbackCalculator } from "@/components/tools";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import { webApplicationJsonLd } from "@/lib/seo-playbooks";

const title = 'School deposit clawback sketch';
const description =
  'Sketch mid-year international school deposit and remaining-tuition cash at risk when leaving Singapore — orientation only, not handbook advice.';
const path = '/tools/school-deposit-clawback';

const RELATED = [
  { href: "/tools", label: "All tools" },
  { href: "/journeys/singpass-myinfo-exit", label: "Singpass / Myinfo exit" },
  { href: "/journeys/leaving", label: "Leaving playbook" },
  { href: "/tools/school-withdrawal", label: "School withdrawal sketch" },
  { href: "/schools", label: "Schools" },
  { href: "/family", label: "Family pillar" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default function SchoolDepositClawbackToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: 'School deposit clawback', path },
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
        eyebrow='Tools · Family'
        title='Mid-year school cash at risk, sketched.'
        summary='Deposit forfeiture and remaining tuition collide when you leave mid-term. Check the maths before you resign or serve lease notice.'
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <SchoolDepositClawbackCalculator />
        <div className="mt-12">
          <ExploreLinks links={RELATED} />
        </div>
      </div>
    </>
  );
}
