const homeLink = document.getElementById("home-link");
const cartLink = document.getElementById("cart-link");
const profileLink = document.getElementById("profile-link");
const bookListSection = document.getElementById("book-list");
const cartSection = document.getElementById("cart");
const profileSection = document.getElementById("profile");

// Dummy book data
const books = [
  { title: "Book One", author: "Author One", price: 10 },
  { title: "Book Two", author: "Author Two", price: 15 },
  { title: "Book Three", author: "Author Three", price: 20 },
];

function displayBooks() {
  const booksUl = document.getElementById("books");
  booksUl.innerHTML = "";
  books.forEach((book) => {
    const bookLi = document.createElement("li");
    bookLi.textContent = `${book.title} by ${book.author} - $${book.price}`;
    booksUl.appendChild(bookLi);
  });
}

homeLink.addEventListener("click", () => {
  bookListSection.classList.remove("hidden");
  cartSection.classList.add("hidden");
  profileSection.classList.add("hidden");
});

cartLink.addEventListener("click", () => {
  bookListSection.classList.add("hidden");
  cartSection.classList.remove("hidden");
  profileSection.classList.add("hidden");
});

profileLink.addEventListener("click", () => {
  bookListSection.classList.add("hidden");
  cartSection.classList.add("hidden");
  profileSection.classList.remove("hidden");
});

document.addEventListener("DOMContentLoaded", displayBooks);
