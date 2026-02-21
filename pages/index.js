
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [traits, setTraits] = useState("");
  const [result, setResult] = useState("");
  const [locked, setLocked] = useState(false);

  async function roast() {
    if (locked) return;

    const res = await fetch("/api/roast", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, traits })
    });

    const data = await res.json();
    setResult(data.roast);
    setLocked(true);
  }

  async function unlock() {
    const res = await fetch("/api/checkout", { method: "POST" });
    const data = await res.json();
    window.location = data.url;
  }

  return (
    <div style={{
      background: "#0f0f0f",
      color: "white",
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      <h1 style={{fontSize: "40px"}}>🔥 AI Roast Me</h1>

      <input
        placeholder="Your Name"
        value={name}
        onChange={e => setName(e.target.value)}
        style={{display:"block", margin:"10px 0", padding:"10px"}}
      />

      <input
        placeholder="3 Traits (comma separated)"
        value={traits}
        onChange={e => setTraits(e.target.value)}
        style={{display:"block", margin:"10px 0", padding:"10px"}}
      />

      <button onClick={roast} style={{padding:"10px 20px"}}>
        Roast Me
      </button>

      {result && (
        <div style={{marginTop:"30px", padding:"20px", background:"#1a1a1a"}}>
          <p>{result}</p>
          <p style={{opacity:0.4}}>Free version • Unlock Savage Mode for more 🔥</p>
          <button onClick={unlock} style={{marginTop:"10px"}}>
            Unlock Savage Mode
          </button>
        </div>
      )}
    </div>
  );
}
