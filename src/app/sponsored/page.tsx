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
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-sponsored">
        #sponsored
      </p>
      <h1 className="mt-4 font-display text-4xl font-medium tracking-[-0.025em] text-ink sm:text-5xl">
        Sponsored posts
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
        Paid advertorials live here — separate template, explicit disclosure.
        Editorial guides never silently promote a partner.
      </p>

      <ul className="mt-12 divide-y divide-ink/15 border-y border-ink">
        {posts.map((post, i) => (
          <li key={post.slug}>
            <Link
              href={`/sponsored/${post.slug}`}
              className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 rounded-sm py-6 no-underline transition-colors focus-visible:outline-2 focus-visible:outline-tungsten"
            >
              <span
                aria-hidden="true"
                className="font-display text-[15px] text-sponsored"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.18em] text-sponsored">
                  Sponsored · {post.partnerName}
                </span>
                <span className="mt-2 block font-display text-2xl font-medium text-ink transition-colors group-hover:text-canopy">
                  {post.title}
                </span>
                <span className="mt-2 block max-w-2xl text-sm leading-relaxed text-ink-muted">
                  {post.description}
                </span>
              </span>
              <span className="hidden text-xs font-bold uppercase tracking-[0.1em] text-ink-faint transition-colors group-hover:text-tungsten sm:inline">
                Open <span aria-hidden="true">→</span>
              </span>
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
