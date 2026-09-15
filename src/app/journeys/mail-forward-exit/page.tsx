import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { LinkRail } from "@/components/seo/LinkRail";
import { getMailForwardExitPlaybook } from "@/lib/content";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import { howToJsonLd } from "@/lib/seo-handoff";

const title = "Mail forward / PO box exit";
const description =
  "Leaving Singapore without losing IRAS, bank, and condo letters — SingPost redirection, virtual mailbox options, and refund-cheque address hygiene.";
const path = "/journeys/mail-forward-exit";

const RELATED = [
  { href: "/journeys/leaving", label: "Leaving playbook" },
  { href: "/tools/hdb-reno-deposit", label: "HDB reno deposit sketch" },
  { href: "/journeys/singpass-myinfo-exit", label: "Singpass / Myinfo exit" },
  { href: "/journeys", label: "All journeys" },
  { href: "/tools", label: "All tools" },
  { href: "/home", label: "Home pillar" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default async function MailForwardExitJourneyPage() {
  const playbook = await getMailForwardExitPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "Mail forward exit", path },
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
        eyebrow="Life · Exit mail"
        title={playbook.title}
        summary="Start redirection before keys return — IRAS and bank originals do not wait for your new country’s inbox."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <LinkRail links={RELATED} />
      </div>
    </>
  );
}
