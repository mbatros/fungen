export const runtime = "edge";

import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const roast = req.nextUrl.searchParams.get("roast") ?? "NO ROAST";
  const intensity = req.nextUrl.searchParams.get("intensity") ?? "NONE";
  const id = req.nextUrl.searchParams.get("id") ?? "0";

  const text = `Roast: ${roast} | Intensity: ${intensity} | ID: ${id}`;

  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        color: "white",
        background: "black",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px",
      }}
    >
      {text}
    </div>,
    {
      width: 1200,
      height: 630,
    }
  );
}
