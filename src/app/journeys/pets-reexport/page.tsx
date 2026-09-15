import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { ExploreLinks } from "@/components/seo/ExploreLinks";
import { getPetsReexportPlaybook } from "@/lib/content";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import { howToJsonLd } from "@/lib/seo-playbooks";

const title = 'Pets re-export / exit';
const description =
  'Leaving Singapore with a dog or cat — NParks/AVS export timing, rabies titres, airline crates, and quarantine myths for expat households.';
const path = '/journeys/pets-reexport';

const RELATED = [
  { href: "/journeys/leaving", label: "Leaving playbook" },
  { href: "/journeys/singpass-myinfo-exit", label: "Singpass / Myinfo exit" },
  { href: "/tools/cpf-withdrawal", label: "CPF withdrawal timing" },
  { href: "/tools/lease-notice", label: "Diplomatic-clause notice" },
  { href: "/move", label: "Move pillar" },
  { href: "/tools", label: "All tools" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default async function PetsReexportJourneyPage() {
  const playbook = await getPetsReexportPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: 'Pets re-export', path },
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
        eyebrow='Move · Pets exit'
        title={playbook.title}
        summary='Start the pet’s paperwork months before your own flights — titres and crates do not care about EP cancel day.'
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <ExploreLinks links={RELATED} />
      </div>
    </>
  );
}
