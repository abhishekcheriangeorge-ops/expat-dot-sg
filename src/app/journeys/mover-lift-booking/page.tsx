import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getMoverLiftBookingPlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Mover lift / loading-bay booking",
  description:
    "Book condo or HDB service lifts and loading bays before movers day — deposits, pad rules, same-day access sequencing for expat leavers.",
  path: "/journeys/mover-lift-booking",
});

export default async function MoverLiftBookingJourneyPage() {
  const playbook = await getMoverLiftBookingPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "Mover lift booking", path: "/journeys/mover-lift-booking" },
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
        eyebrow="Home · Movers"
        title={playbook.title}
        summary="Lock the service lift and loading bay before the truck deposit — estates fill month-end Saturdays first."
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
            href="/tools/foreign-licence-clock"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Foreign licence clock
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
