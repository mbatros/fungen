export const runtime = "edge";

import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "black",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 60,
          fontFamily: "sans-serif",
        }}
      >
        TEST SHARE CARD
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
