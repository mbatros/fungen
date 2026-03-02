import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

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
  const uid = cookies["fungen_uid"];

  if (!uid) {
    return NextResponse.json({
      ok: false,
      reason: "No fungen_uid cookie found",
      uid: null,
      stripeCustomerFound: false,
      subscriptionActive: false,
      subscriptions: [],
    });
  }

  const customers = await stripe.customers.list({
    limit: 20,
    expand: ["data.subscriptions"],
  });

  const customer = customers.data.find(
    (c) => c.metadata?.fungen_uid === uid
  );

  if (!customer) {
    return NextResponse.json({
      ok: false,
      reason: "No Stripe customer with this UID",
      uid,
      stripeCustomerFound: false,
      subscriptionActive: false,
      subscriptions: [],
    });
  }

  const subs = customer.subscriptions?.data || [];

  const active = customer.metadata?.subscription_active === "true";

  return NextResponse.json({
    ok: true,
    uid,
    stripeCustomerFound: true,
    subscriptionActive: active,
    metadata: customer.metadata,
    subscriptions: subs.map((s) => ({
      id: s.id,
      status: s.status,
      current_period_end: s.current_period_end,
      cancel_at_period_end: s.cancel_at_period_end,
    })),
  });
}
