import Link from "next/link";
import type { GuideSponsorSlot } from "@/lib/content/schemas";
import type { SponsorPlacement } from "@/lib/content/schemas";

type GuideSponsorSlotProps = {
  slot?: GuideSponsorSlot;
  placement?: SponsorPlacement | null;
};

export function GuideSponsorSlotBanner({
  slot,
  placement,
}: GuideSponsorSlotProps) {
  if (!slot?.enabled || !placement) return null;

  return (
    <aside
      aria-label="Sponsored placement"
      className="my-10 border border-sponsored/30 bg-[color-mix(in_srgb,var(--sponsored)_6%,var(--paper-elevated))] px-5 py-5"
    >
      <p className="text-xs font-semibold tracking-[0.16em] text-sponsored uppercase">
        #sponsored
      </p>
      <p className="mt-2 font-display text-xl text-ink">{placement.headline}</p>
      <p className="mt-2 max-w-prose text-sm text-ink-muted">{placement.body}</p>
      <p className="mt-4 text-sm">
        <span className="text-ink-faint">
          Sponsored by {placement.partnerName} ·{" "}
        </span>
        <Link
          href={placement.ctaHref}
          className="font-medium text-canopy underline decoration-canopy-mist/40 hover:decoration-canopy-mist"
        >
          {placement.ctaLabel}
        </Link>
      </p>
    </aside>
  );
}
