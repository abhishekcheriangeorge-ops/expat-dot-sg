import { Inter, Newsreader } from "next/font/google";

/** Confident editorial serif — Straits Standard headlines & brand */
export const fontDisplay = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

/** Clean grotesque — UI, body, navigation */
export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
