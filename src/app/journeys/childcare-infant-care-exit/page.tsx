import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getChildcareInfantCareExitPlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Childcare / infant-care exit",
  description:
    "Leaving mid-term with infant care and childcare contracts still live — notice weeks, deposits, kits, and same-week stack with fibre ETF cash.",
  path: "/journeys/childcare-infant-care-exit",
});

export default async function ChildcareInfantCareExitJourneyPage() {
  const playbook = await getChildcareInfantCareExitPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    {
      name: "Childcare / infant-care exit",
      path: "/journeys/childcare-infant-care-exit",
    },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <div className="border-b border-fog-soft">
        <div className="mx-auto max-w-[var(--max-page)] px-5 pt-10 sm:px-8">
          <Breadcrumbs items={crumbs} />
        </div>
      </div>
      <JourneyHero
        eyebrow="Family · Care exit"
        title={playbook.title}
        summary="Serve centre notice in writing on the fee-cycle boundary — school withdrawal does not stop childcare billing."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <p className="text-sm text-ink-faint">
          Related:{" "}
          <Link
            href="/tools/fibre-broadband-etf"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Fibre broadband ETF
          </Link>{" "}
          ·{" "}
          <Link
            href="/tools/school-withdrawal"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            School withdrawal
          </Link>{" "}
          ·{" "}
          <Link
            href="/journeys/utility-exit-handover"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Utilities exit handover
          </Link>
        </p>
      </div>
    </>
  );
}
