import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import {
  getChecklists,
  getCondoEvChargerClearPlaybook,
  getCondoVisitorParkingClearPlaybook,
  getUtilityMeterPhotoHandoffPlaybook,
  getCondoVisitorQrExitPlaybook,
  getLeavingPlaybook,
  getMoverLiftBookingPlaybook,
  getPreArrivalPlaybook,
  getSingpassMyinfoExitPlaybook,
} from "@/lib/content";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Journeys",
  description:
    "Pre-arrival playbook, arriving 7/30/90 checklists, Singpass/Myinfo exit, mover lift booking, condo visitor QR revoke, condo EV charger clear, utility meter photo handoff, condo visitor parking clear, and the Leaving Singapore playbook — practical sequences for expat life transitions.",
  path: "/journeys",
});

export default async function JourneysIndexPage() {
  const [
    checklists,
    playbook,
    preArrival,
    singpassExit,
    moverLift,
    condoVisitorQr,
    condoEvCharger,
    utilityMeterPhoto,
    condoVisitorParking,
  ] = await Promise.all([
    getChecklists(),
    getLeavingPlaybook(),
    getPreArrivalPlaybook(),
    getSingpassMyinfoExitPlaybook(),
    getMoverLiftBookingPlaybook(),
    getCondoVisitorQrExitPlaybook(),
    getCondoEvChargerClearPlaybook(),
    getUtilityMeterPhotoHandoffPlaybook(),
    getCondoVisitorParkingClearPlaybook(),
  ]);

  const arriving = ["day-7", "day-30", "day-90"]
    .map((phase) => checklists.find((c) => c.phase === phase))
    .filter(Boolean);

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
              "Pre-arrival playbook, arriving checklists, and Leaving Singapore.",
            path: "/journeys",
            items: [
              {
                name: preArrival?.title ?? "Pre-arrival",
                path: "/journeys/pre-arrival",
              },
              ...arriving
                .filter(Boolean)
                .map((c) => ({
                  name: c!.title,
                  path: `/journeys/arriving/${c!.phase}`,
                })),
              {
                name: singpassExit?.title ?? "Singpass / Myinfo exit",
                path: "/journeys/singpass-myinfo-exit",
              },
              {
                name: moverLift?.title ?? "Mover lift / loading-bay booking",
                path: "/journeys/mover-lift-booking",
              },
              {
                name: condoVisitorQr?.title ?? "Condo visitor QR revoke",
                path: "/journeys/condo-visitor-qr-exit",
              },
              {
                name: condoEvCharger?.title ?? "Condo EV charger / lot clear",
                path: "/journeys/condo-ev-charger-clear",
              },
              {
                name:
                  utilityMeterPhoto?.title ?? "Utility meter photo handoff",
                path: "/journeys/utility-meter-photo-handoff",
              },
              {
                name:
                  condoVisitorParking?.title ??
                  "Condo visitor parking / loading-bay clear",
                path: "/journeys/condo-visitor-parking-clear",
              },
              {
                name: playbook?.title ?? "Leaving Singapore",
                path: "/journeys/leaving",
              },
            ],
          }),
        ]}
      />
      <div className="border-b border-fog-soft">
        <div className="mx-auto max-w-[var(--max-page)] px-5 pt-10 sm:px-8">
          <Breadcrumbs items={crumbs} />
        </div>
      </div>
      <JourneyHero
        eyebrow="Journeys"
        title="Before you land, after you land — and when you leave."
        summary="Interior utilities for the weeks that matter. Not a dashboard; a calm sequence you can tick through."
      />

      <div className="mx-auto max-w-[var(--max-page)] px-5 py-14 sm:px-8">
        <FadeIn className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-tungsten">
            Before wheels-down
          </p>
          <h2 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
            {preArrival?.title ?? "Pre-arrival"}
          </h2>
          <p className="mt-3 max-w-xl text-ink-muted">
            {preArrival?.summary ??
              "IPA pack, Arrival Card window, cash bridge, and family joining later."}
          </p>
          <Link
            href="/journeys/pre-arrival"
            className="mt-6 inline-flex border border-ink/20 px-5 py-3 text-sm font-semibold text-ink no-underline hover:border-ink/40"
          >
            Open pre-arrival playbook
          </Link>
        </FadeIn>

        <FadeIn>
          <h2 className="font-display text-2xl text-ink sm:text-3xl">
            Arriving · first 90 days
          </h2>
          <p className="mt-3 max-w-xl text-ink-muted">
            Three horizons so the first week stays humane and the third month
            still has a list. Pair with the{" "}
            <Link
              href="/arriving"
              className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
            >
              Arriving hub
            </Link>{" "}
            and{" "}
            <Link
              href="/move"
              className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
            >
              Move pillar
            </Link>
            .
          </p>
        </FadeIn>

        <Stagger className="mt-10 grid gap-6 sm:grid-cols-3">
          {arriving.map((c) =>
            c ? (
              <StaggerItem key={c.slug}>
                <Link
                  href={`/journeys/arriving/${c.phase}`}
                  className="group block border-b border-fog-soft pb-6 no-underline"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-tungsten">
                    {c.phase.replace("day-", "")} days
                  </p>
                  <h3 className="mt-2 font-display text-xl text-ink group-hover:text-canopy">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {c.summary}
                  </p>
                </Link>
              </StaggerItem>
            ) : null,
          )}
        </Stagger>

        <FadeIn className="mt-16 border-t border-fog-soft pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-tungsten">
            Digital exit
          </p>
          <h2 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
            {singpassExit?.title ?? "Singpass / Myinfo exit"}
          </h2>
          <p className="mt-3 max-w-xl text-ink-muted">
            {singpassExit?.summary ??
              "Login grace vs status, Myinfo cut-off, and OTP hygiene."}{" "}
            Pair with{" "}
            <Link
              href="/tools/school-deposit-clawback"
              className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
            >
              /tools/school-deposit-clawback
            </Link>{" "}
            when mid-year school cash is still open.
          </p>
          <Link
            href="/journeys/singpass-myinfo-exit"
            className="mt-6 inline-flex border border-ink/20 px-5 py-3 text-sm font-semibold text-ink no-underline hover:border-ink/40"
          >
            Open Singpass exit playbook
          </Link>
        </FadeIn>

        <FadeIn className="mt-16 border-t border-fog-soft pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-tungsten">
            Movers day
          </p>
          <h2 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
            {moverLift?.title ?? "Mover lift / loading-bay booking"}
          </h2>
          <p className="mt-3 max-w-xl text-ink-muted">
            {moverLift?.summary ??
              "Service lift, loading bay, and pad rules before the truck arrives."}{" "}
            Pair with{" "}
            <Link
              href="/tools/foreign-licence-clock"
              className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
            >
              /tools/foreign-licence-clock
            </Link>{" "}
            if you still need to drive through load-out.
          </p>
          <Link
            href="/journeys/mover-lift-booking"
            className="mt-6 inline-flex border border-ink/20 px-5 py-3 text-sm font-semibold text-ink no-underline hover:border-ink/40"
          >
            Open mover lift playbook
          </Link>
        </FadeIn>

        <FadeIn className="mt-16 border-t border-fog-soft pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-tungsten">
            Condo digital access
          </p>
          <h2 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
            {condoVisitorQr?.title ?? "Condo visitor QR revoke"}
          </h2>
          <p className="mt-3 max-w-xl text-ink-muted">
            {condoVisitorQr?.summary ??
              "Guest QR, helper codes, and delivery PINs before MCST card return."}{" "}
            Pair with{" "}
            <Link
              href="/tools/school-device-bond"
              className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
            >
              /tools/school-device-bond
            </Link>{" "}
            if kids still hold school iPads through checkout week.
          </p>
          <Link
            href="/journeys/condo-visitor-qr-exit"
            className="mt-6 inline-flex border border-ink/20 px-5 py-3 text-sm font-semibold text-ink no-underline hover:border-ink/40"
          >
            Open visitor QR revoke playbook
          </Link>
        </FadeIn>

        <FadeIn className="mt-16 border-t border-fog-soft pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-tungsten">
            Condo EV exit
          </p>
          <h2 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
            {condoEvCharger?.title ?? "Condo EV charger / lot clear"}
          </h2>
          <p className="mt-3 max-w-xl text-ink-muted">
            {condoEvCharger?.summary ??
              "Reserved EV bays, wallbox deposits, and visitor-charging PINs before MCST handover."}{" "}
            Pair with{" "}
            <Link
              href="/tools/school-cca-kit-bond"
              className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
            >
              /tools/school-cca-kit-bond
            </Link>{" "}
            if CCA kit bonds settle the same fortnight.
          </p>
          <Link
            href="/journeys/condo-ev-charger-clear"
            className="mt-6 inline-flex border border-ink/20 px-5 py-3 text-sm font-semibold text-ink no-underline hover:border-ink/40"
          >
            Open EV charger clear playbook
          </Link>
        </FadeIn>

        <FadeIn className="mt-16 border-t border-fog-soft pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-tungsten">
            Utility meter exit
          </p>
          <h2 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
            {utilityMeterPhoto?.title ?? "Utility meter photo handoff"}
          </h2>
          <p className="mt-3 max-w-xl text-ink-muted">
            {utilityMeterPhoto?.summary ??
              "Dated meter photos and final-read alignment before landlord checkout."}{" "}
            Pair with{" "}
            <Link
              href="/tools/school-exam-ib-deposit"
              className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
            >
              /tools/school-exam-ib-deposit
            </Link>{" "}
            if exam / IB deposits settle the same fortnight.
          </p>
          <Link
            href="/journeys/utility-meter-photo-handoff"
            className="mt-6 inline-flex border border-ink/20 px-5 py-3 text-sm font-semibold text-ink no-underline hover:border-ink/40"
          >
            Open meter photo handoff playbook
          </Link>
        </FadeIn>

        <FadeIn className="mt-16 border-t border-fog-soft pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-tungsten">
            Condo visitor parking
          </p>
          <h2 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
            {condoVisitorParking?.title ??
              "Condo visitor parking / loading-bay clear"}
          </h2>
          <p className="mt-3 max-w-xl text-ink-muted">
            {condoVisitorParking?.summary ??
              "Visitor bay QR, loading slots, and guest tags before MCST handover."}{" "}
            Pair with{" "}
            <Link
              href="/tools/helper-levy-final-month"
              className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
            >
              /tools/helper-levy-final-month
            </Link>{" "}
            if helper final-levy cash settles the same fortnight.
          </p>
          <Link
            href="/journeys/condo-visitor-parking-clear"
            className="mt-6 inline-flex border border-ink/20 px-5 py-3 text-sm font-semibold text-ink no-underline hover:border-ink/40"
          >
            Open visitor parking clear playbook
          </Link>
        </FadeIn>

        <FadeIn className="mt-16 border-t border-fog-soft pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-tungsten">
            Next
          </p>
          <h2 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
            {playbook?.title ?? "Leaving Singapore"}
          </h2>
          <p className="mt-3 max-w-xl text-ink-muted">
            {playbook?.summary ??
              "Tax clearance, deposits, shipping, and pass cancellation."}{" "}
            Deep narrative lives in the{" "}
            <Link
              href="/next"
              className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
            >
              Next pillar
            </Link>
            . Sketch diplomatic-clause dates on{" "}
            <Link
              href="/tools/lease-notice"
              className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
            >
              /tools/lease-notice
            </Link>{" "}
            before you serve notice.
          </p>
          <Link
            href="/journeys/leaving"
            className="mt-6 inline-flex bg-canopy px-5 py-3 text-sm font-semibold text-paper no-underline hover:bg-canopy-mist"
          >
            Open leaving playbook
          </Link>
        </FadeIn>

        <FadeIn className="mt-14">
          <p className="text-sm text-ink-faint">
            Prefer numbers?{" "}
            <Link
              href="/tools"
              className="font-medium text-canopy no-underline hover:text-canopy-mist"
            >
              Light COL, lease, and EP threshold tools
            </Link>{" "}
            live one level down — never on the homepage.
          </p>
        </FadeIn>
      </div>
    </>
  );
}
