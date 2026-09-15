import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getAllSponsoredPosts } from "@/lib/content/sponsored";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Sponsored",
  description:
    "Clearly labeled sponsored posts on expat.sg — paid inventory, never unmarked as editorial.",
  path: "/sponsored",
});

export default async function SponsoredIndexPage() {
  const posts = await getAllSponsoredPosts();
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Sponsored", path: "/sponsored" },
  ];

  return (
    <div className="mx-auto max-w-[var(--max-page)] px-5 py-14 sm:px-8 sm:py-20">
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          collectionPageJsonLd({
            name: "Sponsored posts",
            description:
              "Clearly labeled sponsored posts — paid inventory, never unmarked as editorial.",
            path: "/sponsored",
            items: posts.map((post) => ({
              name: post.title,
              path: `/sponsored/${post.slug}`,
            })),
          }),
        ]}
      />
      <Breadcrumbs items={crumbs} className="mb-8 text-sm text-ink-faint" />
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sponsored">
        #sponsored
      </p>
      <h1 className="mt-3 font-display text-4xl text-canopy-deep sm:text-5xl">
        Sponsored posts
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
        Paid advertorials live here — separate template, explicit disclosure.
        Editorial guides never silently promote a partner.
      </p>

      <ul className="mt-12 divide-y divide-fog-soft border-y border-fog-soft">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/sponsored/${post.slug}`}
              className="block py-6 no-underline transition-colors hover:bg-paper-elevated/80"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-sponsored">
                Sponsored · {post.partnerName}
              </p>
              <p className="mt-2 font-display text-2xl text-ink">{post.title}</p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
                {post.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm text-ink-muted">
        Want a placement?{" "}
        <Link href="/advertise" className="font-medium text-canopy underline">
          Advertise on expat.sg
        </Link>
        {" · "}
        <Link href="/editorial-policy" className="font-medium text-canopy underline">
          Editorial policy
        </Link>
      </p>
    </div>
  );
}
