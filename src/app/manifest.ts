import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME, absoluteUrl } from "@/lib/seo";

/** Web app manifest — free chrome surface (layout/opengraph claimed elsewhere). */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    scope: "/",
    display: "standalone",
    lang: "en-SG",
    background_color: "#f2eee6",
    theme_color: "#0f2a1f",
    categories: ["lifestyle", "education", "travel"],
    icons: [
      {
        src: absoluteUrl("/favicon.ico"),
        sizes: "any",
        type: "image/x-icon",
        purpose: "any",
      },
    ],
  };
}
