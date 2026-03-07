import { NextResponse } from "next/server";
import OpenAI from "openai";
import crypto from "crypto";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

// TEMPORARY FIX — prevents OG route from breaking
async function checkSubscription() {
  return false; // always treat user as non‑pro for now
}

function randomItem(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export async function POST(req: Request) {
  const { input, intensity } = await req.json();

  // SAFE: no internal API calls
  const isPro = await checkSubscription();

  const level = isPro ? intensity : "spicy";

  const personas = [
    "a petty movie villain delivering a dramatic monologue",
    "a toxic reality‑show narrator stirring chaos",
    "a savage stand‑up comedian roasting the front row",
    "a disappointed coach giving brutally honest feedback",
    "a Shakespearean narrator delivering an over‑the‑top insult",
  ];

  const categories = [
    "ego",
    "appearance",
    "vibes",
    "life choices",
    "energy",
    "aura",
    "social presence",
  ];

  const persona = randomItem(personas);
  const category = randomItem(categories);

  const prompt = `
You are ${persona}. 
Roast the target based on the category: ${category}.
The target is: "${input}".

Tone rules:
- SPICY: playful, sharp, clever.
- SAVAGE: harsher, more dramatic, more cutting, still humorous.
- NUCLEAR: theatrical, over-the-top, exaggerated, chaotic, but NEVER hateful, abusive, or targeting protected traits.

Generate a ${level.toUpperCase()} roast.
Keep it under 3 sentences.
Make it screenshot‑worthy.
`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0.95,
    messages: [{ role: "user", content: prompt }],
  });

  let roast = completion.choices[0].message.content;

  const roastId = crypto.randomBytes(8).toString("hex");
  const hash = crypto
    .createHash("sha256")
    .update(roast)
    .digest("hex")
    .slice(0, 12);

  return NextResponse.json({
    roast,
    roastId,
    hash,
    intensity: level,
    persona,
    category,
    pro: isPro,
  });
}
