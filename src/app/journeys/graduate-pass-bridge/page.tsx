import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JourneyHero, LeavingPlaybookView } from "@/components/journeys";
import { Breadcrumbs, JsonLd, RelatedHubs } from "@/components/seo";
import { getGraduatePassBridgePlaybook } from "@/lib/content";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import { howToJsonLd } from "@/lib/seo-howto";

const title = "Student / graduate pass bridge";
const description =
  "Playbook for Student’s Pass or training permissions ending — EP / Training EP / exit timing so the post-graduation gap stays lawful.";
const path = "/journeys/graduate-pass-bridge";

const RELATED = [
  { href: "/tools/ep-threshold", label: "EP salary floors" },
  { href: "/tools/agent-commission", label: "Agent commission sketch" },
  { href: "/journeys/between-jobs", label: "Between-jobs playbook" },
  { href: "/journeys/loc-dp-work-rights", label: "DP / LOC work rights" },
  { href: "/next", label: "Next pillar" },
  { href: "/tools", label: "All tools" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default async function GraduatePassBridgeJourneyPage() {
  const playbook = await getGraduatePassBridgePlaybook();
  if (!playbook) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
    { name: "Graduate pass bridge", path },
  ];

  const howTo = howToJsonLd({
    name: playbook.title,
    description: playbook.summary,
    path,
    steps: playbook.sections.map((section) => ({
      name: section.title,
      text: section.body,
    })),
  });

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          collectionPageJsonLd({
            name: title,
            description,
            path,
            items: RELATED.map((item) => ({
              name: item.label,
              path: item.href,
            })),
          }),
          ...(howTo ? [howTo] : []),
        ]}
      />
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
        <RelatedHubs hubs={RELATED} />
      </div>
    </>
  );
}
