import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { LinkRail } from "@/components/seo/LinkRail";
import { getHelperHandoffExitPlaybook } from "@/lib/content";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import { howToJsonLd } from "@/lib/seo-handoff";

const title = "Helper handoff on exit";
const description =
  "Leaving Singapore with an FDW — transfer vs cancel timing, MOM sequencing, care overlap with movers/pets/newborn, and agency settlement.";
const path = "/journeys/helper-handoff-exit";

const RELATED = [
  { href: "/journeys/leaving", label: "Leaving playbook" },
  { href: "/tools/club-deposit-exit", label: "Club deposit exit" },
  { href: "/tools/fdw-levy", label: "FDW levy sketch" },
  { href: "/journeys/school-bus-cca-exit", label: "School bus / CCA exit" },
  { href: "/journeys", label: "All journeys" },
  { href: "/family", label: "Family pillar" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default async function HelperHandoffExitJourneyPage() {
  const playbook = await getHelperHandoffExitPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "Helper handoff exit", path },
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
            name: `${title} — related`,
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
        eyebrow="Family · Helper exit"
        title={playbook.title}
        summary="Pick transfer, home leave, or cancel in writing before exit week — helper status does not improvise well beside movers."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <LinkRail links={RELATED} />
      </div>
    </>
  );
}
