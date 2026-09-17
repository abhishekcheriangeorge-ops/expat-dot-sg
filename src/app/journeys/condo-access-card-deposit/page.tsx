import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getCondoAccessCardDepositPlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Condo access-card / fob deposit clear",
  description:
    "Leaving a condo with resident access cards, lift fobs, and carpark tags still on deposit — inventory tokens, return them with dated receipts, and float lost-card fees before handover.",
  path: "/journeys/condo-access-card-deposit",
});

export default async function CondoAccessCardDepositJourneyPage() {
  const playbook = await getCondoAccessCardDepositPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    {
      name: "Condo access-card deposit",
      path: "/journeys/condo-access-card-deposit",
    },
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
        eyebrow="Home · Condo exit"
        title={playbook.title}
        summary="Return every fob with a receipt before keys go back — lost-card fees do not wait for your flight."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <p className="text-sm text-ink-faint">
          Related:{" "}
          <Link
            href="/tools/bank-statement-archive"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Bank statement archive
          </Link>{" "}
          ·{" "}
          <Link
            href="/journeys/condo-mcst-exit"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Condo MCST exit
          </Link>{" "}
          ·{" "}
          <Link
            href="/journeys/condo-visitor-parking-clear"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Condo visitor parking clear
          </Link>
        </p>
      </div>
    </>
  );
}
