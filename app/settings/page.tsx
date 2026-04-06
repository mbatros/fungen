export const dynamic = "force-static";

"use client";

import { useEffect, useState } from "react";

type StatusResponse = {
  active: boolean;
  expires: number | null;
  uid: string | null;
};

export default function SettingsPage() {
  const [status, setStatus] = useState<StatusResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/subscription-status", {
        cache: "no-store",
      });
      const data = await res.json();
      setStatus(data);
      setLoading(false);
    };
    load();
  }, []);

  const manageBilling = () => {
    window.location.href = "/api/portal";
  };

  const restore = () => {
    window.location.href = "/restore";
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-10">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Account Settings
        </h1>

        {loading && (
          <div className="text-center text-zinc-400">Loading…</div>
        )}

        {!loading && status && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-400">Savage Mode</span>
              {status.active ? (
                <span className="text-emerald-400 font-semibold">
                  Active
                </span>
              ) : (
                <span className="text-red-400 font-semibold">
                  Inactive
                </span>
              )}
            </div>

            {status.expires && (
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-400">Renews</span>
                <span className="text-zinc-200 text-sm">
                  {new Date(status.expires * 1000).toLocaleString()}
                </span>
              </div>
            )}

            <div className="flex flex-col gap-3 pt-4">
              {status.active && (
                <button
                  onClick={manageBilling}
                  className="w-full py-3 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-sm font-semibold"
                >
                  Manage Billing
                </button>
              )}

              {!status.active && (
                <button
                  onClick={() => (window.location.href = "/api/checkout")}
                  className="w-full py-3 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-sm font-semibold"
                >
                  Unlock Savage Mode
                </button>
              )}

              <button
                onClick={restore}
                className="w-full py-3 rounded-xl border border-zinc-700 text-sm text-zinc-300"
              >
                Restore Purchase
              </button>
            </div>

            <p className="text-[10px] text-zinc-600 text-center pt-4">
              UID: {status.uid || "none"}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}