import { getAllGuides } from "@/lib/content/guides";
import { SITE_DESCRIPTION, SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/seo";

export const dynamic = "force-static";

function xmlEscape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const guides = await getAllGuides();
  const items = [...guides]
    .sort((a, b) => b.lastReviewed.localeCompare(a.lastReviewed))
    .slice(0, 80)
    .map((guide) => {
      const url = absoluteUrl(`/guides/${guide.slug}`);
      return `    <item>
      <title>${xmlEscape(guide.title)}</title>
      <link>${xmlEscape(url)}</link>
      <guid isPermaLink="true">${xmlEscape(url)}</guid>
      <pubDate>${new Date(guide.lastReviewed).toUTCString()}</pubDate>
      <description>${xmlEscape(guide.description)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${xmlEscape(SITE_NAME)}</title>
    <link>${xmlEscape(getSiteUrl())}</link>
    <description>${xmlEscape(SITE_DESCRIPTION)}</description>
    <language>en-sg</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
