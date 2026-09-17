import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getNewbornSpecialPassPlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Newborn Special Pass",
  description:
    "Baby born in Singapore on an EP household — ICA Special Pass clock, Dependant Pass filing, and what not to confuse with family joining from abroad.",
  path: "/journeys/newborn-special-pass",
});

export default async function NewbornSpecialPassJourneyPage() {
  const playbook = await getNewbornSpecialPassPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "Newborn Special Pass", path: "/journeys/newborn-special-pass" },
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
        eyebrow="Family · Newborn"
        title={playbook.title}
        summary="Diary the Special Pass expiry the day it is issued — passport and Dependant Pass work run in parallel, not after."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <p className="text-sm text-ink-faint">
          Related{" "}
          <Link
            href="/journeys/family-joining"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Family joining later
          </Link>{" "}
          ·{" "}
          <Link
            href="/tools/ipa-window"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            IPA window
          </Link>{" "}
          ·{" "}
          <Link
            href="/tools/sim-otp-keep"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            SIM / OTP keep sketch
          </Link>
        </p>
      </div>
    </>
  );
}
