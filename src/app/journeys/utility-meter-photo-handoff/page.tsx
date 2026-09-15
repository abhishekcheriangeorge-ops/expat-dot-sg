import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getUtilityMeterPhotoHandoffPlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Utility meter photo handoff",
  description:
    "Leaving a flat with electricity, water, and gas meters still unsigned — capture dated meter photos, align final reads with SP / PUB / landlord checkout, and keep a float until credit notes clear.",
  path: "/journeys/utility-meter-photo-handoff",
});

export default async function UtilityMeterPhotoHandoffJourneyPage() {
  const playbook = await getUtilityMeterPhotoHandoffPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    {
      name: "Utility meter photo handoff",
      path: "/journeys/utility-meter-photo-handoff",
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
        eyebrow="Home · Utility exit"
        title={playbook.title}
        summary="Photograph every dial before keys go back — account closure alone does not settle a disputed final read."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <p className="text-sm text-ink-faint">
          Related:{" "}
          <Link
            href="/tools/school-exam-ib-deposit"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            School exam / IB deposit
          </Link>{" "}
          ·{" "}
          <Link
            href="/journeys/utility-exit-handover"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Utility exit handover
          </Link>{" "}
          ·{" "}
          <Link
            href="/journeys/leaving"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Leaving playbook
          </Link>
        </p>
      </div>
    </>
  );
}
