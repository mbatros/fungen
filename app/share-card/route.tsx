export const runtime = "edge";

import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

type ThemeKey = "pink-cyan" | "purple-blue" | "green-black" | "gold-black";

const THEMES: Record<
  ThemeKey,
  {
    bg: string;
    cardBg: string;
    primary: string;
    secondary: string;
  }
> = {
  "pink-cyan": {
    bg: "#000000",
    cardBg: "#0d0d0d",
    primary: "#ff2d95",
    secondary: "#00eaff",
  },
  "purple-blue": {
    bg: "#020014",
    cardBg: "#070719",
    primary: "#a855ff",
    secondary: "#38bdf8",
  },
  "green-black": {
    bg: "#000000",
    cardBg: "#020b06",
    primary: "#22c55e",
    secondary: "#4ade80",
  },
  "gold-black": {
    bg: "#020202",
    cardBg: "#111111",
    primary: "#facc15",
    secondary: "#f97316",
  },
};

function getIntensityBadge(intensity: string | null) {
  switch ((intensity || "").toLowerCase()) {
    case "mild":
      return { label: "😅 Mild Mode", emoji: "😅" };
    case "savage":
      return { label: "🔥 Savage Mode", emoji: "🔥" };
    case "savage-plus":
      return { label: "🔥 Savage+ Mode", emoji: "🔥" };
    case "nuclear":
      return { label: "💀 Nuclear Mode", emoji: "💀" };
    case "catastrophic":
      return { label: "☢️ Catastrophic Mode", emoji: "☢️" };
    default:
      return { label: "🔥 Savage Mode", emoji: "🔥" };
  }
}

function getPersonaLabel(persona: string | null) {
  if (!persona) return null;
  const normalized = persona.trim();
  if (!normalized) return null;
  return normalized;
}

function getTheme(themeParam: string | null): ThemeKey {
  const key = (themeParam || "").toLowerCase() as ThemeKey;
  if (key in THEMES) return key;
  return "pink-cyan";
}

function getFontSize(roast: string) {
  const len = roast.length;

  if (len <= 60) return 56;
  if (len <= 120) return 48;
  if (len <= 200) return 40;
  if (len <= 280) return 34;
  return 30;
}

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const roast =
    searchParams.get("roast")?.trim() || "You forgot to add a roast.";
  const intensity = searchParams.get("intensity");
  const persona = getPersonaLabel(searchParams.get("persona"));
  const themeKey = getTheme(searchParams.get("theme"));
  const premium = searchParams.get("premium") === "true";
  const watermark = searchParams.get("watermark") !== "false"; // default: true

  const theme = THEMES[themeKey];
  const badge = getIntensityBadge(intensity);
  const fontSize = getFontSize(roast);

  const showPersona = !!persona;
  const showWatermark = watermark;
  const ctaText = showWatermark
    ? "Generate yours at fungen.com.au"
    : premium
    ? ""
    : "fungen.com.au";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: theme.bg,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
          position: "relative",
        }}
      >
        {/* Outer Glow */}
        <div
          style={{
            position: "absolute",
            width: "1100px",
            height: "530px",
            borderRadius: "32px",
            background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
            filter: "blur(40px)",
            opacity: 0.35,
          }}
        />

        {/* Card */}
        <div
          style={{
            width: "1100px",
            height: "530px",
            background: theme.cardBg,
            borderRadius: "32px",
            border: "2px solid rgba(255,255,255,0.08)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "48px 56px",
            boxShadow: `0 0 40px ${theme.primary}55, 0 0 40px ${theme.secondary}55`,
            position: "relative",
          }}
        >
          {/* Persona (top-left) */}
          {showPersona && (
            <div
              style={{
                position: "absolute",
                top: "32px",
                left: "32px",
                padding: "10px 22px",
                borderRadius: "999px",
                border: `1px solid ${theme.secondary}66`,
                color: "#ffffff",
                fontSize: "24px",
                opacity: 0.9,
                background:
                  "linear-gradient(135deg, rgba(0,0,0,0.9), rgba(0,0,0,0.6))",
                textTransform: "capitalize",
              }}
            >
              🎭 {persona}
            </div>
          )}

          {/* Intensity Badge (top-right) */}
          <div
            style={{
              position: "absolute",
              top: "32px",
              right: "32px",
              background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
              padding: "12px 28px",
              borderRadius: "999px",
              color: "white",
              fontSize: "26px",
              fontWeight: "bold",
              boxShadow: `0 0 20px ${theme.primary}aa`,
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span>{badge.emoji}</span>
            <span>{badge.label}</span>
          </div>

          {/* Roast Text */}
          <div
            style={{
              color: "white",
              fontSize: `${fontSize}px`,
              fontWeight: "bold",
              textAlign: "center",
              lineHeight: 1.3,
              textShadow: `0 0 14px ${theme.secondary}aa`,
              maxWidth: "900px",
              whiteSpace: "pre-wrap",
            }}
          >
            {roast}
          </div>

          {/* CTA / Branding */}
          {ctaText && (
            <div
              style={{
                position: "absolute",
                bottom: "32px",
                color: theme.secondary,
                fontSize: "26px",
                opacity: 0.95,
                textShadow: `0 0 10px ${theme.secondary}cc`,
              }}
            >
              {ctaText}
            </div>
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}