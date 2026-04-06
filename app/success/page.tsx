export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-10">
      <div className="max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4 text-emerald-400">
          Savage Mode Unlocked
        </h1>
        <p className="text-sm text-zinc-300 mb-4">
          Your subscription is active. You now have access to Savage and
          Nuclear roasts with no watermark.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-2 py-2.5 px-6 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-sm font-semibold"
        >
          Start Roasting
        </button>
      </div>
    </main>
  );
}