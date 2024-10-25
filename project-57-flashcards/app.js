const card = document.getElementById("card");
const flipButton = document.getElementById("flip-card");
let isFlipped = false;

flipButton.addEventListener("click", () => {
  if (isFlipped) {
    card.style.transform = "rotateY(0deg)";
  } else {
    card.style.transform = "rotateY(180deg)";
  }
  isFlipped = !isFlipped;
});
