import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

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
    return NextResponse.json(
      { error: "No user ID found. Cannot open billing portal." },
      { status: 400 }
    );
  }

  const customers = await stripe.customers.list({
    limit: 20,
    expand: ["data.subscriptions"],
  });

  const customer = customers.data.find(
    (c) => c.metadata?.fungen_uid === uid
  );

  if (!customer) {
    return NextResponse.json(
      { error: "No Stripe customer found for this device." },
      { status: 404 }
    );
  }

  const session = await stripe.billingPortal.sessions.create({
    customer: customer.id,
    return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/?portal_return=1`,
  });

  return NextResponse.redirect(session.url, 303);
}
