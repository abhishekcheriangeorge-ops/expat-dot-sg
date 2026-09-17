import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getGymMembershipFreezeExitPlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Gym membership freeze / exit",
  description:
    "Leaving Singapore with gym and boutique fitness memberships still billing — freeze vs cancel clocks, access fobs, and same-week stack with school leavers fees.",
  path: "/journeys/gym-membership-freeze-exit",
});

export default async function GymMembershipFreezeExitJourneyPage() {
  const playbook = await getGymMembershipFreezeExitPlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    {
      name: "Gym membership freeze / exit",
      path: "/journeys/gym-membership-freeze-exit",
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
        eyebrow="Belong · Fitness exit"
        title={playbook.title}
        summary="Get freeze and cancel quotes in writing — leaving Singapore does not always unlock a free exit."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <p className="text-sm text-ink-faint">
          Related:{" "}
          <Link
            href="/tools/school-leavers-fee"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            School leavers fee
          </Link>{" "}
          ·{" "}
          <Link
            href="/tools/club-deposit-exit"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Club deposit exit
          </Link>{" "}
          ·{" "}
          <Link
            href="/journeys/leaving"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Leaving Singapore
          </Link>
        </p>
      </div>
    </>
  );
}
