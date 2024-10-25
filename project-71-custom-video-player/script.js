// Get elements
const video = document.getElementById("video");
const playPauseBtn = document.getElementById("play-pause");
const stopBtn = document.getElementById("stop");
const progress = document.getElementById("progress");

// Toggle play/pause
playPauseBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = "Pause";
  } else {
    video.pause();
    playPauseBtn.textContent = "Play";
  }
});

// Stop video
stopBtn.addEventListener("click", () => {
  video.pause();
  video.currentTime = 0;
  playPauseBtn.textContent = "Play";
});

// Update progress bar
video.addEventListener("timeupdate", () => {
  const percent = (video.currentTime / video.duration) * 100;
  progress.value = percent;
});

// Seek through video
progress.addEventListener("input", () => {
  const seekTime = (progress.value / 100) * video.duration;
  video.currentTime = seekTime;
});
