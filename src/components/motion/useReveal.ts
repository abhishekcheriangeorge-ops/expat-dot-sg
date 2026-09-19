"use client";

import { useEffect, useRef } from "react";

/**
 * Marks an element as revealed once it scrolls into view.
 *
 * Replaces framer-motion's `whileInView` with ~20 lines and no dependency.
 * The hidden-until-revealed state lives in CSS behind `@media (scripting: enabled)`,
 * so content stays visible when JS is unavailable or the observer never fires.
 */
export function useReveal<T extends HTMLElement>(rootMargin = "-10% 0px") {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // No observer (or reduced motion): show immediately, skip the animation.
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      node.setAttribute("data-revealed", "");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return ref;
}
