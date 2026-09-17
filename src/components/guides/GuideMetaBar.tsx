import { JOURNEY_LABELS } from "@/lib/content/guides";
import type { GuideMeta } from "@/lib/content/guides";

type GuideMetaBarProps = {
  meta: GuideMeta;
};

export function GuideMetaBar({ meta }: GuideMetaBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-muted">
      <span>{JOURNEY_LABELS[meta.journey]}</span>
      <span aria-hidden="true">·</span>
      <span>{meta.readingTimeMinutes} min read</span>
    </div>
  );
}
