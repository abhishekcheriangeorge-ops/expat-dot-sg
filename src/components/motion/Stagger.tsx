"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { useReveal } from "./useReveal";

type StaggerProps = {
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"div">, "children">;

/**
 * Staggered list reveal. The container flips to revealed on scroll; CSS
 * `nth-child` gives each item its escalating delay, so no index has to be
 * threaded through React.
 */
export function Stagger({ children, className, ...rest }: StaggerProps) {
  const ref = useReveal<HTMLDivElement>("-8% 0px");

  return (
    <div ref={ref} data-reveal-group="" className={className} {...rest}>
      {children}
    </div>
  );
}

export function StaggerItem({ children, className, ...rest }: StaggerProps) {
  return (
    <div data-reveal-item="" className={className} {...rest}>
      {children}
    </div>
  );
}
