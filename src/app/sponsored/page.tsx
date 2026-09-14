import type { Metadata } from "next";
import Link from "next/link";
import { getAllSponsoredPosts } from "@/lib/content/sponsored";

export const metadata: Metadata = {
  title: "Sponsored",
  description:
    "Clearly labeled sponsored posts on expat.sg — paid inventory, never unmarked as editorial.",
};

export default async function SponsoredIndexPage() {
  const posts = await getAllSponsoredPosts();

  return (
    <div className="mx-auto max-w-[var(--max-page)] px-5 py-14 sm:px-8 sm:py-20">
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
      </p>
    </div>
  );
}
