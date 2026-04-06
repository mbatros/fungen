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
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/settings?error=no-account`
    );
  }

  const search = await stripe.customers.search({
    query: `metadata['fungen_uid']:'${uid}'`,
  });

  const customer = search.data[0];

  if (!customer) {
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/settings?error=no-customer`
    );
  }

  const session = await stripe.billingPortal.sessions.create({
    customer: customer.id,
    return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/settings`,
  });

  return NextResponse.redirect(session.url, 303);
}