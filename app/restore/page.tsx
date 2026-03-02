"use client";

import { useState } from "react";

export default function RestorePage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleRestore = async () => {
    setLoading(true);
    setMessage(null);
    setError(null);

    const res = await fetch("/api/restore", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (data.ok) {
      setMessage("Savage Mode restored. Redirecting…");
      setTimeout(() => {
        window.location.href = "/";
      }, 1200);
    } else {
      setError(data.error || "Could not restore purchase.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-sm w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-5">
        <h1 className="text-lg font-semibold mb-2">Restore Savage Mode</h1>
        <p className="text-xs text-zinc-400 mb-4">
          Enter the email you used at checkout. We’ll reconnect your subscription to this device.
        </p>

        <input
          type="email"
          className="w-full bg-black border border-zinc-700 rounded-xl px-3 py-2 text-sm mb-3 outline-none focus:border-fuchsia-500"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleRestore}
          disabled={loading || !email}
          className="w-full py-2 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 disabled:bg-zinc-700 text-xs font-semibold"
        >
          {loading ? "Restoring…" : "Restore Purchase"}
        </button>

        {message && <p className="mt-3 text-xs text-emerald-400">{message}</p>}
        {error && <p className="mt-3 text-xs text-red-400">{error}</p>}
      </div>
    </main>
  );
}
