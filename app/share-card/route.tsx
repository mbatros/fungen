export const runtime = "edge";

import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 64,
        color: "white",
        background: "black",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      TEST
    </div>,
    {
      width: 1200,
      height: 630,
    }
  );
}
