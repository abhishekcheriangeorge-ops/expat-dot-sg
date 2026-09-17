import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getCpfNominationExitPlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "CPF nomination / estate-planning exit",
  description:
    "Leaving Singapore with CPF still open — confirm nominations, archive statements for executors, and sequence board updates before Singpass and address changes.",
  path: "/journeys/cpf-nomination-exit",
});

export default async function CpfNominationExitJourneyPage() {
  const playbook = await getCpfNominationExitPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "CPF nomination exit", path: "/journeys/cpf-nomination-exit" },
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
        eyebrow="Money · CPF exit"
        title={playbook.title}
        summary="Export nominations and statements while Singpass still works — estate files do not rebuild from folklore after you fly."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <p className="text-sm text-ink-faint">
          Related:{" "}
          <Link
            href="/tools/school-bus-last-week-float"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            School bus last-week float
          </Link>{" "}
          ·{" "}
          <Link
            href="/tools/cpf-withdrawal"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            CPF withdrawal sketch
          </Link>{" "}
          ·{" "}
          <Link
            href="/tools/bank-statement-archive"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Bank statement archive
          </Link>
        </p>
      </div>
    </>
  );
}
