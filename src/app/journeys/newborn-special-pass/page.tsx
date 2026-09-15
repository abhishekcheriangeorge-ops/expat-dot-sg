import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { ExploreLinks } from "@/components/seo/ExploreLinks";
import { getNewbornSpecialPassPlaybook } from "@/lib/content";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import { howToJsonLd } from "@/lib/seo-playbooks";

const title = 'Newborn Special Pass';
const description =
  'Baby born in Singapore on an EP household — ICA Special Pass clock, Dependant Pass filing, and what not to confuse with family joining from abroad.';
const path = '/journeys/newborn-special-pass';

const RELATED = [
  { href: "/journeys/family-joining", label: "Family joining later" },
  { href: "/tools/ipa-window", label: "IPA window" },
  { href: "/tools/sim-otp-keep", label: "SIM / OTP keep sketch" },
  { href: "/family", label: "Family pillar" },
  { href: "/living", label: "Living hub" },
  { href: "/tools", label: "All tools" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default async function NewbornSpecialPassJourneyPage() {
  const playbook = await getNewbornSpecialPassPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: 'Newborn Special Pass', path },
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
        eyebrow='Family · Newborn'
        title={playbook.title}
        summary='Diary the Special Pass expiry the day it is issued — passport and Dependant Pass work run in parallel, not after.'
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <ExploreLinks links={RELATED} />
      </div>
    </>
  );
}
