import type { Metadata } from "next";
import Link from "next/link";
import { AdvertiseInquiryForm } from "@/components/advertise";
import { getAllFeaturedListings } from "@/lib/content/featured";
import { getAllSponsoredPosts } from "@/lib/content/sponsored";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Advertise",
  description:
    "Media kit and inquiry for featured listings, sponsored posts, newsletter, and category sponsorships on expat.sg.",
  path: "/advertise",
});

const PRODUCTS = [
  {
    title: "Featured directory listing",
    body: "Schools, clubs, movers, clinics, agents — Featured badge, sorted above organic matches. Never unmarked as editorial.",
  },
  {
    title: "Sponsored post",
    body: "Full advertorial on /sponsored with #sponsored disclosure and a separate template from guides.",
  },
  {
    title: "Category / guide slot",
    body: "Labeled partner block on high-intent guides (insurance, movers, schools). Inventory is disclosed every time.",
  },
  {
    title: "Newsletter sponsorship",
    body: "Structure ready for list growth post-launch. Ask us about early-partner rates.",
  },
] as const;

export default async function AdvertisePage() {
  const [featured, sponsoredPosts] = await Promise.all([
    getAllFeaturedListings(),
    getAllSponsoredPosts(),
  ]);

  return (
    <div>
      <header className="border-b border-ink bg-paper">
        <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-tungsten">
            Media kit
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.08] tracking-[-0.025em] text-ink sm:text-5xl">
            Advertise on expat.sg
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Reach people deciding on Singapore — and those already living the
            operating system of EP renewals, school waitlists, and club
            memberships. Every paid surface is labeled. We do not sell unmarked
            editorial.
          </p>
        </div>
      </header>

      <section className="border-b border-ink">
        <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink">
            Products
          </h2>
          <p className="mt-3 max-w-xl leading-relaxed text-ink-muted">
            One job per placement. Transparent disclosure is part of the product.
          </p>
          <ul className="mt-10 grid gap-x-8 border-b border-ink sm:grid-cols-2">
            {PRODUCTS.map((product, i) => (
              <li
                key={product.title}
                className="border-t border-ink/15 py-6 sm:[&:nth-child(-n+2)]:border-t-0"
              >
                <p
                  aria-hidden="true"
                  className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-tungsten"
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-xl font-medium text-ink">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {product.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-ink/15 bg-paper-elevated/50">
        <div className="mx-auto grid max-w-[var(--max-page)] gap-12 px-5 py-12 sm:px-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-medium tracking-tight text-ink">
              Audience &amp; rules
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink-muted">
              <li>Dual journey traffic: Arriving (offer → day 90) and Living.</li>
              <li>
                High-intent directories: neighbourhoods, schools, clubs, services.
              </li>
              <li>
                Sponsored posts use a dedicated template with `#sponsored` at the
                top — never the editorial guide chrome alone.
              </li>
              <li>
                Featured badges read entity flags; we do not rewrite the corpus to
                invent trust.
              </li>
            </ul>

            <div className="mt-8 text-sm text-ink-faint">
              <p>
                Sample inventory live:{" "}
                <strong className="font-medium text-ink-muted">
                  {featured.length} featured listings
                </strong>
                ,{" "}
                <Link
                  href="/sponsored"
                  className="rounded-sm py-1 font-medium text-canopy underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-tungsten"
                >
                  {sponsoredPosts.length} sponsored posts
                </Link>
                .
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl font-medium tracking-tight text-ink">
              Inquiry
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Tell us category, timing, and budget band. We reply with
              availability — not a fake scarcity countdown.
            </p>
            <div className="mt-8">
              <AdvertiseInquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
