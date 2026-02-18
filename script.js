const texts = [
  "You are the main character energy.",
  "Your vibe is premium.",
  "You make Mondays nervous.",
  "Certified legend.",
  "Your group chat depends on you."
];

let count = Number(localStorage.getItem("count")) || 0;
let unlocked = localStorage.getItem("unlocked") === "true";

document.getElementById("generate").onclick = () => {
  if (count >= 3 && !unlocked) {
    alert("Unlock unlimited for $2.99");
    return;
  }

  const text = texts[Math.floor(Math.random() * texts.length)];
  document.getElementById("output").innerText = text;
  count++;
  localStorage.setItem("count", count);
};

document.getElementById("unlock").onclick = async () => {
  const res = await fetch("/api/checkout", { method: "POST" });
  const data = await res.json();
  window.location.href = data.url;
};