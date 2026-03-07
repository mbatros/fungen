export const runtime = "edge";

import { ImageResponse } from "next/og";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const roast = searchParams.get("roast") || "";
  const intensity = searchParams.get("intensity") || "";
  const id = searchParams.get("id") || "";

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
          background: "#000000",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Glow background */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "-20%",
            width: "1600px",
            height: "1600px",
            background:
              "radial-gradient(circle at center, rgba(138,43,226,0.35), transparent 70%)",
            filter: "blur(120px)",
            zIndex: 0,
          }}
        />

        {/* Roast text */}
        <div
          style={{
            fontSize: 48,
            lineHeight: 1.3,
            fontWeight: 600,
            zIndex: 2,
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
            zIndex: 2,
            fontSize: 28,
            opacity: 0.9,
          }}
        >
          <div
            style={{
              padding: "8px 20px",
              borderRadius: "9999px",
              background:
                intensity === "nuclear"
                  ? "linear-gradient(90deg, #ff0080, #ff8c00)"
                  : intensity === "savage"
                  ? "linear-gradient(90deg, #8a2be2, #00bfff)"
                  : "linear-gradient(90deg, #4ade80, #22c55e)",
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
