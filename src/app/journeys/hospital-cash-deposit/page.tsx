import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd, RelatedHubs } from "@/components/seo";
import { getHospitalCashDepositPlaybook } from "@/lib/content";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import { howToJsonLd } from "@/lib/seo-howto";

const title = "Hospital cash deposit (first admission)";
const description =
  "Playbook for first Singapore hospital admissions on EP — deposit quotes, Integrated Shield / employer LOG gaps, payment rails, and deposit clawback after discharge.";
const path = "/journeys/hospital-cash-deposit";

const RELATED = [
  { href: "/tools/setup-cash", label: "First-month cash" },
  { href: "/tools/fdw-levy", label: "FDW levy sketch" },
  { href: "/journeys/family-joining", label: "Family joining later" },
  { href: "/life", label: "Life pillar" },
  { href: "/living", label: "Living hub" },
  { href: "/tools", label: "All tools" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default async function HospitalCashDepositJourneyPage() {
  const playbook = await getHospitalCashDepositPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "Hospital cash deposit", path },
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
        eyebrow="Life · Hospital cash"
        title={playbook.title}
        summary="IP and company cover rarely erase the counter deposit. Pre-auth the LOG, float the cash, claw it back after discharge."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <RelatedHubs hubs={RELATED} />
      </div>
    </>
  );
}
