const showToastButton = document.getElementById("show-toast");
const toastContainer = document.getElementById("toast-container");

showToastButton.addEventListener("click", () => {
  showNotification("This is a notification!");
});

function showNotification(message) {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = `
        <span>${message}</span>
        <button onclick="removeToast(this)">×</button>
    `;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    if (toast) {
      toastContainer.removeChild(toast);
    }
  }, 3000);
}

function removeToast(button) {
  const toast = button.parentElement;
  toastContainer.removeChild(toast);
}
