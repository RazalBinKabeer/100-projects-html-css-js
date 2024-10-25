function sendMessage() {
  const input = document.getElementById("message-input");
  const message = input.value;
  if (message.trim() === "") return;

  const messageContainer = document.getElementById("messages");
  const messageElement = document.createElement("div");
  messageElement.textContent = message;
  messageContainer.appendChild(messageElement);
  input.value = "";
  messageContainer.scrollTop = messageContainer.scrollHeight;
}
