const button = document.getElementById("clearClipboard");
const status = document.getElementById("status");

button.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("");
    status.textContent = "✅ Clipboard cleared! Any copied content is now removed for your privacy.";
    setTimeout(() => (status.textContent = ""), 5000);
  } catch (err) {
    status.textContent = "❌ Unable to clear clipboard. Try a supported browser.";
    console.error(err);
  }
});

// Auto-clear every 30 seconds
setInterval(async () => {
  try {
    await navigator.clipboard.writeText("");
    console.log("🔁 Clipboard auto-cleared (every 30s)");
  } catch (err) {
    console.error("Clipboard auto-clear failed", err);
  }
}, 30000);
