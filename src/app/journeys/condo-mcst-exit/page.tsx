import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { CrossLinks } from "@/components/seo/CrossLinks";
import { getCondoMcstExitPlaybook } from "@/lib/content";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import { howToJsonLd } from "@/lib/seo-exit";

const title = "Condo MCST / access exit";
const description =
  "Leaving a Singapore condo — MCST access cards, car-park IU, renovation deposits, and handover sequencing for expat leavers.";
const path = "/journeys/condo-mcst-exit";

const RELATED = [
  { href: "/journeys/leaving", label: "Leaving playbook" },
  { href: "/journeys/utility-exit-handover", label: "Utility exit handover" },
  { href: "/journeys/bank-exit-closure", label: "Bank exit closure" },
  { href: "/tools/car-coe-exit", label: "Car / COE exit sketch" },
  { href: "/tools/lease-notice", label: "Diplomatic-clause notice" },
  { href: "/home", label: "Home pillar" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default async function CondoMcstExitJourneyPage() {
  const playbook = await getCondoMcstExitPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "Condo MCST exit", path },
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
        eyebrow="Home · Exit"
        title={playbook.title}
        summary="Return cards and IU on management-office hours — not after the last flight check-in."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <CrossLinks links={RELATED} />
      </div>
    </>
  );
}
