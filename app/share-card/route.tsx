export const runtime = "edge";

import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const roast = searchParams.get("roast") ?? "NO ROAST";
  const intensity = searchParams.get("intensity") ?? "NONE";
  const id = searchParams.get("id") ?? "0";

  return new ImageResponse(
    <div
      style={{
        width: "1200px",
        height: "630px",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 40,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div>Roast: {roast}</div>
      <div>Intensity: {intensity}</div>
      <div>ID: {id}</div>
    </div>,
    {
      width: 1200,
      height: 630,
    }
  );
}
