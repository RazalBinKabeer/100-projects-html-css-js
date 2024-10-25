// Get elements
const textInput = document.getElementById("text-input");
const voiceSelect = document.getElementById("voice-select");
const speakBtn = document.getElementById("speak-btn");

let voices = [];

// Populate the list of available voices
function loadVoices() {
  voices = speechSynthesis.getVoices();
  voiceSelect.innerHTML = "";

  voices.forEach((voice, index) => {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;
    option.setAttribute("data-index", index);
    voiceSelect.appendChild(option);
  });
}

// When voices are loaded, call loadVoices
speechSynthesis.onvoiceschanged = loadVoices;

// Handle the speak button click
speakBtn.addEventListener("click", () => {
  const text = textInput.value;
  const utterance = new SpeechSynthesisUtterance(text);

  const selectedVoiceIndex =
    voiceSelect.selectedOptions[0].getAttribute("data-index");
  utterance.voice = voices[selectedVoiceIndex];

  speechSynthesis.speak(utterance);
});

// Load the voices when the page loads
window.onload = loadVoices;
