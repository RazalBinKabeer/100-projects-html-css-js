let countdownInterval;

function startCountdown() {
  clearInterval(countdownInterval);
  const targetDate = new Date(document.getElementById("event-time").value);
  if (isNaN(targetDate)) {
    alert("Please select a valid date and time.");
    return;
  }

  countdownInterval = setInterval(() => {
    const currentTime = new Date();
    const timeRemaining = targetDate - currentTime;

    if (timeRemaining < 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown-display").innerHTML = "Event Started!";
      return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(
      2,
      "0"
    );
    document.getElementById("minutes").textContent = String(minutes).padStart(
      2,
      "0"
    );
    document.getElementById("seconds").textContent = String(seconds).padStart(
      2,
      "0"
    );
  }, 1000);
}
