import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { ContinueLinks } from "@/components/seo/ContinueLinks";
import { getCondoVisitorQrExitPlaybook } from "@/lib/content";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import { howToJsonLd } from "@/lib/seo-device";

const title = "Condo visitor QR revoke";
const description =
  "Leaving a condo with guest QR, helper codes, and delivery PINs still live — revoke lists before MCST card return and movers week.";
const path = "/journeys/condo-visitor-qr-exit";

const RELATED = [
  { href: "/journeys/condo-mcst-exit", label: "Condo MCST exit" },
  { href: "/tools/school-device-bond", label: "School device bond" },
  { href: "/journeys/mover-lift-booking", label: "Mover lift booking" },
  { href: "/journeys/leaving", label: "Leaving playbook" },
  { href: "/journeys", label: "All journeys" },
  { href: "/home", label: "Home pillar" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default async function CondoVisitorQrExitJourneyPage() {
  const playbook = await getCondoVisitorQrExitPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "Condo visitor QR revoke", path },
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
        eyebrow="Home · Condo exit"
        title={playbook.title}
        summary="Revoke guest QR and helper codes while the resident app login still works — cards alone are not enough."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <ContinueLinks links={RELATED} />
      </div>
    </>
  );
}
