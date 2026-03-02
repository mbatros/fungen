import { NextResponse } from "next/server";
import Stripe from "stripe";
import crypto from "crypto";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-10-16",
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

export async function GET(req: Request) {
  const cookies = parseCookies(req.headers.get("cookie"));
  let uid = cookies["fungen_uid"];

  if (!uid) {
    uid = crypto.randomBytes(16).toString("hex");
  }

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [
      {
        price: process.env.STRIPE_PRICE_ID!,
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/?upgraded=1`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/?canceled=1`,
    client_reference_id: uid,
    metadata: {
      fungen_uid: uid,
    },
  });

  const res = NextResponse.redirect(session.url as string, 303);
  res.headers.set(
    "Set-Cookie",
    `fungen_uid=${uid}; Path=/; Domain=.fungen.com.au; Max-Age=31536000; SameSite=Lax; Secure`
  );
  return res;
}
