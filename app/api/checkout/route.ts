import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
});

// Parse cookies manually
function parseCookies(header: string | null) {
  if (!header) return {};
  return Object.fromEntries(
    header.split(";").map((c) => {
      const [k, ...v] = c.trim().split("=");
      return [k, v.join("=")];
    })
  );
}

export async function GET(req: Request) {
  try {
    const cookies = parseCookies(req.headers.get("cookie"));
    const uid = cookies["fungen_uid"];

    // Create checkout session with proper customer metadata
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID!,
          quantity: 1,
        },
      ],

      // ⭐ FIXED FOR STRIPE 2024 API
      customer_creation: "always",

      // Attach metadata so webhook can link subscription → user
      metadata: {
        fungen_uid: uid || "unknown",
      },

      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/?upgraded=1`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/?canceled=1`,
    });

    return NextResponse.redirect(session.url!, 303);
  } catch (err: any) {
    console.error("Checkout session error:", err);
    return NextResponse.json(
      { error: err.message || "Checkout session failed" },
      { status: 500 }
    );
  }
}