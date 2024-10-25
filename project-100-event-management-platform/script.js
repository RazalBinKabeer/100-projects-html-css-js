const eventForm = document.getElementById("event-form");
const eventNameInput = document.getElementById("event-name");
const eventDateInput = document.getElementById("event-date");
const eventList = document.getElementById("event-list");

eventForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const eventName = eventNameInput.value;
  const eventDate = eventDateInput.value;

  addEvent(eventName, eventDate);

  eventForm.reset();
});

function addEvent(name, date) {
  const eventItem = document.createElement("div");
  eventItem.classList.add("event");
  eventItem.innerHTML = `
    <strong>${name}</strong><br>
    Date: ${date}
  `;
  eventList.appendChild(eventItem);
}
