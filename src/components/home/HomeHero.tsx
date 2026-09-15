"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn, KenBurns } from "@/components/motion";

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-dusk text-paper">
      <div className="absolute inset-0">
        <KenBurns className="h-full w-full">
          <Image
            src="/images/hero-singapore.jpg"
            alt="Singapore skyline at humid dusk over the water"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_35%]"
          />
        </KenBurns>
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(105deg,rgba(12,18,16,0.82)_0%,rgba(12,18,16,0.55)_42%,rgba(30,40,48,0.35)_70%,rgba(26,61,46,0.45)_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(201,146,58,0.18),transparent_50%)]"
        />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[var(--max-page)] flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32">
        <FadeIn y={20}>
          <p className="font-display text-5xl tracking-tight text-paper sm:text-7xl md:text-8xl">
            expat.sg
          </p>
        </FadeIn>

        <FadeIn delay={0.12} y={18}>
          <h1 className="mt-6 max-w-2xl font-display text-2xl leading-[1.15] text-paper sm:text-4xl md:text-[2.75rem]">
            Singapore expat life, from the offer letter to year three.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2} y={14}>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-fog sm:text-lg">
            Guides, neighbourhoods, schools, and communities — whether you are
            packing boxes or renewing your pass.
          </p>
        </FadeIn>

        <FadeIn delay={0.28} y={12}>
          <nav
            aria-label="Primary journeys"
            className="mt-10"
            itemScope
            itemType="https://schema.org/ItemList"
          >
            <meta itemProp="name" content="Primary journeys" />
            <meta itemProp="numberOfItems" content="2" />
            <ul className="flex flex-wrap gap-3 sm:gap-4">
              <li
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content="1" />
                <Link
                  href="/arriving"
                  itemProp="url"
                  className="inline-flex items-center bg-tungsten px-7 py-3.5 text-sm font-semibold text-ink no-underline transition-colors hover:bg-tungsten-soft"
                >
                  <span itemProp="name">Arriving</span>
                </Link>
              </li>
              <li
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content="2" />
                <Link
                  href="/living"
                  itemProp="url"
                  className="inline-flex items-center border border-paper/35 bg-paper/5 px-7 py-3.5 text-sm font-semibold text-paper no-underline backdrop-blur-sm transition-colors hover:border-paper/60 hover:bg-paper/10"
                >
                  <span itemProp="name">Living</span>
                </Link>
              </li>
            </ul>
          </nav>
        </FadeIn>
      </div>
    </section>
  );
}
