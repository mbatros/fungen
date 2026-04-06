import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs"; // Webhooks must run in Node.js

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
});

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
  } catch (err: any) {
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  switch (event.type) {
    //
    // 1. Checkout completed → activate subscription + attach UID
    //
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;

      if (!session.customer) break;

      const customerId = session.customer.toString();

      const uid =
        session.client_reference_id ||
        session.metadata?.fungen_uid ||
        null;

      // Fetch existing customer metadata so we don't wipe fungen_uid later
      const customer = (await stripe.customers.retrieve(
        customerId
      )) as Stripe.Customer;

      const existingMeta = customer.metadata || {};

      if (uid) {
        await stripe.customers.update(customerId, {
          metadata: {
            ...existingMeta,
            ...(session.metadata || {}),
            fungen_uid: uid,
            subscription_active: "true",
          },
        });
      }

      break;
    }

    //
    // 2. Subscription created or updated → sync active status
    //
    case "customer.subscription.created":
    case "customer.subscription.updated": {
      const subscription = event.data.object as Stripe.Subscription;
      const customerId = subscription.customer.toString();

      const isActive =
        subscription.status === "active" ||
        subscription.status === "trialing" ||
        subscription.status === "past_due";

      const customer = (await stripe.customers.retrieve(
        customerId
      )) as Stripe.Customer;

      const existingMeta = customer.metadata || {};

      await stripe.customers.update(customerId, {
        metadata: {
          ...existingMeta,
          subscription_active: isActive ? "true" : "false",
        },
      });

      break;
    }

    //
    // 3. Subscription deleted (canceled or ended) → deactivate
    //
    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;
      const customerId = subscription.customer.toString();

      const customer = (await stripe.customers.retrieve(
        customerId
      )) as Stripe.Customer;

      const existingMeta = customer.metadata || {};

      await stripe.customers.update(customerId, {
        metadata: {
          ...existingMeta,
          subscription_active: "false",
        },
      });

      break;
    }

    //
    // 4. Payment failed → deactivate
    //
    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice;
      const customerId = invoice.customer?.toString();

      if (customerId) {
        const customer = (await stripe.customers.retrieve(
          customerId
        )) as Stripe.Customer;

        const existingMeta = customer.metadata || {};

        await stripe.customers.update(customerId, {
          metadata: {
            ...existingMeta,
            subscription_active: "false",
          },
        });
      }

      break;
    }
  }

  return NextResponse.json({ received: true });
}