const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2,
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: 1,
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correct: 3,
  },
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById("question").textContent = question.question;
  const answerButtons = document.querySelectorAll(".answer");
  answerButtons.forEach((button, index) => {
    button.textContent = question.answers[index];
    button.onclick = () => {
      if (index === question.correct) {
        score++;
      }
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        loadQuestion();
      } else {
        showResults();
      }
    };
  });
}

function showResults() {
  document.getElementById("quiz-container").innerHTML = `
      <h2>You scored ${score} out of ${questions.length}!</h2>
  `;
}

loadQuestion();
