"use client";

import { useEffect, useState } from "react";

type RoastResponse = {
  roast: string;
  roastId: string;
  hash: string;
  intensity: "spicy" | "savage" | "nuclear";
  persona: string;
  category: string;
  pro: boolean;
};

export default function HomePage() {
  const [input, setInput] = useState("");
  const [intensity, setIntensity] =
    useState<"spicy" | "savage" | "nuclear">("spicy");
  const [loading, setLoading] = useState(false);
  const [roast, setRoast] = useState<RoastResponse | null>(null);
  const [isPro, setIsPro] = useState(false);
  const [checkingSub, setCheckingSub] = useState(true);

  const theme: "pink-cyan" | "purple-blue" | "green-black" | "gold-black" =
    "pink-cyan";

  useEffect(() => {
    const check = async () => {
      setCheckingSub(true);
      const res = await fetch("/api/subscription-status", {
        cache: "no-store",
      });
      const data = await res.json();
      setIsPro(data.active === true);
      setCheckingSub(false);
    };
    check();
  }, []);

  const handleRoast = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setRoast(null);

    const res = await fetch("/api/roast", {
      method: "POST",
      body: JSON.stringify({ input, intensity }),
      headers: { "Content-Type": "application/json" },
    });

    const data: RoastResponse = await res.json();
    setRoast(data);
    setLoading(false);
  };

  const buildShareUrl = (r: RoastResponse) => {
    const params = new URLSearchParams({
      roast: r.roast,
      intensity: r.intensity,
      persona: r.persona,
      theme,
      premium: r.pro ? "true" : "false",
      watermark: r.pro ? "false" : "true",
    });

    if (typeof window === "undefined") return `/share-card?${params.toString()}`;
    return `${window.location.origin}/share-card?${params.toString()}`;
  };

  const handleShareCard = () => {
    if (!roast) return;
    const url = buildShareUrl(roast);
    window.open(url, "_blank");
  };

  const handleCopyLink = async () => {
    if (!roast) return;
    const url = buildShareUrl(roast);
    try {
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard.");
    } catch {
      alert("Could not copy link. Long-press or right-click the share card instead.");
    }
  };

  const handleDownload = () => {
    if (!roast) return;
    const url = buildShareUrl(roast);
    const a = document.createElement("a");
    a.href = url;
    a.download = "fungen-roast.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleRegenerate = () => {
    if (!input.trim()) return;
    handleRoast();
  };

  const goToCheckout = () => {
    window.location.href = "/api/checkout";
  };

  const restorePurchase = () => {
    window.location.href = "/restore";
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-8">
      <div className="max-w-xl w-full">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            FunGen <span className="text-fuchsia-500">Savage Mode</span>
          </h1>
          <p className="text-sm text-zinc-400 mt-2">
            AI roasts with <span className="text-fuchsia-400">Spicy</span>,{" "}
            <span className="text-red-400">Savage</span>, and{" "}
            <span className="text-amber-400">Nuclear</span> levels.
          </p>
        </header>

        <section className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-4 mb-4 shadow-[0_0_40px_rgba(236,72,153,0.25)]">
          <label className="block text-xs uppercase tracking-wide text-zinc-400 mb-2">
            Who or what are we roasting?
          </label>
          <textarea
            className="w-full bg-black/60 border border-zinc-700 rounded-xl p-3 text-sm outline-none focus:border-fuchsia-500 transition"
            rows={3}
            placeholder="Example: My friend who thinks he’s the main character but still lives in his parents’ basement."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="mt-4 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span>Intensity</span>
              {checkingSub ? (
                <span className="text-zinc-500">Checking Savage Mode…</span>
              ) : isPro ? (
                <span className="text-fuchsia-400">Savage Mode active</span>
              ) : (
                <span className="text-zinc-500">
                  Spicy is free. Savage & Nuclear in Savage Mode.
                </span>
              )}
            </div>

            <div className="grid grid-cols-3 gap-2 text-xs">
              <button
                onClick={() => setIntensity("spicy")}
                className={`py-2 rounded-xl border ${
                  intensity === "spicy"
                    ? "border-emerald-400 bg-emerald-500/10 text-emerald-200"
                    : "border-zinc-700 text-zinc-300"
                }`}
              >
                Spicy
              </button>
              <button
                onClick={() => setIntensity("savage")}
                disabled={!isPro}
                className={`py-2 rounded-xl border ${
                  intensity === "savage"
                    ? "border-red-400 bg-red-500/10 text-red-200"
                    : "border-zinc-700 text-zinc-300"
                } ${!isPro ? "opacity-40 cursor-not-allowed" : ""}`}
              >
                Savage
              </button>
              <button
                onClick={() => setIntensity("nuclear")}
                disabled={!isPro}
                className={`py-2 rounded-xl border ${
                  intensity === "nuclear"
                    ? "border-amber-400 bg-amber-500/10 text-amber-200"
                    : "border-zinc-700 text-zinc-300"
                } ${!isPro ? "opacity-40 cursor-not-allowed" : ""}`}
              >
                Nuclear
              </button>
            </div>
          </div>

          <button
            onClick={handleRoast}
            disabled={loading || !input.trim()}
            className="mt-4 w-full py-3 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 disabled:bg-zinc-700 text-sm font-semibold transition flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="h-4 w-4 border-2 border-white/40 border-t-transparent rounded-full animate-spin" />
                Generating roast…
              </>
            ) : (
              <>Generate Roast</>
            )}
          </button>
        </section>

        {!isPro && (
          <section className="bg-zinc-950 border border-fuchsia-700/60 rounded-2xl p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-semibold text-fuchsia-300">
                Unlock Savage Mode
              </h2>
              <span className="text-xs text-zinc-400">$2.99 / week</span>
            </div>
            <ul className="text-xs text-zinc-300 space-y-1 mb-3">
              <li>• Unlimited Savage & Nuclear roasts</li>
              <li>• No watermark, HD share cards</li>
              <li>• Faster generation, priority queue</li>
            </ul>
            <div className="flex gap-2">
              <button
                onClick={goToCheckout}
                className="flex-1 py-2 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-xs font-semibold"
              >
                Unlock Savage Mode
              </button>
              <button
                onClick={restorePurchase}
                className="px-3 py-2 rounded-xl border border-zinc-700 text-xs text-zinc-300"
              >
                Restore
              </button>
            </div>
          </section>
        )}

        {roast && (
          <section className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 mt-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wide text-zinc-500">
                Result • {roast.intensity.toUpperCase()}
              </span>
              <span className="text-[10px] text-zinc-600">
                {roast.persona} • {roast.category}
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-3">{roast.roast}</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={handleShareCard}
                className="flex-1 min-w-[45%] py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-zinc-200"
              >
                Open Share Card
              </button>
              <button
                onClick={handleCopyLink}
                className="flex-1 min-w-[45%] py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-zinc-200"
              >
                Copy Link
              </button>
              <button
                onClick={handleDownload}
                className="flex-1 min-w-[45%] py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-zinc-200"
              >
                Download Card
              </button>
              <button
                onClick={handleRegenerate}
                className="flex-1 min-w-[45%] py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-zinc-200"
              >
                Generate Again
              </button>
            </div>
            <p className="mt-2 text-[10px] text-zinc-600">
              Roast ID: {roast.roastId} • Hash: {roast.hash}
            </p>
          </section>
        )}

        <footer className="mt-6 text-center text-[10px] text-zinc-600 space-y-1">
          <p>
            Built for screenshots, TikToks, and chaos. Tag your clips with{" "}
            <span className="text-fuchsia-400">#FunGenSavage</span>.
          </p>
          <p className="space-x-3">
            <a href="/settings" className="underline text-zinc-400">
              Settings
            </a>
            <a href="/privacy" className="underline text-zinc-400">
              Privacy
            </a>
            <a href="/terms" className="underline text-zinc-400">
              Terms
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}