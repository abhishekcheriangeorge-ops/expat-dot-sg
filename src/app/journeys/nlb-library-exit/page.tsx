import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getNlbLibraryExitPlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "NLB / library membership exit",
  description:
    "Leaving Singapore with NLB or community-library holds still open — return loans, clear lost-item fees, and close membership contact channels before Singpass and address changes.",
  path: "/journeys/nlb-library-exit",
});

export default async function NlbLibraryExitJourneyPage() {
  const playbook = await getNlbLibraryExitPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "NLB library exit", path: "/journeys/nlb-library-exit" },
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
        eyebrow="Life · Library exit"
        title={playbook.title}
        summary="Return loans and clear lost-item fees while the account still opens — library notices do not rebuild from folklore after you fly."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <p className="text-sm text-ink-faint">
          Related:{" "}
          <Link
            href="/tools/library-lost-item-float"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Library lost-item float
          </Link>{" "}
          ·{" "}
          <Link
            href="/journeys/school-locker-clear"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            School locker clear
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
