const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Paris", "London", "Rome", "Berlin"],
    correct: "Paris",
  },
  {
    question: "What is 5 + 7?",
    answers: ["10", "11", "12", "13"],
    correct: "12",
  },
  {
    question: "What is the color of the sky?",
    answers: ["Blue", "Red", "Green", "Yellow"],
    correct: "Blue",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const scoreboard = document.getElementById("scoreboard");
const scoreElement = document.getElementById("score");

// Load the first question
loadQuestion();

function loadQuestion() {
  resetState();
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.textContent = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("answer-btn");
    button.addEventListener("click", () =>
      selectAnswer(button, question.correct)
    );
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hidden");
  answerButtons.innerHTML = "";
  Array.from(answerButtons.children).forEach((button) =>
    button.classList.remove("correct", "wrong")
  );
}

function selectAnswer(button, correctAnswer) {
  const isCorrect = button.textContent === correctAnswer;
  if (isCorrect) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
  }
  Array.from(answerButtons.children).forEach((b) => (b.disabled = true));
  nextButton.classList.remove("hidden");
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionContainer.classList.add("hidden");
  nextButton.classList.add("hidden");
  scoreboard.classList.remove("hidden");
  scoreElement.textContent = score;
}
