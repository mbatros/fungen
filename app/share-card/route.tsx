export const runtime = "edge";

import { ImageResponse } from "next/og";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const roast = searchParams.get("roast") || "";
  const intensity = searchParams.get("intensity") || "";
  const id = searchParams.get("id") || "";

  // Simple neon colors (no gradients yet)
  const intensityColor =
    intensity === "nuclear"
      ? "#ff8c00"
      : intensity === "savage"
      ? "#8a2be2"
      : "#22c55e";

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#000000",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          color: "white",
          fontFamily: "sans-serif",
          border: "6px solid #ec4899",
        }}
      >
        {/* Roast Text */}
        <div
          style={{
            fontSize: 48,
            lineHeight: 1.3,
            fontWeight: 600,
            whiteSpace: "pre-wrap",
          }}
        >
          {roast}
        </div>

        {/* Footer Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Intensity Badge */}
          <div
            style={{
              padding: "10px 28px",
              borderRadius: 9999,
              background: intensityColor,
              fontWeight: 700,
              fontSize: 28,
              color: "white",
            }}
          >
            {intensity.toUpperCase()}
          </div>

          {/* Roast ID */}
          <div
            style={{
              fontSize: 22,
              opacity: 0.7,
              textAlign: "right",
            }}
          >
            Roast ID: {id}
          </div>
        </div>

        {/* Branding */}
        <div
          style={{
            width: "100%",
            textAlign: "center",
            marginTop: 20,
            fontSize: 20,
            opacity: 0.6,
          }}
        >
          FunGen • Savage Mode
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
