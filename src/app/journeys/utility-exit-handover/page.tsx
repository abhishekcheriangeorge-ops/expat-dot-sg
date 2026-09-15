import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { ExploreLinks } from "@/components/seo/ExploreLinks";
import { getUtilityExitHandoverPlaybook } from "@/lib/content";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import { howToJsonLd } from "@/lib/seo-playbooks";

const title = 'Utilities & telecom exit handover';
const description =
  'Playbook for tearing down SP, fibre, mobile, and condo utilities when leaving a flat or Singapore — notice windows, deposits, GIRO, and final-bill float.';
const path = '/journeys/utility-exit-handover';

const RELATED = [
  { href: "/journeys/leaving", label: "Leaving playbook" },
  { href: "/journeys/bank-exit-closure", label: "Bank exit closure" },
  { href: "/tools/ir21-withhold", label: "IR21 withhold sketch" },
  { href: "/tools/lease-notice", label: "Lease notice sketch" },
  { href: "/home", label: "Home pillar" },
  { href: "/tools", label: "All tools" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default async function UtilityExitHandoverJourneyPage() {
  const playbook = await getUtilityExitHandoverPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: 'Utility exit handover', path },
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
        eyebrow='Home · Exit utilities'
        title={playbook.title}
        summary='Kill SP, fibre, and GIRO on purpose. Match notice windows to key handover — then keep enough SGD for finals and ETFs.'
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <ExploreLinks links={RELATED} />
      </div>
    </>
  );
}
