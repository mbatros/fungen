export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-10">
      <div className="max-w-2xl w-full space-y-4 text-sm text-zinc-200">
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>

        <p>
          By using FunGen, you agree to these terms. If you do not agree, do
          not use the service.
        </p>

        <h2 className="text-lg font-semibold mt-4">Use of the service</h2>
        <p>
          FunGen is for entertainment purposes only. You are responsible for
          how you share and use the generated content.
        </p>

        <h2 className="text-lg font-semibold mt-4">Subscriptions</h2>
        <p>
          Savage Mode is a recurring subscription billed via Stripe. You can
          cancel at any time via the billing portal in Settings.
        </p>

        <h2 className="text-lg font-semibold mt-4">Refunds</h2>
        <p>
          Refunds are handled on a case-by-case basis and may be processed via
          Stripe where applicable.
        </p>

        <h2 className="text-lg font-semibold mt-4">Limitation of liability</h2>
        <p>
          FunGen is provided &quot;as is&quot; without warranties. We are not
          liable for any damages arising from use of the service or generated
          content.
        </p>

        <h2 className="text-lg font-semibold mt-4">Changes</h2>
        <p>
          We may update these terms from time to time. Continued use of the
          service after changes means you accept the new terms.
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