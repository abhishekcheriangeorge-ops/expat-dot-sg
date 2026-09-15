import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Editorial policy",
  description:
    "How expat.sg separates editorial from sponsored content, cites official sources, and reviews guides.",
  path: "/editorial-policy",
});

export default function EditorialPolicyPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Editorial policy", path: "/editorial-policy" },
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
          Editorial policy
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-muted">
          Plain rules for how we write, review, and label content on expat.sg.
        </p>
      </header>

      <div className="mt-14 max-w-[var(--max-prose)] space-y-10 text-base leading-relaxed text-ink-muted">
        <section>
          <h2 className="font-display text-2xl text-ink">Independence</h2>
          <p className="mt-3">
            Editorial guides are written to help readers make clearer decisions
            about Singapore expat life. Commercial partnerships do not control
            guide conclusions, pass eligibility claims, or directory rankings
            beyond explicitly labeled featured placements.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ink">Citations & review</h2>
          <p className="mt-3">
            Cornerstone guides cite primary sources where rules matter — typically
            MOM, ICA, IRAS, CMPB/MINDEF, or equivalent agency pages. Every
            editorial guide shows a{" "}
            <strong className="font-semibold text-ink">last reviewed</strong> date.
            Rules change; treat guides as orientation, not legal, tax, or
            immigration advice for your individual case.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ink">Research inputs</h2>
          <p className="mt-3">
            We mine public forums and Reddit for recurring pain points, then
            verify claims against official pages before shipping — especially on
            high-stakes Next-pillar topics (passes, PR including child and spouse
            sponsorship and aged-parent PR vs LTVP, spouse LTVP / PMLA and
            PLOC / LOC work rights, student PR national-exam row, EP job-loss
            → spouse LTVP bridges, Right of Entry for under-21 dual-passport
            SCs, citizenship confirmation letters, EP renewal NOA / document
            asks, Re-Entry Permit rules and passport transfers, ROE transfer
            on new foreign passport, spouse LTVP renewal / PMLA LLE window,
            SCJ SEV / CSS booking after IPA, citizenship application and
            ORAL, adult SC renunciation, NRIC loss / address /
            re-registration / name change, NS, exits). When agencies
            publish dated
            revisions (for example MHA / ICA REP process changes), we prefer the
            live notice and FAQ over older forum “reinstatement” folklore. Peer
            anecdotes illustrate uncertainty; they never replace agency text. We
            do not copy third-party expat roundups or AI-generated clone sites.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ink">Sponsored content</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              Sponsored posts live under{" "}
              <Link href="/sponsored" className="text-canopy underline">
                /sponsored
              </Link>{" "}
              and are labeled <strong className="font-semibold text-ink">#sponsored</strong>.
            </li>
            <li>
              Featured directory listings use a visible Featured badge; they are
              never presented as unpaid editorial picks.
            </li>
            <li>
              Guide sponsor slots, when filled, disclose the partner and link to
              disclosure copy — never unmarked native ads inside guide prose.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ink">Corrections</h2>
          <p className="mt-3">
            If something is wrong or outdated, tell us via the{" "}
            <Link href="/advertise" className="text-canopy underline">
              advertise / inquiry form
            </Link>{" "}
            and mark the message as editorial. Material corrections update the
            guide and refresh the last-reviewed date.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ink">Voice</h2>
          <p className="mt-3">
            Plain English, locally precise, respectful of Singaporeans — not a
            tourist brochure and not Facebook panic. We write for people who live
            here, or are about to.
          </p>
        </section>

        <p className="border-t border-fog-soft pt-8 text-sm text-ink-muted">
          Related:{" "}
          <Link href="/about" className="text-canopy underline">
            About expat.sg
          </Link>
          {" · "}
          <Link href="/guides" className="text-canopy underline">
            Guides
          </Link>
          {" · "}
          <Link href="/sponsored" className="text-canopy underline">
            Sponsored
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
