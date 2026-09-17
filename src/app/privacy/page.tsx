import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy",
  description:
    "How expat.sg collects and stores advertise inquiries under Singapore PDPA.",
  path: "/privacy",
});

export default function PrivacyPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Privacy", path: "/privacy" },
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
          Privacy
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-muted">
          We collect as little as we need. We do not sell personal data.
        </p>
      </header>
      <div className="mt-12 max-w-[var(--max-prose)] space-y-6 text-base leading-relaxed text-ink-muted">
        <p>
          The advertise form collects name, email, company, interest, optional
          budget band, and your message. That record is stored in our database
          so we can reply. We do not run a marketing list off this form.
        </p>
        <p>
          Guides, tools, and journeys do not require an account. Server logs
          may include IP address and user-agent for security and debugging,
          then rotate.
        </p>
        <p>
          To ask for access or deletion, write via{" "}
          <Link href="/about" className="text-canopy underline">
            about
          </Link>
          . Related:{" "}
          <Link href="/terms" className="text-canopy underline">
            terms
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
