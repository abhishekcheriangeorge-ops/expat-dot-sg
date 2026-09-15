import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { LinkRail } from "@/components/seo/LinkRail";
import { getSchoolBusCcaExitPlaybook } from "@/lib/content";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import { howToJsonLd } from "@/lib/seo-handoff";

const title = "School bus / CCA exit";
const description =
  "Leaving mid-term with school bus routes and CCA kits still live — operator notice, kit deposits, and self-drive insurance gaps for expat families.";
const path = "/journeys/school-bus-cca-exit";

const RELATED = [
  { href: "/tools/school-withdrawal", label: "School withdrawal sketch" },
  { href: "/tools/driving-insurance-gap", label: "Driving insurance gap" },
  { href: "/journeys/mover-lift-booking", label: "Mover lift booking" },
  { href: "/journeys/helper-handoff-exit", label: "Helper handoff exit" },
  { href: "/journeys", label: "All journeys" },
  { href: "/family", label: "Family pillar" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default async function SchoolBusCcaExitJourneyPage() {
  const playbook = await getSchoolBusCcaExitPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "School bus / CCA exit", path },
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
        eyebrow="Family · School exit"
        title={playbook.title}
        summary="Cancel the bus operator in writing — school withdrawal does not stop the bus invoice."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <LinkRail links={RELATED} />
      </div>
    </>
  );
}
