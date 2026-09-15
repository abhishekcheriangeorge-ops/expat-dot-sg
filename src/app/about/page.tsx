import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About",
  description:
    "expat.sg is the operating system for Singapore expat life — editorial guides, directories, and dual journeys for arriving and living.",
  path: "/about",
});

export default function AboutPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <article className="mx-auto w-full max-w-[var(--max-page)] px-5 py-16 sm:px-8 sm:py-24">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumbs items={crumbs} className="mb-8 text-sm text-ink-faint" />
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-tungsten">
          Trust
        </p>
        <h1 className="font-display mt-4 text-4xl leading-tight text-ink sm:text-5xl">
          About expat.sg
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-muted">
          expat.sg is a magazine-grade operating system for Singapore expat
          life — the site you open when you get the offer, and still use in
          year three.
        </p>
      </header>

      <div className="mt-14 max-w-[var(--max-prose)] space-y-8 text-base leading-relaxed text-ink-muted">
        <section>
          <h2 className="font-display text-2xl text-ink">What we are</h2>
          <p className="mt-3">
            We cover the full lifecycle across pillars — Move, Money, Home,
            Family, Belong, Life, and Next — from visas and first housing through
            neighbourhood decisions, schools and healthcare, clubs and
            communities, renewals, PR and citizenship strategy, and leaving well.
            Content is dual-labeled for{" "}
            <Link href="/arriving" className="text-canopy underline">
              Arriving
            </Link>{" "}
            and{" "}
            <Link href="/living" className="text-canopy underline">
              Living
            </Link>{" "}
            so you can enter either mode without splitting into two sites.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ink">What we are not</h2>
          <p className="mt-3">
            We are not a property inventory, an events social graph, an open
            unmoderated forum, or a clone of third-party “expat Singapore”
            roundups. We cite official sources (MOM, ICA, IRAS, CMPB, and peers)
            and show last-reviewed dates on editorial guides. Sponsored content
            is always labeled. Guides are orientation — not legal, tax, or
            immigration advice for your file.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ink">How we earn trust</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              Editorial guides with citations and review dates — see our{" "}
              <Link href="/editorial-policy" className="text-canopy underline">
                editorial policy
              </Link>
              .
            </li>
            <li>
              Research that starts from real reader questions (forums, Reddit,
              agency FAQs), then maps gaps to primary sources — not recycled
              listicles. High-stakes Next topics (REP clocks, citizenship ORAL,
              adult SC renunciation, NRIC loss / re-registration / name change,
              child and spouse PR sponsorship, aged-parent PR vs LTVP,
              spouse LTVP / PMLA, PLOC / LOC work rights, student PR,
              EP job-loss → spouse LTVP bridges, Right of Entry for under-21
              dual-passport SCs, citizenship confirmation letters,
              REP passport transfers, REP after lost passport / ETD,
              CPF nomination Singpass witnesses, COMPASS firm scores on
              EP renewal, NS liability before PR / citizenship, TADM
              salary claim filing clocks for EP / S Pass, workplace
              harassment pass-fear planning, EP renewal NOA asks, pass
              cancellations) are checked against live ICA / MOM / MHA text
              before we ship.
            </li>
            <li>
              Directories for neighbourhoods, schools, clubs, and services —
              with featured listings clearly marked.
            </li>
            <li>
              Journeys and light tools as support, never the whole product.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ink">Start exploring</h2>
          <p className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/guides" className="text-canopy underline">
              Guides
            </Link>
            <Link href="/journeys" className="text-canopy underline">
              Journeys
            </Link>
            <Link href="/directory" className="text-canopy underline">
              Directory
            </Link>
            <Link href="/editorial-policy" className="text-canopy underline">
              Editorial policy
            </Link>
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ink">Contact</h2>
          <p className="mt-3">
            Partnerships and media inquiries:{" "}
            <Link href="/advertise" className="text-canopy underline">
              Advertise
            </Link>
            . Editorial feedback is welcome via the same form — mark the message
            as editorial.
          </p>
        </section>
      </div>
    </article>
  );
}
