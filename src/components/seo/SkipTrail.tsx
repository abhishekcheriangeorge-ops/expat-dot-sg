import type { SkipTarget } from "@/lib/seo-nav";
import { DEFAULT_SKIP_TARGETS } from "@/lib/seo-nav";

type SkipTrailProps = {
  targets?: readonly SkipTarget[];
  label?: string;
};

/**
 * Multi-target skip trail — distinct from SiteShell’s single `.skip-link`.
 * First focusable landmark cluster for keyboard / AT users.
 */
export function SkipTrail({
  targets = DEFAULT_SKIP_TARGETS,
  label = "Skip links",
}: SkipTrailProps) {
  if (!targets.length) return null;

  return (
    <nav aria-label={label} className="skip-trail">
      <ul className="skip-trail__list">
        {targets.map((target) => (
          <li key={target.href}>
            <a href={target.href} className="skip-trail__link">
              {target.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
