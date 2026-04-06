export const runtime = "edge";

import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

// ---------- FONT LOADING (Space Grotesk Regular + Bold) ----------

const fontRegular = fetch(
  new URL("../../assets/fonts/SpaceGrotesk-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const fontBold = fetch(
  new URL("../../assets/fonts/SpaceGrotesk-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

// ---------- TYPES & CONSTANTS ----------

type ThemeKey = "pink-cyan" | "purple-blue" | "green-black" | "gold-black";
type VariantKey = "default" | "square" | "portrait" | "twitter" | "tiktok";

const THEMES: Record<
  ThemeKey,
  { bg: string; cardBg: string; primary: string; secondary: string }
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

const VARIANTS: Record<
  VariantKey,
  { width: number; height: number; maxWidth: number }
> = {
  default: { width: 1200, height: 630, maxWidth: 900 },
  square: { width: 1080, height: 1080, maxWidth: 800 },
  portrait: { width: 1080, height: 1350, maxWidth: 800 },
  twitter: { width: 1600, height: 900, maxWidth: 1100 },
  tiktok: { width: 1080, height: 1920, maxWidth: 800 },
};

// ---------- HELPERS ----------

function getIntensityBadge(intensity: string | null) {
  switch ((intensity || "").toLowerCase()) {
    case "spicy":
      return { label: "🌶 Spicy Mode", emoji: "🌶" };
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
      return { label: "🌶 Spicy Mode", emoji: "🌶" };
  }
}

function getPersonaLabel(persona: string | null) {
  if (!persona) return null;
  const normalized = persona.trim();
  return normalized || null;
}

function getTheme(themeParam: string | null): ThemeKey {
  const key = (themeParam || "").toLowerCase() as ThemeKey;
  return key in THEMES ? key : "pink-cyan";
}

function getVariant(variantParam: string | null): VariantKey {
  const key = (variantParam || "").toLowerCase() as VariantKey;
  return key in VARIANTS ? key : "default";
}

function getFontSize(roast: string, variant: VariantKey) {
  const len = roast.length;

  if (variant === "tiktok" || variant === "portrait") {
    if (len <= 60) return 60;
    if (len <= 120) return 50;
    if (len <= 200) return 42;
    if (len <= 280) return 36;
    return 32;
  }

  if (len <= 60) return 56;
  if (len <= 120) return 48;
  if (len <= 200) return 40;
  if (len <= 280) return 34;
  return 30;
}

// Static, OG‑safe QR‑like block (visual only)
function QRBlock() {
  return (
    <div
      style={{
        position: "absolute",
        right: 32,
        bottom: 32,
        width: 140,
        height: 140,
        backgroundColor: "#000000",
        borderRadius: 16,
        border: "2px solid rgba(255,255,255,0.4)",
        padding: 12,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Static QR‑like pattern */}
        <rect x="0" y="0" width="24" height="24" />
        <rect x="76" y="0" width="24" height="24" />
        <rect x="0" y="76" width="24" height="24" />

        <rect x="40" y="8" width="10" height="10" />
        <rect x="60" y="24" width="10" height="10" />
        <rect x="24" y="44" width="10" height="10" />
        <rect x="70" y="52" width="10" height="10" />
        <rect x="44" y="70" width="10" height="10" />
        <rect x="62" y="80" width="10" height="10" />
      </svg>
    </div>
  );
}

// ---------- MAIN HANDLER ----------

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;

    const roast =
      searchParams.get("roast")?.trim() || "You forgot to add a roast.";
    const intensity = searchParams.get("intensity");
    const persona = getPersonaLabel(searchParams.get("persona"));
    const themeKey = getTheme(searchParams.get("theme"));
    const premium = searchParams.get("premium") === "true";
    const watermark = searchParams.get("watermark") !== "false";
    const variantKey = getVariant(searchParams.get("variant"));
    const avatarUrl = searchParams.get("avatar") || null;
    const shareUrl = searchParams.get("url") || "https://fungen.com.au";

    const theme = THEMES[themeKey];
    const badge = getIntensityBadge(intensity);
    const variant = VARIANTS[variantKey];
    const fontSize = getFontSize(roast, variantKey);

    const ctaText = watermark
      ? "Generate yours at fungen.com.au"
      : premium
      ? ""
      : "fungen.com.au";

    const [regularFont, boldFont] = await Promise.all([
      fontRegular,
      fontBold,
    ]);

    return new ImageResponse(
      <div
        style={{
          width: `${variant.width}px`,
          height: `${variant.height}px`,
          background: theme.bg,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "SpaceGrotesk",
          position: "relative",
        }}
      >
        {/* Glow background */}
        <div
          style={{
            position: "absolute",
            width: `${variant.width - 100}px`,
            height: `${variant.height - 100}px`,
            borderRadius: "32px",
            background: `radial-gradient(circle at top left, ${theme.primary}, transparent 60%), radial-gradient(circle at bottom right, ${theme.secondary}, transparent 60%)`,
            opacity: 0.45,
          }}
        />

        {/* Card */}
        <div
          style={{
            width: `${variant.width - 100}px`,
            height: `${variant.height - 100}px`,
            background: theme.cardBg,
            borderRadius: "32px",
            border: "2px solid rgba(255,255,255,0.08)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "48px 56px",
            position: "relative",
          }}
        >
          {/* Premium badge */}
          {premium && (
            <div
              style={{
                position: "absolute",
                top: 32,
                left: 32,
                padding: "8px 20px",
                borderRadius: "999px",
                background:
                  "linear-gradient(135deg, #facc15, #f97316, #ef4444)",
                color: "#000000",
                fontSize: 22,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: 8,
                boxShadow: "0 0 18px rgba(250,204,21,0.6)",
              }}
            >
              <span>⭐</span>
              <span>PREMIUM USER</span>
            </div>
          )}

          {/* Persona */}
          {persona && (
            <div
              style={{
                position: "absolute",
                top: premium ? 80 : 32,
                left: 32,
                padding: "10px 22px",
                borderRadius: "999px",
                border: `1px solid ${theme.secondary}66`,
                color: "#ffffff",
                fontSize: 24,
                opacity: 0.9,
                background:
                  "linear-gradient(135deg, rgba(0,0,0,0.9), rgba(0,0,0,0.6))",
                textTransform: "capitalize",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span>🎭</span>
              <span>{persona}</span>
            </div>
          )}

          {/* Intensity */}
          <div
            style={{
              position: "absolute",
              top: 32,
              right: 32,
              background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
              padding: "12px 28px",
              borderRadius: "999px",
              color: "white",
              fontSize: 26,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: 10,
              boxShadow: "0 0 18px rgba(0,0,0,0.6)",
            }}
          >
            <span>{badge.emoji}</span>
            <span>{badge.label}</span>
          </div>

          {/* Avatar (optional) */}
          {avatarUrl && (
            <div
              style={{
                position: "absolute",
                left: 32,
                bottom: 32,
                width: 120,
                height: 120,
                borderRadius: "999px",
                border: `3px solid ${theme.secondary}`,
                overflow: "hidden",
                boxShadow: "0 0 18px rgba(0,0,0,0.8)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={avatarUrl}
                alt="avatar"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          )}

          {/* Roast text */}
          <div
            style={{
              color: "white",
              fontSize,
              fontWeight: 700,
              textAlign: "center",
              lineHeight: 1.3,
              maxWidth: `${variant.maxWidth}px`,
              whiteSpace: "pre-wrap",
              paddingTop: premium || persona ? 40 : 0,
              paddingBottom: 40,
            }}
          >
            {roast}
          </div>

          {/* CTA / watermark */}
          {ctaText && (
            <div
              style={{
                position: "absolute",
                bottom: 32,
                left: avatarUrl ? 180 : 32,
                color: theme.secondary,
                fontSize: 26,
                opacity: 0.95,
              }}
            >
              {ctaText}
            </div>
          )}

          {/* QR visual */}
          <QRBlock />

          {/* URL label above QR */}
          <div
            style={{
              position: "absolute",
              right: 32,
              bottom: 32 + 140 + 8,
              color: "#ffffff",
              fontSize: 18,
              opacity: 0.8,
              textAlign: "right",
              maxWidth: 220,
            }}
          >
            {shareUrl.replace(/^https?:\/\//, "")}
          </div>
        </div>
      </div>,
      {
        width: variant.width,
        height: variant.height,
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
        fonts: [
          {
            name: "SpaceGrotesk",
            data: regularFont,
            weight: 400,
            style: "normal",
          },
          {
            name: "SpaceGrotesk",
            data: boldFont,
            weight: 700,
            style: "normal",
          },
        ],
      }
    );
  } catch {
    return new Response("OG image generation failed", { status: 500 });
  }
}