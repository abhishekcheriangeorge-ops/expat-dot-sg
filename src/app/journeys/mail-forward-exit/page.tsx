import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getMailForwardExitPlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Mail forward / PO box exit",
  description:
    "Leaving Singapore without losing IRAS, bank, and condo letters — SingPost redirection, virtual mailbox options, and refund-cheque address hygiene.",
  path: "/journeys/mail-forward-exit",
});

export default async function MailForwardExitJourneyPage() {
  const playbook = await getMailForwardExitPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "Mail forward exit", path: "/journeys/mail-forward-exit" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <div className="border-b border-ink/15">
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
        <p className="text-sm text-ink-faint">
          Related:{" "}
          <Link
            href="/journeys/leaving"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Leaving playbook
          </Link>{" "}
          ·{" "}
          <Link
            href="/tools/hdb-reno-deposit"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            HDB reno deposit sketch
          </Link>{" "}
          ·{" "}
          <Link
            href="/journeys/singpass-myinfo-exit"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Singpass / Myinfo exit
          </Link>
        </p>
      </div>
    </>
  );
}
