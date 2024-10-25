// Get the list element
const itemList = document.getElementById("item-list");

// Initial load count and limit per batch
let loadCount = 0;
const loadLimit = 10;

// Load initial set of items
loadItems();

// Handle scroll event
itemList.addEventListener("scroll", () => {
  if (itemList.scrollTop + itemList.clientHeight >= itemList.scrollHeight) {
    loadItems();
  }
});

// Function to load items into the list
function loadItems() {
  for (let i = 0; i < loadLimit; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${loadCount + 1}`;
    itemList.appendChild(li);
    loadCount++;
  }
}
