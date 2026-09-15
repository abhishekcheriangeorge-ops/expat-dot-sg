/**
 * SEO slug helpers — re-export from content/slugify.
 * Kept as seo-slug.ts so G ticks can claim a dedicated seo-* module
 * without touching claimed seo.ts through #267.
 */
export {
  seoAnchorId,
  seoPathSegment,
  seoPath,
  seoFragmentPath,
} from "@/lib/content/slugify";
