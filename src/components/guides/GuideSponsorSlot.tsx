import Link from "next/link";
import type { GuideSponsorSlot } from "@/lib/content/schemas";

type GuideSponsorSlotProps = {
  slot?: GuideSponsorSlot;
};

/**
 * Sponsor placement rules (editorial product):
 * - Never render as unmarked editorial prose
 * - Always show #sponsored / Featured disclosure
 * - Only appear when frontmatter enables the slot
 * - Empty slots invite advertisers; filled inventory comes from Phase 5
 */
export function GuideSponsorSlotBanner({ slot }: GuideSponsorSlotProps) {
  if (!slot?.enabled) return null;

  const disclosure =
    slot.disclosure ??
    (slot.category
      ? `Featured ${slot.category} partner`
      : "Featured partner");

  return (
    <aside
      aria-label="Sponsored placement"
      className="my-10 border border-sponsored/30 bg-[color-mix(in_srgb,var(--sponsored)_6%,var(--paper-elevated))] px-5 py-5"
    >
      <p className="text-xs font-semibold tracking-[0.16em] text-sponsored uppercase">
        #sponsored
      </p>
      <p className="mt-2 font-display text-xl text-ink">{disclosure}</p>
      <p className="mt-2 max-w-prose text-sm text-ink-muted">
        This placement is paid and separate from editorial recommendations. We
        do not mark advertising as independent advice.
      </p>
      <p className="mt-4 text-sm">
        <Link
          href="/advertise"
          className="font-medium text-canopy underline decoration-canopy-mist/40 hover:decoration-canopy-mist"
        >
          Advertise on expat.sg
        </Link>
      </p>
    </aside>
  );
}
