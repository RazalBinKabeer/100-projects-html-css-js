const listItems = document.querySelectorAll(".draggable-item");
let draggingItem = null;

listItems.forEach((item) => {
  item.addEventListener("dragstart", () => {
    draggingItem = item;
    item.classList.add("dragging");
  });

  item.addEventListener("dragend", () => {
    draggingItem = null;
    item.classList.remove("dragging");
  });

  item.addEventListener("dragover", (event) => {
    event.preventDefault();
    const draggingOverItem = event.target;
    if (draggingOverItem !== draggingItem) {
      const list = document.getElementById("draggable-list");
      list.insertBefore(draggingItem, draggingOverItem);
    }
  });
});
