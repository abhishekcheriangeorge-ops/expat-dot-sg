import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { ExploreLinks } from "@/components/seo/ExploreLinks";
import { getSingpassMyinfoExitPlaybook } from "@/lib/content";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import { howToJsonLd } from "@/lib/seo-playbooks";

const title = 'Singpass / Myinfo exit';
const description =
  'Leaving Singapore with Singpass still useful — login grace vs status, Myinfo cut-off, OTP hygiene, and authorisation handoffs for expat leavers.';
const path = '/journeys/singpass-myinfo-exit';

const RELATED = [
  { href: "/journeys/leaving", label: "Leaving playbook" },
  { href: "/journeys/bank-exit-closure", label: "Bank exit closure" },
  { href: "/tools/school-deposit-clawback", label: "School deposit clawback" },
  { href: "/tools/sim-otp-keep", label: "SIM / OTP keep sketch" },
  { href: "/tools/lease-notice", label: "Diplomatic-clause notice" },
  { href: "/tools", label: "All tools" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default async function SingpassMyinfoExitJourneyPage() {
  const playbook = await getSingpassMyinfoExitPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: 'Singpass / Myinfo exit', path },
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
        eyebrow='Move · Digital exit'
        title={playbook.title}
        summary='Finish Myinfo-backed tasks and OTP paths before cancel day — Singpass login grace is not leave to remain.'
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <ExploreLinks links={RELATED} />
      </div>
    </>
  );
}
