// Story text and choices
const storyText = document.getElementById("story-text");
const choices = document.querySelectorAll(".choice");

// Define the story paths
const storyPaths = {
  enter: {
    text: "You step into the forest. The trees loom overhead. You hear a sound. Do you follow it or run away?",
    choices: ["Follow the sound", "Run away"],
    next: ["follow-sound", "run-away"],
  },
  leave: {
    text: "You turn back and leave the forest. But you can't shake the feeling of what might have been. Do you return or continue on your path?",
    choices: ["Return to the forest", "Continue walking"],
    next: ["enter", "continue"],
  },
  "follow-sound": {
    text: "You follow the sound and find a hidden waterfall. It's beautiful! Do you stay and rest, or keep exploring?",
    choices: ["Stay and rest", "Keep exploring"],
    next: ["rest", "explore"],
  },
  "run-away": {
    text: "You run back to the forest entrance, but you feel lost. Do you try to find your way or wait for help?",
    choices: ["Find your way", "Wait for help"],
    next: ["find-way", "wait-help"],
  },
  // Additional paths can be added here...
};

// Update story based on the user's choice
choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    const selectedChoice = e.target.getAttribute("data-choice");
    updateStory(selectedChoice);
  });
});

function updateStory(choice) {
  const currentPath = storyPaths[choice];

  // Update the story text
  storyText.textContent = currentPath.text;

  // Update the buttons for the next choices
  choices.forEach((button, index) => {
    button.textContent = currentPath.choices[index];
    button.setAttribute("data-choice", currentPath.next[index]);
  });
}
