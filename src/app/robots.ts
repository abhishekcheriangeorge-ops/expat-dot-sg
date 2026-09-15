import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

/** Crawl map — keeps sitemap/host explicit; humans.txt is linked for operators. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/humans.txt"],
        disallow: ["/api/", "/studio"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
