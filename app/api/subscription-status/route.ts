import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-10-16",
});

export async function GET(req: Request) {
  const cookieHeader = req.headers.get("cookie") || "";
  const cookies = Object.fromEntries(
    cookieHeader.split("; ").map((c) => c.split("="))
  );

  const uid = cookies["fungen_uid"];

  if (!uid) {
    return NextResponse.json({ active: false });
  }

  const customers = await stripe.customers.list({
    limit: 1,
    expand: ["data.subscriptions"],
    email: undefined,
  });

  const customer = customers.data.find(
    (c) => c.metadata?.fungen_uid === uid
  );

  if (!customer) {
    return NextResponse.json({ active: false });
  }

  const active = customer.metadata?.subscription_active === "true";

  return NextResponse.json({
    active,
    expires: customer.subscriptions?.data?.[0]?.current_period_end || null,
  });
}
