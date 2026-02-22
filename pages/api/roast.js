import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { name, traits } = req.body;

    if (!name || !traits) {
      return res.status(400).json({ error: "Missing name or traits" });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a savage but funny roast comedian. Keep it under 120 words."
        },
        {
          role: "user",
          content: `Roast ${name} who is described as: ${traits}`
        }
      ]
    });

    const roastText = completion?.choices?.[0]?.message?.content || "Couldn't generate a roast.";

    res.status(200).json({ roast: roastText });
  } catch (err) {
    console.error("Roast API error:", err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
}
