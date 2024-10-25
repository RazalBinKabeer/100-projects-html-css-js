const quotes = [
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "Do not wait to strike till the iron is hot; but make it hot by striking.",
    author: "William Butler Yeats",
  },
  {
    text: "Whether you think you can or think you can’t, you’re right.",
    author: "Henry Ford",
  },
  {
    text: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
];

const quoteText = document.getElementById("quote-text");
const newQuoteButton = document.getElementById("new-quote");

newQuoteButton.addEventListener("click", () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.textContent = `"${randomQuote.text}" - ${randomQuote.author}`;
});
