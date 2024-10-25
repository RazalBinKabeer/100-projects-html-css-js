document.getElementById("open-modal").addEventListener("click", function () {
  document.getElementById("modal").style.display = "block";
});

document.getElementById("close-modal").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
  }
});
