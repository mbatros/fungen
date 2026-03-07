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
          justifyContent: "center",
          alignItems: "center",
          background: "white",
          fontSize: 48,
          padding: "40px",
          textAlign: "center",
        }}
      >
        {roast}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
