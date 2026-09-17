import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getBankExitClosurePlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Bank exit & account closure",
  description:
    "Playbook for closing or keeping SGD accounts when an EP ends — PayNow/GIRO teardown, KYC clocks, remittance, and storage-cash overlap.",
  path: "/journeys/bank-exit-closure",
});

export default async function BankExitClosureJourneyPage() {
  const playbook = await getBankExitClosurePlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "Bank exit closure", path: "/journeys/bank-exit-closure" },
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
        eyebrow="Money · Bank exit"
        title={playbook.title}
        summary="Tear down PayNow and GIRO before the FIN looks stale. Remit the residual, then close — or keep one rail for refunds."
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
            href="/tools/storage-months"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Storage months sketch
          </Link>{" "}
          ·{" "}
          <Link
            href="/money"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Money pillar
          </Link>
        </p>
      </div>
    </>
  );
}
