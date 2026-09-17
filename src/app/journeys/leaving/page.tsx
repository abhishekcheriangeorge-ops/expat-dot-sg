import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getLeavingPlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Leaving Singapore",
  description:
    "Leaving Singapore playbook — IRAS tax clearance, pass cancellation, lease exit, shipping, and school records.",
  path: "/journeys/leaving",
});

export default async function LeavingJourneyPage() {
  const playbook = await getLeavingPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "Leaving", path: "/journeys/leaving" },
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
        eyebrow="Next · Leaving"
        title={playbook.title}
        summary="Work backwards from the flight. This is the sequence — cite the leaving guide when you need the article."
      />
      <p className="mx-auto max-w-[var(--max-page)] px-5 pt-6 text-sm sm:px-8">
        <Link
          href="/guides/leaving-singapore-playbook"
          className="font-semibold text-canopy no-underline underline-offset-4 hover:underline"
        >
          Leaving Singapore guide →
        </Link>
      </p>
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <p className="mb-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <Link
            href="/guides/between-jobs-stvp-singapore"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            EP cancel → STVP (up to 90 days) →
          </Link>
          <Link
            href="/guides/short-term-visit-pass-extension"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            ICA visit-pass extension →
          </Link>
          <Link
            href="/guides/tax-clearance-when-leaving"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            IR21 tax clearance →
          </Link>
          <Link
            href="/guides/lost-replace-work-pass-card"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Lost pass card →
          </Link>
        </p>
        <p className="text-sm text-ink-faint">
          Changing jobs without leaving?{" "}
          <Link
            href="/journeys/between-jobs"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Between-jobs playbook
          </Link>{" "}
          · Narrative depth:{" "}
          <Link
            href="/guides/leaving-singapore-playbook"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Leaving Singapore guide
          </Link>{" "}
          ·{" "}
          <Link
            href="/next"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Next pillar
          </Link>
        </p>
      </div>
    </>
  );
}
