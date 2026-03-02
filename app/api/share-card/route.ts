import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const roast = searchParams.get("roast") || "Savage Mode unlocked.";
  const intensity = (searchParams.get("intensity") || "spicy").toUpperCase();
  const id = searchParams.get("id") || "XXXXXX";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          padding: "48px",
          background:
            "radial-gradient(circle at top, #ec4899 0%, #020617 45%, #000000 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Branding */}
        <div style={{ fontSize: 28, opacity: 0.85 }}>FunGen</div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 800,
            marginTop: 6,
            letterSpacing: "-1px",
          }}
        >
          Savage <span style={{ color: "#ec4899" }}>Mode</span>
        </div>

        {/* Roast Text */}
        <div
          style={{
            marginTop: 40,
            fontSize: 34,
            lineHeight: 1.3,
            maxWidth: "900px",
            whiteSpace: "pre-wrap",
          }}
        >
          {roast}
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            opacity: 0.85,
          }}
        >
          <div>
            <div style={{ fontSize: 16, letterSpacing: 4 }}>{intensity}</div>
            <div style={{ fontSize: 14, opacity: 0.7 }}>Roast ID: {id}</div>
          </div>

          <div style={{ fontSize: 18, opacity: 0.8 }}>fungen.com.au</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
