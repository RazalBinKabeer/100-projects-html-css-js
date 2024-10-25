document.addEventListener("DOMContentLoaded", () => {
  // Profile form
  const profileForm = document.getElementById("profile-form");
  profileForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const weight = document.getElementById("weight").value;
    console.log(
      `Profile Saved: Name: ${name}, Age: ${age}, Weight: ${weight}kg`
    );
  });

  // Activity form
  const activityForm = document.getElementById("activity-form");
  activityForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const steps = document.getElementById("steps").value;
    const distance = document.getElementById("distance").value;
    const activityLog = document.getElementById("activity-log");
    const logEntry = document.createElement("li");
    logEntry.textContent = `Steps: ${steps}, Distance: ${distance}km`;
    activityLog.appendChild(logEntry);
  });

  // Nutrition form
  const nutritionForm = document.getElementById("nutrition-form");
  nutritionForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const calories = document.getElementById("calories").value;
    const nutritionLog = document.getElementById("nutrition-log");
    const logEntry = document.createElement("li");
    logEntry.textContent = `Calories: ${calories}`;
    nutritionLog.appendChild(logEntry);
  });
});
