"use client";

import { useState, useEffect } from "react";
import html2canvas from "html2canvas";

export default function HomePage() {
  const [input, setInput] = useState("");
  const [roast, setRoast] = useState("");
  const [isSavage, setIsSavage] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unlocked = localStorage.getItem("savageUnlocked");
    const unlockDate = localStorage.getItem("unlockDate");

    if (unlocked && unlockDate) {
      const sevenDays = 7 * 24 * 60 * 60 * 1000;

      if (Date.now() - parseInt(unlockDate) < sevenDays) {
        setIsSavage(true);
      } else {
        localStorage.removeItem("savageUnlocked");
        localStorage.removeItem("unlockDate");
      }
    }
  }, []);

  const generateRoast = async () => {
    if (!input) return;

    setLoading(true);

    const response = await fetch("/api/roast", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input,
        savage: isSavage,
      }),
    });

    const data = await response.json();
    setRoast(data.roast);
    setLoading(false);
  };

  const handleUnlock = async () => {
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
    });

    const data = await res.json();
    window.location.href = data.url;
  };

  const downloadImage = async () => {
    const element = document.getElementById("roast-card");
    if (!element) return;

    const canvas = await html2canvas(element);
    const link = document.createElement("a");
    link.download = "fungen-roast.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "60px",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "30px" }}>
        🔥 FunGen Savage Roaster
      </h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter name or traits..."
        style={{
          padding: "14px",
          width: "300px",
          borderRadius: "10px",
          border: "none",
          marginBottom: "20px",
        }}
      />

      <button
        onClick={generateRoast}
        style={{
          padding: "12px 24px",
          borderRadius: "10px",
          backgroundColor: "#9333ea",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        {loading ? "Roasting..." : "🔥 Roast Me"}
      </button>

      {!isSavage && (
        <button
          onClick={handleUnlock}
          style={{
            padding: "12px 24px",
            borderRadius: "10px",
            background: "linear-gradient(to right, purple, pink)",
            color: "white",
            border: "none",
            cursor: "pointer",
            marginBottom: "30px",
          }}
        >
          🔥 Unlock Savage Mode – $2.99/week
        </button>
      )}

      {roast && (
        <div
          id="roast-card"
          style={{
            backgroundColor: "#111",
            padding: "25px",
            borderRadius: "15px",
            width: "350px",
            textAlign: "center",
          }}
        >
          <h2 style={{ marginBottom: "15px" }}>
            {isSavage ? "Savage Mode 🔥" : "Basic Roast"}
          </h2>

          <p style={{ lineHeight: "1.6" }}>{roast}</p>

          <button
            onClick={downloadImage}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              borderRadius: "8px",
              backgroundColor: "white",
              color: "black",
              border: "none",
              cursor: "pointer",
            }}
          >
            Download 🔥
          </button>
        </div>
      )}
    </div>
  );
}
