export const runtime = "edge";

import { ImageResponse } from "next/og";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const roast = searchParams.get("roast") || "NO ROAST";
  const intensity = searchParams.get("intensity") || "NONE";
  const id = searchParams.get("id") || "0";

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "black",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 40,
          fontFamily: "sans-serif",
        }}
      >
        <div>Roast: {roast}</div>
        <div>Intensity: {intensity}</div>
        <div>ID: {id}</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
