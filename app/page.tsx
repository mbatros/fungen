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
  
  const [isSavage, setIsSavage] = useState(false);
  
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

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
        🔥 FunGen Savage Roaster
      </h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter name or description..."
        style={{
          padding: "12px",
          width: "300px",
          borderRadius: "8px",
          border: "none",
          marginBottom: "20px",
        }}
      />

      <br />

      <button
        onClick={handleUnlock}
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          background: "linear-gradient(to right, purple, pink)",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        🔥 Unlock Savage Mode – $2.99/week
      </button>
        </div>
      )}

      {roast && (
        <div
          id="roast-card"
          style={{
            marginTop: "40px",
            padding: "20px",
            backgroundColor: "#111",
            borderRadius: "12px",
          }}
        >
          <h2>{isSavage ? "Savage Mode 🔥" : "Basic Roast"}</h2>
          <p>{roast}</p>

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
