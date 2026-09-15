/** URL-safe heading id — matches guide TOC and MDX heading components */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Stable in-page fragment from a heading or label. */
export function seoAnchorId(input: string): string {
  return slugify(input);
}

/** Single URL path segment (no leading slash). */
export function seoPathSegment(input: string): string {
  return slugify(input);
}

/** Join SEO-safe path segments into an absolute site path. */
export function seoPath(...segments: string[]): string {
  const parts = segments.map((s) => seoPathSegment(s)).filter(Boolean);
  return `/${parts.join("/")}`;
}

/** Absolute fragment URL path: `/hub#section`. */
export function seoFragmentPath(path: string, heading: string): string {
  const base = path.startsWith("/") ? path : `/${path}`;
  const id = seoAnchorId(heading);
  return id ? `${base}#${id}` : base;
}
