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
      <span className="rounded-sm bg-canopy/10 px-2 py-0.5 font-medium text-canopy">
        {PILLAR_LABELS[meta.pillar]}
      </span>
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
