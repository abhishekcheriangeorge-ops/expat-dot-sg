import type { ReactNode } from "react";
import type { GuideMeta } from "@/lib/content/guides";
import { PILLAR_LABELS } from "@/lib/content/guides";
import type { ResolvedRelatedEntity } from "@/lib/content/entities";
import type { SponsorPlacement } from "@/lib/content/schemas";
import type { TocItem } from "@/lib/content/toc";
import { Breadcrumbs } from "@/components/seo";
import { GuideCitations } from "./GuideCitations";
import { GuideFaqs } from "./GuideFaqs";
import { GuideMetaBar } from "./GuideMetaBar";
import { GuideRelated } from "./GuideRelated";
import { GuideRelatedEntities } from "./GuideRelatedEntities";
import { GuideSponsorSlotBanner } from "./GuideSponsorSlot";
import { GuideToc } from "./GuideToc";

type GuideArticleProps = {
  meta: GuideMeta;
  toc: TocItem[];
  related: GuideMeta[];
  relatedEntities?: ResolvedRelatedEntity[];
  children: ReactNode;
  /** Optional filled inventory for the guide's sponsor slot category */
  placement?: SponsorPlacement | null;
};

export function GuideArticle({
  meta,
  toc,
  related,
  relatedEntities = [],
  children,
  placement = null,
}: GuideArticleProps) {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
    { name: PILLAR_LABELS[meta.pillar], path: `/${meta.pillar}` },
    { name: meta.title, path: `/guides/${meta.slug}` },
  ];

  return (
    <article className="mx-auto w-full max-w-[var(--max-page)] px-5 py-12 sm:px-8 sm:py-16">
      <header className="max-w-3xl">
        <Breadcrumbs items={crumbs} className="mb-6 text-sm text-ink-faint" />
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-tungsten">
          {PILLAR_LABELS[meta.pillar]}
        </p>
        <h1 className="font-display mt-4 text-4xl font-medium leading-[1.08] tracking-[-0.025em] text-ink sm:text-5xl">
          {meta.title}
        </h1>
        <p
          data-speakable
          className="mt-5 max-w-[40rem] text-lg leading-relaxed text-ink-muted"
        >
          {meta.description}
        </p>
        <div className="mt-6">
          <GuideMetaBar meta={meta} />
        </div>
      </header>

      <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_16rem]">
        <div className="min-w-0">
          <div className="max-w-[var(--max-page)] [&>:not([data-table-wrap])]:max-w-[var(--max-prose)]">
            {children}
          </div>

          <GuideSponsorSlotBanner
            slot={meta.sponsorSlot}
            placement={placement}
          />

          <div className="mt-14 max-w-[var(--max-prose)] space-y-14">
            <GuideFaqs faqs={meta.faqs ?? []} />
            <GuideCitations citations={meta.citations} />
            <GuideRelatedEntities entities={relatedEntities} />
            <GuideRelated guides={related} />
          </div>
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
