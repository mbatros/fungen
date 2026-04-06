import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
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

  // No cookie → definitely not subscribed
  if (!uid) {
    return NextResponse.json({
      active: false,
      expires: null,
      uid: null,
    });
  }

  // Search Stripe customers by metadata
  const search = await stripe.customers.search({
    query: `metadata['fungen_uid']:'${uid}'`,
    expand: ["data.subscriptions"],
  });

  const customer = search.data[0];

  if (!customer) {
    return NextResponse.json({
      active: false,
      expires: null,
      uid,
    });
  }

  // Determine subscription status
  const sub = customer.subscriptions?.data?.[0];

  const isActive =
    sub &&
    (sub.status === "active" ||
      sub.status === "trialing" ||
      sub.status === "past_due");

  const expires = sub?.current_period_end || null;

  return NextResponse.json({
    active: !!isActive,
    expires,
    uid,
  });
}