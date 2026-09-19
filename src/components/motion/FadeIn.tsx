"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { useReveal } from "./useReveal";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
} & Omit<ComponentPropsWithoutRef<"div">, "children">;

/** Soft opacity + rise reveal — primary motion primitive */
export function FadeIn({
  children,
  className,
  delay = 0,
  y = 16,
  style,
  ...rest
}: FadeInProps) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-reveal=""
      className={className}
      style={
        {
          ...style,
          "--reveal-delay": `${delay * 1000}ms`,
          "--reveal-y": `${y}px`,
        } as React.CSSProperties
      }
      {...rest}
    >
      {children}
    </div>
  );
}
