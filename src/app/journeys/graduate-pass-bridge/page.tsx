import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getGraduatePassBridgePlaybook } from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Student / graduate pass bridge",
  description:
    "Playbook for Student’s Pass or training permissions ending — EP / Training EP / exit timing so the post-graduation gap stays lawful.",
  path: "/journeys/graduate-pass-bridge",
});

export default async function GraduatePassBridgeJourneyPage() {
  const playbook = await getGraduatePassBridgePlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "Graduate pass bridge", path: "/journeys/graduate-pass-bridge" },
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
        eyebrow="Next · Graduate bridge"
        title={playbook.title}
        summary="A job offer is not a pass. Sequence EP or Training EP issuance — or exit — before the Student’s Pass dies."
        lastReviewed={playbook.lastReviewed}
      />
      <LeavingPlaybookView playbook={playbook} />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pb-14 sm:px-8">
        <p className="text-sm text-ink-faint">
          Related:{" "}
          <Link
            href="/tools/ep-threshold"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            EP salary floors
          </Link>{" "}
          ·{" "}
          <Link
            href="/tools/agent-commission"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Agent commission sketch
          </Link>{" "}
          ·{" "}
          <Link
            href="/journeys/between-jobs"
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            Between-jobs playbook
          </Link>
        </p>
      </div>
    </>
  );
}
