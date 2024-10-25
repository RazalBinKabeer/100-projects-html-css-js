let timer;
let isRunning = false;
let timeLeft = 1500; // 25 minutes in seconds

const timerDisplay = document.getElementById("timer-display");
const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");

startButton.addEventListener("click", toggleTimer);
resetButton.addEventListener("click", resetTimer);

function toggleTimer() {
  if (isRunning) {
    clearInterval(timer);
    startButton.textContent = "Start";
  } else {
    startTimer();
    startButton.textContent = "Pause";
  }
  isRunning = !isRunning;
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    updateDisplay();
    if (timeLeft <= 0) {
      clearInterval(timer);
      alert("Time's up! Take a break.");
      resetTimer();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 1500;
  isRunning = false;
  updateDisplay();
  startButton.textContent = "Start";
}

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;
}
