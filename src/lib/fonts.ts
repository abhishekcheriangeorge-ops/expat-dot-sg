import { Fraunces, Manrope } from "next/font/google";

/** Expressive display serif — Humidity Editorial headlines & brand */
export const fontDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  adjustFontFallback: true,
  axes: ["SOFT", "WONK", "opsz"],
});

/** Refined grotesque — UI, body, navigation */
export const fontSans = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  adjustFontFallback: true,
});
