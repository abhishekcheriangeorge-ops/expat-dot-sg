import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** App icon — brand mark for crawlers / bookmarks without touching layout (#145). */
export default function Icon() {
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
          fontSize: 20,
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
