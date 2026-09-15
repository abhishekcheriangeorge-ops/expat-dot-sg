import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getCondoVisitorQrExitPlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Condo visitor QR revoke",
  description:
    "Leaving a condo with guest QR, helper codes, and delivery PINs still live — revoke lists before MCST card return and movers week.",
  path: "/journeys/condo-visitor-qr-exit",
});

export default async function CondoVisitorQrExitJourneyPage() {
  const playbook = await getCondoVisitorQrExitPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "Condo visitor QR revoke", path: "/journeys/condo-visitor-qr-exit" },
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
        eyebrow="Home · Condo exit"
        title={playbook.title}
        summary="Revoke guest QR and helper codes while the resident app login still works — cards alone are not enough."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <p className="text-sm text-ink-faint">
          Related:{" "}
          <Link
            href="/journeys/condo-mcst-exit"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Condo MCST exit
          </Link>{" "}
          ·{" "}
          <Link
            href="/tools/school-device-bond"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            School device bond
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
