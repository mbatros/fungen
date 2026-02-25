"use client";

import { useEffect } from "react";

export default function SuccessPage() {
  useEffect(() => {
    localStorage.setItem("savageUnlocked", "true");
    localStorage.setItem("unlockDate", Date.now().toString());
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "black",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <h1>🔥 Savage Mode Activated!</h1>
      <a href="/" style={{
        marginTop: "20px",
        padding: "12px 24px",
        background: "purple",
        color: "white",
        borderRadius: "8px",
        textDecoration: "none"
      }}>
        Go Back
      </a>
    </div>
  );
}
