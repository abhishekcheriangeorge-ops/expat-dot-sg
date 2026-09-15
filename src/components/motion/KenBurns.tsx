"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type KenBurnsProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Soft ken-burns + rain-light shift for hero media.
 * Static under prefers-reduced-motion — still paints the visual plane.
 */
export function KenBurns({ children, className }: KenBurnsProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={`relative h-full w-full overflow-hidden ${className ?? ""}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`relative h-full w-full overflow-hidden ${className ?? ""}`}
      initial={{ scale: 1.1, x: "0%" }}
      animate={{ scale: 1, x: "-1.5%" }}
      transition={{ duration: 22, ease: "linear" }}
      style={{ willChange: "transform" }}
    >
      {children}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(242,238,230,0.14),transparent_45%)] mix-blend-soft-light"
        initial={{ opacity: 0.35 }}
        animate={{ opacity: [0.35, 0.55, 0.4, 0.6, 0.35] }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
      />
    </motion.div>
  );
}
