const soundButtons = document.querySelectorAll(".sound-button");
const uploadForm = document.getElementById("upload-form");

soundButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const sound = button.getAttribute("data-sound");
    playSound(sound);
  });
});

function playSound(sound) {
  const audio = new Audio(`sounds/${sound}.mp3`);
  audio.play();
}

uploadForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const fileInput = document.getElementById("sound-file");
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const audio = new Audio(e.target.result);
      audio.play();
    };
    reader.readAsDataURL(file);
  }
});
