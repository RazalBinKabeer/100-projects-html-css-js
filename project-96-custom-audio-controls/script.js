const audio = document.getElementById("audio");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const volumeControl = document.getElementById("volume");
const progressControl = document.getElementById("progress");

// Play audio
playBtn.addEventListener("click", () => {
  audio.play();
});

// Pause audio
pauseBtn.addEventListener("click", () => {
  audio.pause();
});

// Adjust volume
volumeControl.addEventListener("input", () => {
  audio.volume = volumeControl.value;
});

// Update progress bar as audio plays
audio.addEventListener("timeupdate", () => {
  progressControl.value = (audio.currentTime / audio.duration) * 100;
});

// Seek audio when progress bar is changed
progressControl.addEventListener("input", () => {
  audio.currentTime = (progressControl.value / 100) * audio.duration;
});
