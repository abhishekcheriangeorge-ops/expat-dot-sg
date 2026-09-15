import type { Metadata } from "next";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd, RelatedHubs } from "@/components/seo";
import { AgentCommissionCalculator } from "@/components/tools";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";
import { webApplicationJsonLd } from "@/lib/seo-howto";

const title = "Tenancy agent commission sketch";
const description =
  "Sketch Singapore residential rental agent commission as months of rent — tenant or landlord side — with optional 9% GST.";
const path = "/tools/agent-commission";

const RELATED = [
  { href: "/tools", label: "All tools" },
  { href: "/tools/setup-cash", label: "First-month cash" },
  { href: "/tools/lease-duty", label: "Lease stamp duty" },
  { href: "/journeys/graduate-pass-bridge", label: "Graduate pass bridge" },
  { href: "/home", label: "Home pillar" },
  { href: "/neighbourhoods", label: "Neighbourhoods" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default function AgentCommissionToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "Agent commission", path },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          webApplicationJsonLd({ name: title, description, path }),
          collectionPageJsonLd({
            name: `${title} — related`,
            description,
            path,
            items: RELATED.map((item) => ({
              name: item.label,
              path: item.href,
            })),
          }),
        ]}
      />
      <div className="border-b border-fog-soft">
        <div className="mx-auto max-w-[var(--max-page)] px-5 pt-10 sm:px-8">
          <Breadcrumbs items={crumbs} />
        </div>
      </div>
      <JourneyHero
        eyebrow="Tools · Home"
        title="Agent fee in months of rent."
        summary="LOI week often hides a half-month or full-month commission plus GST. Sketch the payable before you transfer."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <AgentCommissionCalculator />
        <div className="mt-12">
          <RelatedHubs hubs={RELATED} />
        </div>
      </div>
    </>
  );
}
