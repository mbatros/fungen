import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs"; // Webhooks must run in Node, not Edge

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-10-16",
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
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;

      if (!session.customer) break;

      const customerId = session.customer.toString();
      const uid =
        session.client_reference_id ||
        session.metadata?.fungen_uid ||
        null;

      if (uid) {
        await stripe.customers.update(customerId, {
          metadata: {
            ...(session.metadata || {}),
            fungen_uid: uid,
            subscription_active: "true",
          },
        });
      }

      break;
    }

    case "customer.subscription.created":
    case "customer.subscription.updated": {
      const subscription = event.data.object as Stripe.Subscription;
      const customerId = subscription.customer.toString();

      const isActive =
        subscription.status === "active" ||
        subscription.status === "trialing";

      await stripe.customers.update(customerId, {
        metadata: {
          subscription_active: isActive ? "true" : "false",
        },
      });

      break;
    }

    case "customer.subscription.deleted":
    case "customer.subscription.canceled": {
      const subscription = event.data.object as Stripe.Subscription;
      const customerId = subscription.customer.toString();

      await stripe.customers.update(customerId, {
        metadata: {
          subscription_active: "false",
        },
      });

      break;
    }

    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice;
      const customerId = invoice.customer?.toString();

      if (customerId) {
        await stripe.customers.update(customerId, {
          metadata: {
            subscription_active: "false",
          },
        });
      }

      break;
    }
  }

  return NextResponse.json({ received: true });
}
