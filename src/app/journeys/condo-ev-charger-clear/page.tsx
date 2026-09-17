import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getCondoEvChargerClearPlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Condo EV charger / lot clear",
  description:
    "Leaving a condo with a reserved EV charger bay, wallbox deposit, or visitor-charging PIN still live — release lots, return RFID tags, and settle charger deposits before handover.",
  path: "/journeys/condo-ev-charger-clear",
});

export default async function CondoEvChargerClearJourneyPage() {
  const playbook = await getCondoEvChargerClearPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    {
      name: "Condo EV charger clear",
      path: "/journeys/condo-ev-charger-clear",
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
        summary="Release EV bays and RFID before keys go back — charging apps do not die with the unit handover checklist."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <p className="text-sm text-ink-faint">
          Related:{" "}
          <Link
            href="/tools/school-cca-kit-bond"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            School CCA kit bond
          </Link>{" "}
          ·{" "}
          <Link
            href="/journeys/condo-mcst-exit"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Condo MCST exit
          </Link>{" "}
          ·{" "}
          <Link
            href="/journeys/condo-visitor-qr-exit"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Condo visitor QR revoke
          </Link>
        </p>
      </div>
    </>
  );
}
