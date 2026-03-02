export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10 flex justify-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="text-sm text-zinc-300 mb-4">
          Last updated: March 2026
        </p>

        <p className="text-sm text-zinc-300 mb-6">
          This Privacy Policy explains how FunGen (“we”, “our”, “us”) collects, uses, and protects information when you use our website and AI‑powered services at fungen.com.au.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Information We Collect</h2>

        <p className="text-sm text-zinc-300 mb-4">
          We do not collect personal accounts or login details. We operate using anonymous identifiers.
        </p>

        <ul className="text-sm text-zinc-300 space-y-2 mb-6">
          <li>• <strong>Anonymous Device ID (fungen_uid)</strong> — stored in a cookie to identify your device for subscription access.</li>
          <li>• <strong>Subscription Information</strong> — Stripe provides us with subscription status (active/inactive), renewal dates, and payment status.</li>
          <li>• <strong>Optional Email</strong> — only if you enter it during Restore Purchase or Stripe checkout.</li>
          <li>• <strong>Roast Inputs</strong> — processed temporarily by our AI provider to generate responses. We do not store them.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">How We Use Information</h2>

        <ul className="text-sm text-zinc-300 space-y-2 mb-6">
          <li>• Provide access to Spicy, Savage, and Nuclear roast levels.</li>
          <li>• Verify subscription status.</li>
          <li>• Restore access if you clear cookies.</li>
          <li>• Improve service performance and prevent abuse.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">Stripe Payments</h2>

        <p className="text-sm text-zinc-300 mb-6">
          Payments are processed securely by Stripe. We do not store credit card numbers. Stripe may store your email, payment method, and billing details according to their own Privacy Policy.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Cookies</h2>

        <p className="text-sm text-zinc-300 mb-6">
          We use a single cookie (“fungen_uid”) to identify your device for subscription access. Clearing cookies may require using Restore Purchase.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">AI Processing</h2>

        <p className="text-sm text-zinc-300 mb-6">
          Your roast inputs are sent to our AI provider for processing. We do not store or reuse your inputs. Outputs are generated in real time.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Data Sharing</h2>

        <p className="text-sm text-zinc-300 mb-6">
          We do not sell or share your data. We only share necessary information with:
        </p>

        <ul className="text-sm text-zinc-300 space-y-2 mb-6">
          <li>• Stripe (payments)</li>
          <li>• AI provider (roast generation)</li>
          <li>• Hosting provider (Vercel)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">Your Rights</h2>

        <p className="text-sm text-zinc-300 mb-6">
          You may request deletion of your Stripe customer record by contacting support@fungen.com.au.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Contact</h2>

        <p className="text-sm text-zinc-300 mb-6">
          Email: support@fungen.com.au
        </p>
      </div>
    </main>
  );
}
