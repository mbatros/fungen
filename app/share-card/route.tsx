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
          width: 1200,
          height: 630,
          background: "#000000",
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
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=0, must-revalidate",
      },
    }
  );
}
