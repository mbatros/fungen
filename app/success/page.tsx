"use client";

import { useEffect } from "react";

export default function SuccessPage() {
  useEffect(() => {
    localStorage.setItem("savageUnlocked", "true");
    localStorage.setItem("unlockDate", Date.now().toString());
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white flex-col">
      <h1 className="text-3xl font-bold mb-6">🔥 Savage Mode Activated!</h1>
      <a
        href="/"
        className="bg-purple-600 px-6 py-3 rounded-xl font-bold"
      >
        Go Roast Someone 😈
      </a>
    </div>
  );
}
