const redLight = document.querySelector(".red");
const yellowLight = document.querySelector(".yellow");
const greenLight = document.querySelector(".green");

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let interval;
let currentLight = "red";

function switchLight() {
  if (currentLight === "red") {
    redLight.style.opacity = 1;
    yellowLight.style.opacity = 0.3;
    greenLight.style.opacity = 0.3;
    currentLight = "green";
  } else if (currentLight === "green") {
    redLight.style.opacity = 0.3;
    yellowLight.style.opacity = 0.3;
    greenLight.style.opacity = 1;
    currentLight = "yellow";
  } else if (currentLight === "yellow") {
    redLight.style.opacity = 0.3;
    yellowLight.style.opacity = 1;
    greenLight.style.opacity = 0.3;
    currentLight = "red";
  }
}

function startSimulation() {
  interval = setInterval(switchLight, 2000);
}

function stopSimulation() {
  clearInterval(interval);
}

function resetSimulation() {
  clearInterval(interval);
  currentLight = "red";
  redLight.style.opacity = 1;
  yellowLight.style.opacity = 0.3;
  greenLight.style.opacity = 0.3;
}

startButton.addEventListener("click", startSimulation);
stopButton.addEventListener("click", stopSimulation);
resetButton.addEventListener("click", resetSimulation);

resetSimulation(); // Initialize to red light on load
