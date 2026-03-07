export const runtime = "edge";

import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const roast = searchParams.get("roast") ?? "NO ROAST";
  const intensity = searchParams.get("intensity") ?? "NONE";
  const id = searchParams.get("id") ?? "0";

  return new ImageResponse(
    {
      type: "div",
      props: {
        style: {
          width: "1200px",
          height: "630px",
          backgroundColor: "black",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "48px",
          fontFamily: "Arial",
        },
        children: [
          { type: "div", props: { children: `Roast: ${roast}` } },
          { type: "div", props: { children: `Intensity: ${intensity}` } },
          { type: "div", props: { children: `ID: ${id}` } },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
    }
  );
}
