export const runtime = "edge";

import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const roast = req.nextUrl.searchParams.get("roast") ?? "NO ROAST";

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
      }}
    >
      {/* ONE CHILD ONLY */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>Roast: {roast}</div>
        <div>ID: 123</div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    }
  );
}
