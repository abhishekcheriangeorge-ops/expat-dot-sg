/** Tip-26 re-exports — keeps pillar/OG/image helpers discoverable without claimed barrels. */
export {
  ogCardFields,
  websiteOgJsonLd,
  type OgCardInput,
} from "@/lib/seo-og";
export { imageObjectJsonLd, primaryImageJsonLd } from "@/lib/seo-image";
export {
  PILLARS,
  pillarsItemListJsonLd,
  pillarCollectionPageJsonLd,
  type PillarSlug,
} from "@/lib/seo-pillars";
