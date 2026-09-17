import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getParkingIuErpExitPlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Parking IU / ERP exit",
  description:
    "Leaving Singapore with IU units, season parking labels, and ERP wallets still live — deregister clocks, deposit returns, and same-week stack with car COE and tuition bonds.",
  path: "/journeys/parking-iu-erp-exit",
});

export default async function ParkingIuErpExitJourneyPage() {
  const playbook = await getParkingIuErpExitPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "Parking IU / ERP exit", path: "/journeys/parking-iu-erp-exit" },
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
        eyebrow="Move · Parking exit"
        title={playbook.title}
        summary="Deregister IU and cancel season labels before the bank rail that funds ERP closes."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <p className="text-sm text-ink-faint">
          Related:{" "}
          <Link
            href="/tools/tuition-centre-bond"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Tuition centre bond
          </Link>{" "}
          ·{" "}
          <Link
            href="/tools/car-coe-exit"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Car / COE exit
          </Link>{" "}
          ·{" "}
          <Link
            href="/journeys/condo-mcst-exit"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Condo MCST exit
          </Link>
        </p>
      </div>
    </>
  );
}
