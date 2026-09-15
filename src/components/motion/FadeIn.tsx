"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
} & Omit<HTMLMotionProps<"div">, "children">;

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Soft opacity + rise reveal — respects prefers-reduced-motion. */
export function FadeIn({
  children,
  className,
  delay = 0,
  y = 16,
  ...rest
}: FadeInProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, delay, ease: easeOutExpo }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
