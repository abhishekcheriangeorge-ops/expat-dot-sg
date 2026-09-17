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
    "Singapore expat utilities — first-month cash, lease stamp duty, diplomatic-clause notice dates, cost of living, Employment Pass salary threshold, school deposit clawback, foreign licence clock, school device bond, school CCA kit bond, school exam / IB deposit, and school bus last-week float.",
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
      "Household × housing band estimates in SGD. Treat it as a starting sketch.",
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
      "Sketch mid-year deposit forfeiture and remaining tuition cash at risk. Check the school handbook before you act.",
  },
  {
    href: "/tools/foreign-licence-clock",
    title: "Foreign licence clock",
    summary:
      "Sketch common foreign-licence windows from arrival or pass issue. Confirm against Traffic Police guidance.",
  },
  {
    href: "/tools/school-device-bond",
    title: "School device bond",
    summary:
      "Sketch iPad / 1:1 device bond return vs damage holds and overdue fees. Ask the school for its current schedule.",
  },
  {
    href: "/tools/school-cca-kit-bond",
    title: "School CCA kit bond",
    summary:
      "Sketch CCA kit / instrument / sports gear bond return vs damage holds and overdue fees. Confirm against the CCA bond form.",
  },
  {
    href: "/tools/school-exam-ib-deposit",
    title: "School exam / IB deposit",
    summary:
      "Sketch exam / IB / checkpoint deposit return vs partial holds and late-cancel forfeiture under the exam board refund rules.",
  },
  {
    href: "/tools/helper-levy-final-month",
    title: "Helper levy final month",
    summary:
      "Sketch FDW final-month levy for keep-through-month, mid-month cancel, and transfer-out, then check MOM levy tables.",
  },
  {
    href: "/tools/bank-statement-archive",
    title: "Bank statement archive",
    summary:
      "Sketch months of statements still to pull before account close — self-serve PDF vs reprint fees. Your bank sets the timelines.",
  },
  {
    href: "/tools/school-bus-last-week-float",
    title: "School bus last-week float",
    summary:
      "Sketch last-week bus cash for ride-through, early cancel with notice shortfall, and no-show forfeit, then check the operator terms.",
  },
  {
    href: "/tools/pharmacy-last-refill-float",
    title: "Pharmacy last-refill float",
    summary:
      "Sketch last-refill cash for polyclinic refill, private top-up, and travel fills — not clinical or HSA advice.",
  },
  {
    href: "/tools/tax-residency",
    title: "Tax residency days",
    summary:
      "Count presence days against the 183-day calendar-year test. Built for first-year EP holders and between-jobs gaps.",
  },
  {
    href: "/tools/ipa-window",
    title: "IPA enter-and-issue window",
    summary:
      "The common six-month MOM window from IPA letter to entry and issuance, plus extension lead time.",
  },
  {
    href: "/tools/ir21-withhold",
    title: "IR21 withhold timeline",
    summary:
      "Sketch employer tax-clearance windows from a planned last day, and the cash held while you wait.",
  },
  {
    href: "/tools/cpf-withdrawal",
    title: "CPF withdrawal timing",
    summary:
      "Count backwards from departure across common processing windows so the application starts in time.",
  },
  {
    href: "/tools/agent-commission",
    title: "Agent commission",
    summary:
      "Tenancy commission as months of rent, tenant or landlord side, with optional 9% GST.",
  },
  {
    href: "/tools/car-coe-exit",
    title: "Car / COE exit",
    summary:
      "Sale, export, or transfer cash: proceeds, PARF/COE rebate hope, loan, fees, and prepaid parking burn.",
  },
  {
    href: "/tools/fdw-levy",
    title: "FDW levy",
    summary:
      "Monthly helper levy across concessionary, full, and subsequent-helper bands, times months.",
  },
  {
    href: "/tools/fibre-broadband-etf",
    title: "Fibre broadband ETF",
    summary:
      "Serve the remaining months, pay the ETF, or transfer the line — priced side by side.",
  },
  {
    href: "/tools/clinic-deposit-exit",
    title: "Clinic deposit exit",
    summary:
      "GP and dental deposit return vs unused packages, no-show fees, and records-release holds.",
  },
  {
    href: "/tools/club-deposit-exit",
    title: "Club deposit exit",
    summary:
      "Resignation cash: deposit refund hope, notice-month dues, admin fees, and prepaid burn.",
  },
  {
    href: "/tools/school-withdrawal",
    title: "School withdrawal notice",
    summary:
      "The written-notice deadline from your contract's notice weeks and last-attendance date.",
  },
  {
    href: "/tools/school-leavers-fee",
    title: "School leavers fee",
    summary:
      "Core leavers fees, yearbook charges, and optional packs for mid-year exits, with sibling maths.",
  },
  {
    href: "/tools/tuition-centre-bond",
    title: "Tuition centre bond",
    summary:
      "Bond return vs unused package value, notice fees, and materials holds.",
  },
  {
    href: "/tools/hdb-reno-deposit",
    title: "HDB reno deposit return",
    summary:
      "Permit deposit refund timing and cash at risk after reinstatement inspection.",
  },
  {
    href: "/tools/sim-otp-keep",
    title: "SIM / OTP keep",
    summary:
      "Keep, port, or drop the +65 number while Singpass and bank OTPs still need it.",
  },
  {
    href: "/tools/storage-months",
    title: "Storage months",
    summary:
      "Temporary storage as monthly band times months, plus insurance and access fees.",
  },
  {
    href: "/tools/driving-insurance-gap",
    title: "Driving insurance gap",
    summary:
      "Extend cover, daily float, or Grab-only for the weeks after the school bus ends.",
  },
  {
    href: "/tools/insurance-portability-float",
    title: "Insurance portability float",
    summary:
      "Extend Singapore cover, bridge with travel medical, or cancel and start destination cover.",
  },
  {
    href: "/tools/pet-quarantine-float",
    title: "Pet quarantine float",
    summary:
      "Vet docs, crate and airline fees, and arrival kennel cash for leaving with a pet.",
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
      <div className="border-b border-ink/15">
        <div className="mx-auto max-w-[var(--max-page)] px-5 pt-10 sm:px-8">
          <Breadcrumbs items={crumbs} />
        </div>
      </div>
      <JourneyHero
        eyebrow="Tools"
        title="Calculators as support — never the homepage."
        summary="Light utilities tucked under Journeys. Use them when a checklist or playbook points here."
      />

      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <Stagger className="grid gap-x-8 border-b border-ink sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, i) => (
            <StaggerItem
              key={tool.href}
              className="border-t border-ink/15 py-6 first:border-t-0 sm:[&:nth-child(-n+2)]:border-t-0 lg:[&:nth-child(-n+3)]:border-t-0"
            >
              <Link
                href={tool.href}
                className="group block rounded-sm no-underline focus-visible:outline-2 focus-visible:outline-tungsten"
              >
                <p
                  aria-hidden="true"
                  className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-tungsten"
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 font-display text-2xl font-medium text-ink transition-colors group-hover:text-canopy">
                  {tool.title}
                </h2>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-muted">
                  {tool.summary}
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.1em] text-ink-faint transition-colors group-hover:text-tungsten">
                  Calculate <span aria-hidden="true">→</span>
                </p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link
            href="/journeys"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            <span aria-hidden="true">←</span> Back to journeys
          </Link>
          <Link
            href="/money"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Money pillar <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/move"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Move pillar <span aria-hidden="true">→</span>
          </Link>
        </FadeIn>
      </div>
    </>
  );
}
