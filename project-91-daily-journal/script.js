document.addEventListener("DOMContentLoaded", loadEntries);

function saveEntry() {
  const entryText = document.getElementById("journal-entry").value;
  if (entryText.trim() === "") {
    alert("Please write something before saving.");
    return;
  }

  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const entry = `${date} ${time}: ${entryText}`;

  let entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
  entries.push(entry);
  localStorage.setItem("journalEntries", JSON.stringify(entries));

  document.getElementById("journal-entry").value = "";
  loadEntries();
}

function loadEntries() {
  const entriesList = document.getElementById("entries-list");
  entriesList.innerHTML = "";

  const entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
  entries.forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = entry;
    entriesList.appendChild(li);
  });
}
