export const runtime = "edge";

import { ImageResponse } from "next/og";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const roast = searchParams.get("roast") || "";
  const intensity = searchParams.get("intensity") || "";
  const id = searchParams.get("id") || "";

  // Intensity color logic
  const badgeGradient =
    intensity === "nuclear"
      ? "linear-gradient(90deg, #ff0080, #ff8c00)"
      : intensity === "savage"
      ? "linear-gradient(90deg, #8a2be2, #00bfff)"
      : "linear-gradient(90deg, #4ade80, #22c55e)";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          background: "black",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Roast text */}
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

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
          }}
        >
          <div
            style={{
              padding: "8px 20px",
              borderRadius: "9999px",
              background: badgeGradient,
              fontWeight: 700,
              fontSize: 24,
            }}
          >
            {intensity.toUpperCase()}
          </div>

          <div style={{ fontSize: 22, opacity: 0.7 }}>Roast ID: {id}</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
