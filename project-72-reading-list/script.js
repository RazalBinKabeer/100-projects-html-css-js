// Get elements
const bookForm = document.getElementById("book-form");
const bookList = document.getElementById("book-list");

// Handle form submission
bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;

  if (title && author) {
    addBookToList(title, author);
    bookForm.reset();
  }
});

// Add book to the list
function addBookToList(title, author) {
  const li = document.createElement("li");
  li.innerHTML = `${title} by ${author} <button class="delete">Remove</button>`;

  bookList.appendChild(li);

  // Add event listener for the delete button
  li.querySelector(".delete").addEventListener("click", () => {
    bookList.removeChild(li);
  });
}
