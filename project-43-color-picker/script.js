document
  .getElementById("color-picker")
  .addEventListener("input", function (event) {
    const color = event.target.value;
    document.getElementById(
      "color-result"
    ).textContent = `Selected Color: ${color}`;
    document.getElementById("color-result").style.backgroundColor = color;
  });
