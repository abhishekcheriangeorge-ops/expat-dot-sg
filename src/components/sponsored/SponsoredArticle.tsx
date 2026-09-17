import type { ReactNode } from "react";
import Link from "next/link";
import type { SponsoredPostMeta } from "@/lib/content/sponsored";
import { GuideToc } from "@/components/guides/GuideToc";
import type { TocItem } from "@/lib/content/toc";

type SponsoredArticleProps = {
  meta: SponsoredPostMeta;
  toc: TocItem[];
  children: ReactNode;
};

/**
 * Dedicated template for paid advertorials — visually and verbally distinct
 * from editorial GuideArticle. Always shows #sponsored disclosure.
 */
export function SponsoredArticle({
  meta,
  toc,
  children,
}: SponsoredArticleProps) {
  return (
    <article className="mx-auto w-full max-w-[var(--max-page)] px-5 py-12 sm:px-8 sm:py-16">
      <div
        role="note"
        className="border border-sponsored/35 bg-[color-mix(in_srgb,var(--sponsored)_8%,var(--paper-elevated))] px-5 py-4"
      >
        <p className="text-xs font-semibold tracking-[0.16em] text-sponsored uppercase">
          #sponsored
        </p>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-muted">
          {meta.disclosure}
        </p>
      </div>

      <header className="mt-10 max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-sponsored">
          Sponsored by {meta.partnerName}
        </p>
        <h1 className="font-display mt-4 text-4xl font-medium leading-[1.08] tracking-[-0.025em] text-ink sm:text-5xl">
          {meta.title}
        </h1>
        <p className="mt-5 max-w-[40rem] text-lg leading-relaxed text-ink-muted">
          {meta.description}
        </p>
        <p className="mt-4 text-sm text-ink-faint">
          Published {meta.publishedAt} · {meta.readingTimeMinutes} min read
        </p>
      </header>

      <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-16">
        <div className="min-w-0">
          <div className="max-w-[var(--max-page)] prose-sponsored [&>:not([data-table-wrap])]:max-w-[var(--max-prose)]">
            {children}
          </div>

          {meta.ctaHref && meta.ctaLabel ? (
            <p className="mt-12">
              <a
                href={meta.ctaHref}
                className="inline-flex min-h-[48px] items-center rounded-sm bg-sponsored px-7 py-3.5 text-sm font-bold uppercase tracking-[0.06em] text-paper no-underline transition-colors hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tungsten"
                rel="noopener noreferrer"
                target={meta.ctaHref.startsWith("http") ? "_blank" : undefined}
              >
                {meta.ctaLabel}
              </a>
            </p>
          ) : null}

          <p className="mt-10 max-w-[var(--max-prose)] text-sm text-ink-muted">
            Prefer independent guidance? Browse our{" "}
            <Link href="/guides" className="text-canopy underline">
              editorial guides
            </Link>{" "}
            or see{" "}
            <Link href="/advertise" className="text-canopy underline">
              advertising options
            </Link>
            .
          </p>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <GuideToc items={toc} />
          </div>
        </aside>
      </div>
    </article>
  );
}
