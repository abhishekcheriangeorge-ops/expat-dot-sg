import type { ReactNode } from "react";
import type { GuideMeta } from "@/lib/content/guides";
import type { SponsorPlacement } from "@/lib/content/schemas";
import type { TocItem } from "@/lib/content/toc";
import { GuideCitations } from "./GuideCitations";
import { GuideMetaBar } from "./GuideMetaBar";
import { GuideRelated } from "./GuideRelated";
import { GuideSponsorSlotBanner } from "./GuideSponsorSlot";
import { GuideToc } from "./GuideToc";

type GuideArticleProps = {
  meta: GuideMeta;
  toc: TocItem[];
  related: GuideMeta[];
  children: ReactNode;
  /** Optional filled inventory for the guide's sponsor slot category */
  placement?: SponsorPlacement | null;
};

export function GuideArticle({
  meta,
  toc,
  related,
  children,
  placement = null,
}: GuideArticleProps) {
  return (
    <article className="mx-auto w-full max-w-[var(--max-page)] px-5 py-12 sm:px-8 sm:py-16">
      <header className="max-w-3xl">
        <GuideMetaBar meta={meta} />
        <h1 className="font-display mt-5 text-4xl leading-[1.1] text-ink sm:text-5xl">
          {meta.title}
        </h1>
        <p className="mt-5 max-w-[40rem] text-lg leading-relaxed text-ink-muted">
          {meta.description}
        </p>
      </header>

      <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_16rem]">
        <div className="min-w-0">
          <div className="max-w-[var(--max-prose)]">{children}</div>

          <GuideSponsorSlotBanner
            slot={meta.sponsorSlot}
            placement={placement}
          />

          <div className="mt-14 max-w-[var(--max-prose)] space-y-14">
            <GuideCitations citations={meta.citations} />
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
