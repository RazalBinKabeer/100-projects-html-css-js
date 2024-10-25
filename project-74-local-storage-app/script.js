// Get elements
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Load tasks from local storage when the page loads
document.addEventListener("DOMContentLoaded", loadTasksFromLocalStorage);

// Handle form submission
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = taskInput.value;

  if (task) {
    addTaskToList(task);
    saveTaskToLocalStorage(task);
    taskInput.value = "";
  }
});

// Add task to the list
function addTaskToList(task) {
  const li = document.createElement("li");
  li.textContent = task;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  li.appendChild(removeBtn);

  // Add event listener for removing task
  removeBtn.addEventListener("click", () => {
    taskList.removeChild(li);
    removeTaskFromLocalStorage(task);
  });

  taskList.appendChild(li);
}

// Save task to local storage
function saveTaskToLocalStorage(task) {
  let tasks = getTasksFromLocalStorage();
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from local storage
function loadTasksFromLocalStorage() {
  let tasks = getTasksFromLocalStorage();
  tasks.forEach((task) => addTaskToList(task));
}

// Get tasks from local storage
function getTasksFromLocalStorage() {
  let tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
}

// Remove task from local storage
function removeTaskFromLocalStorage(task) {
  let tasks = getTasksFromLocalStorage();
  tasks = tasks.filter((t) => t !== task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
