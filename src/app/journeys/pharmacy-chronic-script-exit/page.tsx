import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getPharmacyChronicScriptExitPlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Pharmacy / chronic-script exit",
  description:
    "Leaving Singapore on chronic meds — pull last refills, request transfer letters, and float private-script cash before clinic accounts and Singpass logistics change.",
  path: "/journeys/pharmacy-chronic-script-exit",
});

export default async function PharmacyChronicScriptExitJourneyPage() {
  const playbook = await getPharmacyChronicScriptExitPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    {
      name: "Pharmacy chronic-script exit",
      path: "/journeys/pharmacy-chronic-script-exit",
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
        eyebrow="Health · Pharmacy exit"
        title={playbook.title}
        summary="Pull last refills and transfer letters while clinic portals still open — chronic cover does not rebuild from folklore after you fly."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <p className="text-sm text-ink-faint">
          Related:{" "}
          <Link
            href="/tools/pharmacy-last-refill-float"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Pharmacy last-refill float
          </Link>{" "}
          ·{" "}
          <Link
            href="/tools/clinic-deposit-exit"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Clinic deposit exit
          </Link>{" "}
          ·{" "}
          <Link
            href="/journeys/hospital-cash-deposit"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Hospital cash deposit
          </Link>
        </p>
      </div>
    </>
  );
}
