import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getMobilePostpaidExitPlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Mobile postpaid / telco contract exit",
  description:
    "Leaving Singapore with a postpaid mobile line still in contract — inventory handsets and add-ons, serve written cancel notice, and float ETF plus final-bill cash before SIM and Singpass factors change.",
  path: "/journeys/mobile-postpaid-exit",
});

export default async function MobilePostpaidExitJourneyPage() {
  const playbook = await getMobilePostpaidExitPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    {
      name: "Mobile postpaid exit",
      path: "/journeys/mobile-postpaid-exit",
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
        eyebrow="Life · Telco exit"
        title={playbook.title}
        summary="File written cancel and float ETF while the number still works — telco invoices do not rebuild from folklore after you fly."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <p className="text-sm text-ink-faint">
          Related:{" "}
          <Link
            href="/tools/mobile-contract-etf-float"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Mobile contract ETF float
          </Link>{" "}
          ·{" "}
          <Link
            href="/tools/sim-otp-keep"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            SIM OTP keep
          </Link>{" "}
          ·{" "}
          <Link
            href="/tools/fibre-broadband-etf"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Fibre broadband ETF
          </Link>
        </p>
      </div>
    </>
  );
}
