import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch icon — brand mark without touching icon.tsx (#206). */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f2a1f",
          color: "#e0b56a",
          fontSize: 96,
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontWeight: 700,
          letterSpacing: "-0.04em",
        }}
      >
        e
      </div>
    ),
    { ...size },
  );
}
