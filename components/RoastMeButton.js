"use client";

import { useState } from "react";

export default function RoastMeButton() {
  const [name, setName] = useState("");
  const [traits, setTraits] = useState("");
  const [roast, setRoast] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRoast = async () => {
    setError("");
    setRoast("");

    if (!name.trim() || !traits.trim()) {
      setError("Please enter both name and traits.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/roast", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, traits })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Server error");
      }

      setRoast(data.roast || "No roast returned.");
    } catch (err) {
      console.error("Frontend fetch error:", err);
      setError(err.message || "Something went wrong.");
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
