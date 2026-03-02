"use client";

import { useState, useEffect } from "react";

export default function SettingsPage() {
  const [isPro, setIsPro] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const check = async () => {
      const res = await fetch("/api/subscription-status", { cache: "no-store" });
      const data = await res.json();
      setIsPro(data.active === true);
      setLoading(false);
    };
    check();
  }, []);

  const openPortal = () => {
    window.location.href = "/api/portal";
  };

  const restorePurchase = () => {
    window.location.href = "/restore";
  };

  return (
    <main className="min-h-screen bg-black text-white flex justify-center px-4 py-10">
      <div className="max-w-md w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-[0_0_40px_rgba(236,72,153,0.25)]">
        <h1 className="text-xl font-semibold mb-4">Settings</h1>

        {/* Subscription Status */}
        <div className="mb-6">
          <p className="text-sm text-zinc-400 mb-1">Subscription</p>
          {loading ? (
            <p className="text-xs text-zinc-500">Checking status…</p>
          ) : isPro ? (
            <p className="text-xs text-emerald-400 mb-2">Savage Mode: Active</p>
          ) : (
            <p className="text-xs text-red-400 mb-2">Savage Mode: Inactive</p>
          )}

          {isPro ? (
            <button
              onClick={openPortal}
              className="w-full py-2 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-fuchsia-500 text-xs font-semibold transition"
            >
              Manage Subscription
            </button>
          ) : (
            <button
              onClick={() => (window.location.href = "/api/checkout")}
              className="w-full py-2 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-xs font-semibold transition"
            >
              Unlock Savage Mode
            </button>
          )}

          <button
            onClick={restorePurchase}
            className="w-full mt-2 py-2 rounded-xl border border-zinc-700 text-xs text-zinc-300 hover:border-fuchsia-500 transition"
          >
            Restore Purchase
          </button>
        </div>

        {/* Legal */}
        <div className="mb-6">
          <p className="text-sm text-zinc-400 mb-2">Legal</p>
          <ul className="text-xs text-zinc-300 space-y-2">
            <li>
              <a href="/privacy" className="hover:text-fuchsia-400 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-fuchsia-400 transition">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="mb-6">
          <p className="text-sm text-zinc-400 mb-2">Support</p>
          <a
            href="mailto:support@fungen.com.au"
            className="text-xs text-zinc-300 hover:text-fuchsia-400 transition"
          >
            support@fungen.com.au
          </a>
        </div>

        {/* App Info */}
        <div className="text-[10px] text-zinc-600 text-center mt-6">
          FunGen • Version 1.0.0<br />
          Made for chaos, screenshots, and viral moments.
        </div>
      </div>
    </main>
  );
}
