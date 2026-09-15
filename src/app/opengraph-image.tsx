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
            "linear-gradient(135deg, #0f2a1f 0%, #1a3d2e 42%, #1e2830 78%, #0c1210 100%)",
          color: "#f2eee6",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 75% 20%, rgba(201,146,58,0.28), transparent 45%)",
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
              color: "#e4dfd6",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Singapore expat life, from the offer letter to year three.
          </div>
          <div
            style={{
              marginTop: 12,
              fontSize: 20,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#e0b56a",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Guides · Tools · Schools · Journeys
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
