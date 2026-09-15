import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Tools",
  description:
    "Singapore expat utilities — first-month cash, lease stamp duty, diplomatic-clause notice dates, cost of living, Employment Pass salary threshold, school deposit clawback, foreign licence clock, school device bond, school CCA kit bond, and school exam / IB deposit.",
  path: "/tools",
});

const tools = [
  {
    href: "/tools/setup-cash",
    title: "First-month cash sketch",
    summary:
      "Advance rent, deposit, agent fee, IRAS lease duty, and temp housing — the LOI-week cash question.",
  },
  {
    href: "/tools/lease-duty",
    title: "Lease stamp duty",
    summary:
      "IRAS tenancy lease duty only — 0.4% of total rent (≤4 years), 4× AAR for longer leases, AAR exemption.",
  },
  {
    href: "/tools/lease-notice",
    title: "Diplomatic clause notice",
    summary:
      "Sketch lock-in + written notice dates on a typical 12/24-month TA before you resign or book flights.",
  },
  {
    href: "/tools/cost-of-living",
    title: "Cost of living sketch",
    summary:
      "Household × housing band estimates in SGD. Orientation, not a spreadsheet replacement.",
  },
  {
    href: "/tools/ep-threshold",
    title: "EP qualifying salary",
    summary:
      "Age-progressive Employment Pass floors from MOM tables, including the 1 Jan 2027 uplift.",
  },
  {
    href: "/tools/school-deposit-clawback",
    title: "School deposit clawback",
    summary:
      "Sketch mid-year deposit forfeiture and remaining tuition cash at risk — not handbook advice.",
  },
  {
    href: "/tools/foreign-licence-clock",
    title: "Foreign licence clock",
    summary:
      "Sketch common foreign-licence windows from arrival or pass issue — orientation, not SPF advice.",
  },
  {
    href: "/tools/school-device-bond",
    title: "School device bond",
    summary:
      "Sketch iPad / 1:1 device bond return vs damage holds and overdue fees — not handbook advice.",
  },
  {
    href: "/tools/school-cca-kit-bond",
    title: "School CCA kit bond",
    summary:
      "Sketch CCA kit / instrument / sports gear bond return vs damage holds and overdue fees — not handbook advice.",
  },
  {
    href: "/tools/school-exam-ib-deposit",
    title: "School exam / IB deposit",
    summary:
      "Sketch exam / IB / checkpoint deposit return vs partial holds and late-cancel forfeiture — not handbook advice.",
  },
  {
    href: "/tools/helper-levy-final-month",
    title: "Helper levy final month",
    summary:
      "Sketch FDW final-month levy for keep-through-month, mid-month cancel, and transfer-out — not MOM filing advice.",
  },
  {
    href: "/tools/bank-statement-archive",
    title: "Bank statement archive",
    summary:
      "Sketch months of statements still to pull before account close — self-serve PDF vs reprint fees — not bank advice.",
  },
] as const;

export default function ToolsIndexPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          collectionPageJsonLd({
            name: "Tools",
            description:
              "First-month cash, lease duty, diplomatic-clause notice, COL, and Employment Pass threshold utilities for Singapore expats.",
            path: "/tools",
            items: tools.map((tool) => ({
              name: tool.title,
              path: tool.href,
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
        eyebrow="Tools"
        title="Calculators as support — never the homepage."
        summary="Light utilities tucked under Journeys. Use them when a checklist or playbook points here."
      />

      <div className="mx-auto max-w-[var(--max-page)] px-5 py-14 sm:px-8">
        <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <StaggerItem key={tool.href}>
              <Link href={tool.href} className="group block no-underline">
                <h2 className="font-display text-2xl text-ink group-hover:text-canopy">
                  {tool.title}
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
                  {tool.summary}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn className="mt-16 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link
            href="/journeys"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← Back to journeys
          </Link>
          <Link
            href="/money"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Money pillar →
          </Link>
          <Link
            href="/move"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Move pillar →
          </Link>
        </FadeIn>
      </div>
    </>
  );
}
