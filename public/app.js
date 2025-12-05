async function sendMessage() {
  const input = document.getElementById("userMessage");
  const chatBox = document.getElementById("chat-box");

  const msg = input.value.trim();
  if (!msg) return;

  chatBox.innerHTML += `<div class="message"><b>คุณ:</b> ${msg}</div>`;
  input.value = "";

  const res = await fetch("/api/agent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: msg })
  });

  const data = await res.json();
  chatBox.innerHTML += `<div class="message"><b>Agenti AI:</b> ${data.reply}</div>`;
    }
