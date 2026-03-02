import { NextResponse } from "next/server";
import Stripe from "stripe";
import crypto from "crypto";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-10-16",
});

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ ok: false, error: "Email required" }, { status: 400 });
  }

  const customers = await stripe.customers.list({
    email,
    limit: 1,
    expand: ["data.subscriptions"],
  });

  const customer = customers.data[0];

  if (!customer) {
    return NextResponse.json({ ok: false, error: "No active subscription found for that email." });
  }

  const hasActiveSub = customer.subscriptions?.data?.some(
    (s) => s.status === "active" || s.status === "trialing"
  );

  if (!hasActiveSub) {
    return NextResponse.json({ ok: false, error: "No active subscription found." });
  }

  const uid = crypto.randomBytes(16).toString("hex");

  await stripe.customers.update(customer.id, {
    metadata: {
      ...(customer.metadata || {}),
      fungen_uid: uid,
    },
  });

  const res = NextResponse.json({ ok: true });

  res.headers.set(
    "Set-Cookie",
    `fungen_uid=${uid}; Path=/; Domain=.fungen.com.au; Max-Age=31536000; SameSite=Lax; Secure`
  );

  return res;
}
