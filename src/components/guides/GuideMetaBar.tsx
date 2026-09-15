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
        className="rounded-sm bg-canopy/10 px-2 py-0.5 font-medium text-canopy no-underline hover:bg-canopy/15"
      >
        {PILLAR_LABELS[meta.pillar]}
      </Link>
      {meta.journey === "both" ? (
        <span className="inline-flex flex-wrap items-center gap-x-2">
          <Link
            href="/arriving"
            className="text-ink-faint no-underline underline-offset-4 hover:text-canopy hover:underline"
          >
            Arriving
          </Link>
          <span aria-hidden="true">&</span>
          <Link
            href="/living"
            className="text-ink-faint no-underline underline-offset-4 hover:text-canopy hover:underline"
          >
            Living
          </Link>
        </span>
      ) : (
        <Link
          href={meta.journey === "arriving" ? "/arriving" : "/living"}
          className="text-ink-faint no-underline underline-offset-4 hover:text-canopy hover:underline"
        >
          {JOURNEY_LABELS[meta.journey]}
        </Link>
      )}
      <span aria-hidden="true">·</span>
      <span>{meta.readingTimeMinutes} min read</span>
      <span aria-hidden="true">·</span>
      <time dateTime={meta.lastReviewed}>
        Last reviewed {formatReviewed(meta.lastReviewed)}
      </time>
    </div>
  );
}
