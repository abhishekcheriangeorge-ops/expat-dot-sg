import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { HubStrip } from "@/components/seo/HubStrip";
import { getMoverLiftBookingPlaybook } from "@/lib/content";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import { howToJsonLd } from "@/lib/seo-movers";

const title = "Mover lift / loading-bay booking";
const description =
  "Book condo or HDB service lifts and loading bays before movers day — deposits, pad rules, same-day access sequencing for expat leavers.";
const path = "/journeys/mover-lift-booking";

const RELATED = [
  { href: "/journeys/leaving", label: "Leaving playbook" },
  { href: "/journeys/condo-mcst-exit", label: "Condo MCST exit" },
  { href: "/journeys/utility-exit-handover", label: "Utility exit handover" },
  { href: "/tools/foreign-licence-clock", label: "Foreign licence clock" },
  { href: "/tools/lease-notice", label: "Diplomatic-clause notice" },
  { href: "/tools/storage-months", label: "Storage months sketch" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default async function MoverLiftBookingJourneyPage() {
  const playbook = await getMoverLiftBookingPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "Mover lift booking", path },
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
        eyebrow="Home · Movers"
        title={playbook.title}
        summary="Lock the service lift and loading bay before the truck deposit — estates fill month-end Saturdays first."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <HubStrip links={RELATED} />
      </div>
    </>
  );
}
