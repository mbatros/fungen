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

  if (!uid) {
    return NextResponse.json({
      active: false,
      expires: null,
      uid: null,
    });
  }

  const customers = await stripe.customers.list({
    limit: 1,
    expand: ["data.subscriptions"],
  });

  const customer = customers.data.find(
    (c) => c.metadata?.fungen_uid === uid
  );

  if (!customer) {
    return NextResponse.json({
      active: false,
      expires: null,
      uid,
    });
  }

  const active = customer.metadata?.subscription_active === "true";

  const sub = customer.subscriptions?.data?.[0];
  const expires = sub?.current_period_end || null;

  return NextResponse.json({
    active,
    expires,
    uid,
  });
}
