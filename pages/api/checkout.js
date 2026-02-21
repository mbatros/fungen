
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [{
      price: process.env.STRIPE_PRICE_ID,
      quantity: 1
    }],
    success_url: process.env.NEXT_PUBLIC_BASE_URL + "/success",
    cancel_url: process.env.NEXT_PUBLIC_BASE_URL
  });

  res.status(200).json({ url: session.url });
}
