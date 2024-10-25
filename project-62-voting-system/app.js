const loginForm = document.getElementById("login-form");
const voteForm = document.getElementById("vote-form");
const loginSection = document.getElementById("login-section");
const voteSection = document.getElementById("vote-section");
const resultsSection = document.getElementById("results-section");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  loginSection.classList.add("hidden");
  voteSection.classList.remove("hidden");
});

voteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const selectedTopic = document.getElementById("topic").value;
  displayResults(selectedTopic);
});

function displayResults(topic) {
  const results = document.getElementById("results");
  results.textContent = `Results for ${topic}: ...`; // Placeholder for actual results
  voteSection.classList.add("hidden");
  resultsSection.classList.remove("hidden");
}
