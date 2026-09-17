import { ImageResponse } from "next/og";

export const alt = "expat.sg — Singapore expat life";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "64px 72px",
          background:
            "linear-gradient(135deg, #0e1a14 0%, #1a3d2e 45%, #0e1a14 100%)",
          color: "#faf8f2",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
              background:
                "radial-gradient(ellipse at 75% 20%, rgba(200,162,74,0.30), transparent 45%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            position: "relative",
          }}
        >
          <div style={{ fontSize: 72, letterSpacing: "-0.03em", lineHeight: 1 }}>
            expat.sg
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.25,
              maxWidth: 860,
              color: "#e7e1d3",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Singapore, decided — not debated.
          </div>
          <div
            style={{
              marginTop: 12,
              fontSize: 20,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#c8a24a",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Guides · Directories · Journeys
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
