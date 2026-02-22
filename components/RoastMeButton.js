
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, traits } = req.body;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a savage but funny roast comedian. Keep it under 120 words." },
      { role: "user", content: `Roast ${name} who is described as: ${traits}` }
    ]
  });

  res.status(200).json({ roast: completion.choices[0].message.content });
}
