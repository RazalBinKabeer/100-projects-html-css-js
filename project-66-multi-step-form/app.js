const steps = document.querySelectorAll(".step");
const nextButtons = document.querySelectorAll(".next");
const prevButtons = document.querySelectorAll(".prev");
const progressSteps = document.querySelectorAll(".progress-step");
let currentStep = 0;

function showStep(step) {
  steps.forEach((stepElement, index) => {
    stepElement.classList.toggle("hidden", index !== step);
  });
  updateProgress(step);
}

function updateProgress(step) {
  progressSteps.forEach((progressStep, index) => {
    progressStep.classList.toggle("active", index <= step);
  });
}

nextButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentStep = Math.min(currentStep + 1, steps.length - 1);
    showStep(currentStep);
  });
});

prevButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentStep = Math.max(currentStep - 1, 0);
    showStep(currentStep);
  });
});

document
  .getElementById("multi-step-form")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Form submitted!");
    currentStep = 0;
    showStep(currentStep);
  });

showStep(currentStep);
