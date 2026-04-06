export const dynamic = "force-static";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-10">
      <div className="max-w-2xl w-full space-y-4 text-sm text-zinc-200">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

        <p>
          FunGen collects only the minimum information needed to operate the
          service, process payments, and prevent abuse.
        </p>

        <h2 className="text-lg font-semibold mt-4">Data we collect</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Roast prompts and generated content for processing and abuse prevention.</li>
          <li>Anonymous identifiers (like cookies) to remember your session.</li>
          <li>Subscription and billing information handled securely by Stripe.</li>
        </ul>

        <h2 className="text-lg font-semibold mt-4">Payments</h2>
        <p>
          All payments are processed by Stripe. We do not store your full
          payment details on our servers.
        </p>

        <h2 className="text-lg font-semibold mt-4">Cookies</h2>
        <p>
          We use a cookie to associate your browser with your subscription
          status (Savage Mode). This cookie does not track you across other
          sites.
        </p>

        <h2 className="text-lg font-semibold mt-4">Contact</h2>
        <p>
          If you have questions about this policy, please contact us via the
          website.
        </p>

        <button
          onClick={() => (window.location.href = "/")}
          className="mt-4 py-2.5 px-6 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs"
        >
          Back to FunGen
        </button>
      </div>
    </main>
  );
}