import type { Metadata } from "next";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { ExploreLinks } from "@/components/seo/ExploreLinks";
import { CpfWithdrawalCalculator } from "@/components/tools";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import { webApplicationJsonLd } from "@/lib/seo-playbooks";

const title = 'CPF withdrawal timing sketch';
const description =
  'Sketch when to start a CPF withdrawal / closure conversation before leaving Singapore — processing windows vs departure, not CPF Board advice.';
const path = '/tools/cpf-withdrawal';

const RELATED = [
  { href: "/tools", label: "All tools" },
  { href: "/journeys/pets-reexport", label: "Pets re-export" },
  { href: "/journeys/leaving", label: "Leaving playbook" },
  { href: "/journeys/bank-exit-closure", label: "Bank exit closure" },
  { href: "/money", label: "Money pillar" },
  { href: "/next", label: "Next pillar" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default function CpfWithdrawalToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: 'CPF withdrawal', path },
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
        title='CPF timing vs your flight, sketched.'
        summary='Count backwards from departure across common processing windows. Status, pledges, and MediSave rules still decide what you can take.'
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <CpfWithdrawalCalculator />
        <div className="mt-12">
          <ExploreLinks links={RELATED} />
        </div>
      </div>
    </>
  );
}
