"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type KenBurnsProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Soft ken-burns / rain-light shift for hero media.
 * Wrap an image or full-bleed visual plane — not for UI chrome.
 */
export function KenBurns({ children, className }: KenBurnsProps) {
  return (
    <motion.div
      className={className}
      initial={{ scale: 1.08 }}
      animate={{ scale: 1 }}
      transition={{ duration: 18, ease: "linear" }}
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
}
