const button = document.getElementById("clearClipboard");
const status = document.getElementById("status");

button.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("");
    status.textContent = "✅ Clipboard cleared!";
    setTimeout(() => (status.textContent = ""), 3000);
  } catch (err) {
    status.textContent = "❌ Failed to clear clipboard.";
    console.error(err);
  }
});

// Auto-clear every 30 seconds
setInterval(async () => {
  try {
    await navigator.clipboard.writeText("");
    console.log("Clipboard auto-cleared");
  } catch (err) {
    console.error("Clipboard auto-clear failed", err);
  }
}, 30000);
