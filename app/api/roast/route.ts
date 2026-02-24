import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { input, savage } = await req.json();

  const prompt = savage
    ? `Give a brutally savage but funny roast about: ${input}`
    : `Give a light funny roast about: ${input}`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return NextResponse.json({
    roast: completion.choices[0].message.content,
  });
}
