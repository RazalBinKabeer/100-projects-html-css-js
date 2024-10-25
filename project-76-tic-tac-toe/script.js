// Get elements
const cells = document.querySelectorAll("[data-cell]");
const restartBtn = document.getElementById("restart-btn");
const winningMessageText = document.getElementById("winning-message");

let currentPlayer = "X";
let gameBoard = Array(9).fill(null);
let isGameActive = true;

// Winning combinations
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Event listener for cells
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if (cell.textContent !== "" || !isGameActive) return;

    // Place current player's mark
    cell.textContent = currentPlayer;
    gameBoard[index] = currentPlayer;

    // Check for winner or draw
    checkWinnerOrDraw();

    // Switch player
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  });
});

// Check for a winner or a draw
function checkWinnerOrDraw() {
  let winner = null;

  // Check if there's a winning combination
  winningCombinations.forEach((combination) => {
    const [a, b, c] = combination;
    if (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      winner = gameBoard[a];
    }
  });

  if (winner) {
    isGameActive = false;
    winningMessageText.textContent = `${winner} wins!`;
    return;
  }

  // Check for a draw
  if (!gameBoard.includes(null)) {
    isGameActive = false;
    winningMessageText.textContent = `It's a draw!`;
  }
}

// Restart the game
restartBtn.addEventListener("click", () => {
  gameBoard.fill(null);
  isGameActive = true;
  winningMessageText.textContent = "";
  currentPlayer = "X";
  cells.forEach((cell) => (cell.textContent = ""));
});
