import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getChecklists } from "@/lib/content";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Journeys",
  description:
    "Four doors: pre-arrival, first 90 days, between jobs, and leaving Singapore — plus the exit playbooks those sequences call.",
  path: "/journeys",
});

const DOORS = [
  {
    href: "/journeys/pre-arrival",
    label: "Pre-arrival",
    blurb: "IPA pack, Arrival Card, cash bridge, family joining later.",
  },
  {
    href: "/journeys/arriving",
    label: "First 90 days",
    blurb: "7 / 30 / 90 checklists once you land.",
  },
  {
    href: "/journeys/between-jobs",
    label: "Between jobs",
    blurb: "STVP buffer, IR21 vs stay-and-rehire, Dependant Pass risk.",
  },
  {
    href: "/journeys/leaving",
    label: "Leaving",
    blurb: "IR21, deposits, shipping, pass cancel — work backwards from the flight.",
  },
] as const;

const EXITS = [
  { href: "/journeys/family-joining", title: "Family joining" },
  { href: "/journeys/loc-dp-work-rights", title: "LOC / DP work rights" },
  { href: "/journeys/newborn-special-pass", title: "Newborn Special Pass" },
  { href: "/journeys/graduate-pass-bridge", title: "Graduate pass bridge" },
  { href: "/journeys/singpass-myinfo-exit", title: "Singpass / Myinfo exit" },
  { href: "/journeys/bank-exit-closure", title: "Bank exit closure" },
  { href: "/journeys/mail-forward-exit", title: "Mail forward" },
  { href: "/journeys/utility-exit-handover", title: "Utility handover" },
  { href: "/journeys/utility-meter-photo-handoff", title: "Utility meter photo" },
  { href: "/journeys/mover-lift-booking", title: "Mover lift booking" },
  { href: "/journeys/condo-mcst-exit", title: "Condo MCST exit" },
  { href: "/journeys/condo-visitor-qr-exit", title: "Visitor QR revoke" },
  { href: "/journeys/condo-visitor-parking-clear", title: "Visitor parking" },
  { href: "/journeys/condo-access-card-deposit", title: "Access-card deposit" },
  { href: "/journeys/condo-ev-charger-clear", title: "EV charger clear" },
  { href: "/journeys/condo-bike-storage-clear", title: "Bike storage clear" },
  { href: "/journeys/parking-iu-erp-exit", title: "IU / ERP exit" },
  { href: "/journeys/workplace-access-exit", title: "Workplace access" },
  { href: "/journeys/helper-handoff-exit", title: "Helper handoff" },
  { href: "/journeys/pets-reexport", title: "Pets re-export" },
  { href: "/journeys/cpf-nomination-exit", title: "CPF nomination" },
  { href: "/journeys/pharmacy-chronic-script-exit", title: "Pharmacy last refill" },
  { href: "/journeys/hospital-cash-deposit", title: "Hospital cash deposit" },
  { href: "/journeys/childcare-infant-care-exit", title: "Childcare exit" },
  { href: "/journeys/school-bus-cca-exit", title: "School bus / CCA" },
  { href: "/journeys/school-locker-clear", title: "School locker" },
  { href: "/journeys/gym-membership-freeze-exit", title: "Gym freeze / exit" },
] as const;

export default async function JourneysIndexPage() {
  const checklists = await getChecklists();
  const arriving = ["day-7", "day-30", "day-90"].map((phase) =>
    checklists.find((c) => c.phase === phase),
  );
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          collectionPageJsonLd({
            name: "Journeys",
            description:
              "Pre-arrival, first 90 days, between jobs, and leaving Singapore.",
            path: "/journeys",
            items: DOORS.map((door) => ({
              name: door.label,
              path: door.href,
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
        eyebrow="Journeys"
        title="Four doors. The rest are details."
        summary="Pre-arrival, first 90 days, between jobs, leaving. Micro-exits sit under those sequences — not ahead of them."
      />

      <div className="mx-auto max-w-[var(--max-page)] px-5 py-14 sm:px-8">
        <div className="grid gap-8 border-b border-ink sm:grid-cols-2">
          {DOORS.map((door, i) => (
            <Link
              key={door.href}
              href={door.href}
              className="group block border-t border-ink/15 py-6 no-underline first:border-t-0 sm:[&:nth-child(-n+2)]:border-t-0"
            >
              <p className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-tungsten">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 font-display text-2xl font-medium text-ink group-hover:text-canopy">
                {door.label}
              </h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-muted">
                {door.blurb}
              </p>
            </Link>
          ))}
        </div>

        <h2 className="mt-16 font-display text-2xl font-medium tracking-tight text-ink">
          First 90 days
        </h2>
        <p className="mt-3 max-w-xl text-ink-muted">
          Pair with the{" "}
          <Link
            href="/arriving"
            className="font-semibold text-canopy no-underline underline-offset-4 hover:underline"
          >
            Arriving hub
          </Link>
          .
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {arriving.map((c) =>
            c ? (
              <Link
                key={c.slug}
                href={`/journeys/arriving/${c.phase}`}
                className="group block border-b border-ink/15 pb-6 no-underline"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-tungsten">
                  {c.phase.replace("day-", "")} days
                </p>
                <h3 className="mt-2 font-display text-xl text-ink group-hover:text-canopy">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {c.summary}
                </p>
              </Link>
            ) : null,
          )}
        </div>

        <h2 className="mt-16 font-display text-2xl font-medium tracking-tight text-ink">
          Exit details
        </h2>
        <p className="mt-3 max-w-xl text-ink-muted">
          Called from the leaving playbook when that line item is yours.
        </p>
        <ul className="mt-8 columns-1 gap-x-12 sm:columns-2 lg:columns-3">
          {EXITS.map((item) => (
            <li key={item.href} className="mb-3 break-inside-avoid">
              <Link
                href={item.href}
                className="text-sm font-medium text-canopy no-underline underline-offset-4 hover:underline"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-14 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-semibold text-canopy no-underline underline-offset-4 hover:underline"
          >
            Supporting tools →
          </Link>
        </p>
      </div>
    </>
  );
}
