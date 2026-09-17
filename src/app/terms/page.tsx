import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms",
  description:
    "expat.sg terms of use — editorial orientation, not legal, tax, or immigration advice.",
  path: "/terms",
});

export default function TermsPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Terms", path: "/terms" },
  ];

  return (
    <article className="mx-auto w-full max-w-[var(--max-page)] px-5 py-16 sm:px-8 sm:py-24">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumbs items={crumbs} className="mb-8 text-sm text-ink-faint" />
      <header className="max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-tungsten">
          Legal
        </p>
        <h1 className="font-display mt-4 text-4xl font-medium tracking-[-0.025em] text-ink sm:text-5xl">
          Terms
        </h1>
      </header>
      <div className="mt-12 max-w-[var(--max-prose)] space-y-6 text-base leading-relaxed text-ink-muted">
        <p>
          Guides, calculators, and playbooks are orientation. They are not
          legal, tax, immigration, medical, or financial advice for your file.
          Confirm live MOM, ICA, IRAS, HDB, LTA, and school rules before you
          act.
        </p>
        <p>
          Paid placements are labeled. Editorial recommendations are separate.
          See the{" "}
          <Link href="/editorial-policy" className="text-canopy underline">
            editorial policy
          </Link>
          .
        </p>
        <p>
          Personal data from inquiries is described in{" "}
          <Link href="/privacy" className="text-canopy underline">
            privacy
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
