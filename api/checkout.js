import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [{
      price_data: {
        currency: "aud",
        product_data: { name: "FunGen Unlimited Access" },
        unit_amount: 299
      },
      quantity: 1
    }],
    success_url: "https://fungen.com.au?success=true",
    cancel_url: "https://fungen.com.au"
  });

  res.status(200).json({ url: session.url });
}