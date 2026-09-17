import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getCondoVisitorParkingClearPlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Condo visitor parking / loading-bay clear",
  description:
    "Leaving a condo with visitor parking QR, temporary loading-bay bookings, and guest tags still live — cancel bay slots, return visitor tags, and clear overnight guest parking before handover.",
  path: "/journeys/condo-visitor-parking-clear",
});

export default async function CondoVisitorParkingClearJourneyPage() {
  const playbook = await getCondoVisitorParkingClearPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    {
      name: "Condo visitor parking clear",
      path: "/journeys/condo-visitor-parking-clear",
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
        summary="Cancel visitor bays and loading slots before keys go back — guest parking apps do not die with the unit handover checklist."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <p className="text-sm text-ink-faint">
          Related:{" "}
          <Link
            href="/tools/helper-levy-final-month"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Helper levy final month
          </Link>{" "}
          ·{" "}
          <Link
            href="/journeys/condo-visitor-qr-exit"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Condo visitor QR revoke
          </Link>{" "}
          ·{" "}
          <Link
            href="/journeys/mover-lift-booking"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Mover lift booking
          </Link>
        </p>
      </div>
    </>
  );
}
