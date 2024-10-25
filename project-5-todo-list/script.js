document.getElementById("add-task").addEventListener("click", function () {
  const taskInput = document.getElementById("new-task");
  const taskText = taskInput.value;
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;
  document.getElementById("task-list").appendChild(li);

  taskInput.value = "";

  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });
});
