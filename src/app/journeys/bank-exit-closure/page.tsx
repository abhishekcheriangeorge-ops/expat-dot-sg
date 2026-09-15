import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { ExploreLinks } from "@/components/seo/ExploreLinks";
import { getBankExitClosurePlaybook } from "@/lib/content";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import { howToJsonLd } from "@/lib/seo-playbooks";

const title = 'Bank exit & account closure';
const description =
  'Playbook for closing or keeping SGD accounts when an EP ends — PayNow/GIRO teardown, KYC clocks, remittance, and storage-cash overlap.';
const path = '/journeys/bank-exit-closure';

const RELATED = [
  { href: "/journeys/leaving", label: "Leaving playbook" },
  { href: "/journeys/utility-exit-handover", label: "Utility exit handover" },
  { href: "/tools/storage-months", label: "Storage months sketch" },
  { href: "/tools/ir21-withhold", label: "IR21 withhold sketch" },
  { href: "/money", label: "Money pillar" },
  { href: "/tools", label: "All tools" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default async function BankExitClosureJourneyPage() {
  const playbook = await getBankExitClosurePlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: 'Bank exit closure', path },
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
        eyebrow='Money · Bank exit'
        title={playbook.title}
        summary='Tear down PayNow and GIRO before the FIN looks stale. Remit the residual, then close — or keep one rail for refunds.'
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <ExploreLinks links={RELATED} />
      </div>
    </>
  );
}
