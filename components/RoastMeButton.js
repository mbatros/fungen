"use client";

import { useState } from "react";

export default function RoastMeButton() {
  const [name, setName] = useState("");
  const [traits, setTraits] = useState("");
  const [roast, setRoast] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRoast = async () => {
    if (!name.trim() || !traits.trim()) {
      setError("Please enter both name and traits.");
      return;
    }

    setLoading(true);
    setError("");
    setRoast("");

    try {
      const response = await fetch("/api/roast", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, traits })
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || "Server error");
      }

      const data = await response.json();
      setRoast(data.roast);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: "80%", padding: "8px", margin: "5px 0" }}
      />
      <textarea
        placeholder="Enter traits"
        value={traits}
        onChange={(e) => setTraits(e.target.value)}
        style={{ width: "80%", padding: "8px", margin: "5px 0" }}
      />
      <button
        onClick={handleRoast}
        disabled={loading}
        style={{ padding: "10px 20px", margin: "10px 0", cursor: "pointer" }}
      >
        {loading ? "Roasting..." : "Roast Me"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {roast && <p style={{ marginTop: "10px", fontWeight: "bold" }}>{roast}</p>}
    </div>
  );
}
