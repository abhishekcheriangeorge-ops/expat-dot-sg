import Link from "next/link";
import type { GuideSponsorSlot } from "@/lib/content/schemas";
import type { SponsorPlacement } from "@/lib/content/schemas";

type GuideSponsorSlotProps = {
  slot?: GuideSponsorSlot;
  /** Active inventory for this category, when Phase 5 placements exist */
  placement?: SponsorPlacement | null;
};

/**
 * Sponsor placement rules (editorial product):
 * - Never render as unmarked editorial prose
 * - Always show #sponsored / Featured disclosure
 * - Only appear when frontmatter enables the slot
 * - Empty slots invite advertisers; filled inventory shows partner CTA
 */
export function GuideSponsorSlotBanner({
  slot,
  placement,
}: GuideSponsorSlotProps) {
  if (!slot?.enabled) return null;

  const disclosure =
    slot.disclosure ??
    (slot.category
      ? `Featured ${slot.category} partner`
      : "Featured partner");

  const hasPlacement = Boolean(placement);

  return (
    <aside
      aria-label="Sponsored placement"
      className="my-10 border border-sponsored/30 bg-[color-mix(in_srgb,var(--sponsored)_6%,var(--paper-elevated))] px-5 py-5"
    >
      <p className="text-xs font-semibold tracking-[0.16em] text-sponsored uppercase">
        #sponsored
      </p>
      <p className="mt-2 font-display text-xl text-ink">
        {hasPlacement ? placement!.headline : disclosure}
      </p>
      <p className="mt-2 max-w-prose text-sm text-ink-muted">
        {hasPlacement
          ? placement!.body
          : "This placement is paid and separate from editorial recommendations. We do not mark advertising as independent advice."}
      </p>
      {hasPlacement ? (
        <p className="mt-4 text-sm">
          <span className="text-ink-faint">Sponsored by {placement!.partnerName} · </span>
          <Link
            href={placement!.ctaHref}
            className="font-medium text-canopy underline decoration-canopy-mist/40 hover:decoration-canopy-mist"
          >
            {placement!.ctaLabel}
          </Link>
        </p>
      ) : (
        <p className="mt-4 text-sm">
          <Link
            href="/advertise"
            className="font-medium text-canopy underline decoration-canopy-mist/40 hover:decoration-canopy-mist"
          >
            Advertise on expat.sg
          </Link>
        </p>
      )}
    </aside>
  );
}
