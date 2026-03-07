export const runtime = "edge";

import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const roast = req.nextUrl.searchParams.get("roast") ?? "NO ROAST";

  return new ImageResponse(
    (
      <svg
        width="1200"
        height="630"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          background: "black",
          color: "white",
          fontFamily: "Arial",
        }}
      >
        <rect width="1200" height="630" fill="black" />
        <text
          x="50%"
          y="50%"
          fontSize="48"
          fill="white"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {roast}
        </text>
      </svg>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
