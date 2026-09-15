import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getSingpassMyinfoExitPlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Singpass / Myinfo exit",
  description:
    "Leaving Singapore with Singpass still useful — login grace vs status, Myinfo cut-off, OTP hygiene, and authorisation handoffs for expat leavers.",
  path: "/journeys/singpass-myinfo-exit",
});

export default async function SingpassMyinfoExitJourneyPage() {
  const playbook = await getSingpassMyinfoExitPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "Singpass / Myinfo exit", path: "/journeys/singpass-myinfo-exit" },
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
        eyebrow="Move · Digital exit"
        title={playbook.title}
        summary="Finish Myinfo-backed tasks and OTP paths before cancel day — Singpass login grace is not leave to remain."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <p className="text-sm text-ink-faint">
          Also leaving?{" "}
          <Link
            href="/journeys/leaving"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Leaving playbook
          </Link>{" "}
          ·{" "}
          <Link
            href="/tools/school-deposit-clawback"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            School deposit clawback
          </Link>{" "}
          ·{" "}
          <Link
            href="/tools/lease-notice"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Diplomatic-clause notice
          </Link>
        </p>
      </div>
    </>
  );
}
