const carouselItems = document.querySelector(".carousel__items");
const items = document.querySelectorAll(".carousel__item");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let angle = 0;
const itemCount = items.length;
const rotateCarousel = (direction) => {
  const angleIncrement = 360 / itemCount;
  angle += direction === "next" ? -angleIncrement : angleIncrement;
  carouselItems.style.transform = `translateZ(-200px) rotateY(${angle}deg)`;
};

prevButton.addEventListener("click", () => rotateCarousel("prev"));
nextButton.addEventListener("click", () => rotateCarousel("next"));
