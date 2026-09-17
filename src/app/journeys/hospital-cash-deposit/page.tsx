import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getHospitalCashDepositPlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Hospital cash deposit (first admission)",
  description:
    "Playbook for first Singapore hospital admissions on EP — deposit quotes, Integrated Shield / employer LOG gaps, payment rails, and deposit clawback after discharge.",
  path: "/journeys/hospital-cash-deposit",
});

export default async function HospitalCashDepositJourneyPage() {
  const playbook = await getHospitalCashDepositPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "Hospital cash deposit", path: "/journeys/hospital-cash-deposit" },
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
        eyebrow="Life · Hospital cash"
        title={playbook.title}
        summary="IP and company cover rarely erase the counter deposit. Pre-auth the LOG, float the cash, claw it back after discharge."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <p className="text-sm text-ink-faint">
          Related:{" "}
          <Link
            href="/tools/setup-cash"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            First-month cash
          </Link>{" "}
          ·{" "}
          <Link
            href="/tools/fdw-levy"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            FDW levy sketch
          </Link>{" "}
          ·{" "}
          <Link
            href="/life"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Life pillar
          </Link>
        </p>
      </div>
    </>
  );
}
