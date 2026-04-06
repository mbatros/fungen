export const dynamic = "force-dynamic";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-10">
      <div className="max-w-md w-full text-center space-y-4">
        <h1 className="text-3xl font-bold">You're Upgraded 🎉</h1>

        <p className="text-zinc-300 text-sm">
          Savage Mode is now active on this device.
        </p>

        <button
          onClick={() => (window.location.href = "/")}
          className="mt-6 py-2.5 px-6 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs"
        >
          Back to FunGen
        </button>
      </div>
    </main>
  );
}