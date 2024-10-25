// Get the navbar element
const navbar = document.querySelector(".navbar");

// Get the offset position of the navbar
const stickyOffset = navbar.offsetTop;

// Add sticky class when the page is scrolled past the navbar
window.addEventListener("scroll", () => {
  if (window.pageYOffset > stickyOffset) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
