import { NextResponse } from "next/server";
import OpenAI from "openai";
import Stripe from "stripe";
import crypto from "crypto";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
});

function parseCookies(header: string | null) {
  if (!header) return {};
  return Object.fromEntries(
    header.split(";").map((c) => {
      const [k, ...v] = c.trim().split("=");
      return [k, v.join("=")];
    })
  );
}

async function checkSubscription(req: Request): Promise<boolean> {
  const cookies = parseCookies(req.headers.get("cookie"));
  const uid = cookies["fungen_uid"];

  if (!uid) return false;

  const search = await stripe.customers.search({
    query: `metadata['fungen_uid']:'${uid}'`,
    expand: ["data.subscriptions"],
  });

  const customer = search.data[0];
  if (!customer) return false;

  const sub = customer.subscriptions?.data?.[0];

  if (
    sub &&
    (sub.status === "active" ||
      sub.status === "trialing" ||
      sub.status === "past_due")
  ) {
    return true;
  }

  return false;
}

function randomItem(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export async function POST(req: Request) {
  const { input, intensity } = await req.json();

  const isPro = await checkSubscription(req);

  const level: "spicy" | "savage" | "nuclear" = isPro
    ? intensity
    : "spicy";

  const personas = [
    "a petty movie villain delivering a dramatic monologue",
    "a toxic reality-show narrator stirring chaos",
    "a savage stand-up comedian roasting the front row",
    "a disappointed coach giving brutally honest feedback",
    "a Shakespearean narrator delivering an over-the-top insult",
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
Make it screenshot-worthy.
`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0.95,
    messages: [{ role: "user", content: prompt }],
  });

  const roast = completion.choices[0].message.content || "";

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