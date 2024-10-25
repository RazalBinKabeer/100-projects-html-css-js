const scheduleForm = document.getElementById("schedule-form");
const taskForm = document.getElementById("task-form");
const scheduleList = document.getElementById("schedule-list");
const taskList = document.getElementById("task-list");

scheduleForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const subject = document.getElementById("subject").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  addSchedule(subject, date, time);
  scheduleForm.reset();
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = document.getElementById("task").value;
  const deadline = document.getElementById("deadline").value;
  addTask(task, deadline);
  taskForm.reset();
});

function addSchedule(subject, date, time) {
  const scheduleItem = document.createElement("li");
  scheduleItem.textContent = `${subject} - ${date} at ${time}`;
  scheduleList.appendChild(scheduleItem);
}

function addTask(task, deadline) {
  const taskItem = document.createElement("li");
  taskItem.textContent = `${task} - Deadline: ${deadline}`;
  taskList.appendChild(taskItem);
}
