import Link from "next/link";
import { JOURNEY_LABELS, PILLAR_LABELS } from "@/lib/content/guides";
import type { GuideMeta } from "@/lib/content/guides";

type GuideMetaBarProps = {
  meta: GuideMeta;
};

function formatReviewed(iso: string): string {
  const date = new Date(`${iso}T00:00:00Z`);
  return new Intl.DateTimeFormat("en-SG", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function GuideMetaBar({ meta }: GuideMetaBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-faint">
      <Link
        href={`/${meta.pillar}`}
        className="font-bold uppercase tracking-[0.14em] text-tungsten no-underline hover:underline"
      >
        {PILLAR_LABELS[meta.pillar]}
      </Link>
      <span>{JOURNEY_LABELS[meta.journey]}</span>
      <span aria-hidden="true">·</span>
      <span>{meta.readingTimeMinutes} min read</span>
      <span aria-hidden="true">·</span>
      <time dateTime={meta.lastReviewed}>
        Last reviewed {formatReviewed(meta.lastReviewed)}
      </time>
    </div>
  );
}
