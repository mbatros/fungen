export const runtime = "edge";

import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const roast = req.nextUrl.searchParams.get("roast") ?? "NO ROAST";

  const svg = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="630" fill="black" />
      <text
        x="50%"
        y="50%"
        font-size="48"
        fill="white"
        font-family="Arial"
        text-anchor="middle"
        dominant-baseline="middle"
      >
        ${roast}
      </text>
    </svg>
  `;

  return new ImageResponse(svg, {
    width: 1200,
    height: 630,
  });
}
