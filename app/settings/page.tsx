"use client";

import { useEffect, useState } from "react";

type StatusResponse = {
  active: boolean;
  expires: number | null;
  uid: string | null;
};

export const dynamic = "force-static";

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

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-10">
      <div className="max-w-md w-full space-y-4">
        <h1 className="text-2xl font-bold text-center">Settings</h1>

        {loading && (
          <p className="text-center text-zinc-400">Checking subscription…</p>
        )}

        {!loading && status && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-3">
            {status.active ? (
              <>
                <p className="text-sm text-emerald-300">
                  Savage Mode is active.
                </p>
                {status.expires && (
                  <p className="text-xs text-zinc-400">
                    Renews:{" "}
                    {new Date(status.expires * 1000).toLocaleString()}
                  </p>
                )}
              </>
            ) : (
              <p className="text-sm text-zinc-300">
                No active subscription found.
              </p>
            )}

            <button
              onClick={() => (window.location.href = "/restore")}
              className="w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-sm"
            >
              Restore Purchase
            </button>

            <button
              onClick={() => (window.location.href = "/")}
              className="w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-sm"
            >
              Back to FunGen
            </button>
          </div>
        )}
      </div>
    </main>
  );
}