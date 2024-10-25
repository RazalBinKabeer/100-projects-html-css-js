const solveButton = document.getElementById("solve-button");
const cells = document.querySelectorAll(".sudoku-cell");

solveButton.addEventListener("click", solveSudoku);

function getSudokuBoard() {
  const board = [];
  for (let i = 0; i < 9; i++) {
    const row = [];
    for (let j = 0; j < 9; j++) {
      const cellValue = cells[i * 9 + j].value;
      row.push(cellValue ? parseInt(cellValue) : 0);
    }
    board.push(row);
  }
  return board;
}

function displaySudokuBoard(board) {
  board.forEach((row, i) => {
    row.forEach((value, j) => {
      cells[i * 9 + j].value = value || "";
    });
  });
}

function isValid(board, row, col, num) {
  for (let x = 0; x < 9; x++) {
    if (
      board[row][x] === num ||
      board[x][col] === num ||
      board[Math.floor(row / 3) * 3 + Math.floor(x / 3)][
        Math.floor(col / 3) * 3 + (x % 3)
      ] === num
    ) {
      return false;
    }
  }
  return true;
}

function solveSudoku(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (isValid(board, row, col, num)) {
            board[row][col] = num;
            if (solveSudoku(board)) {
              return true;
            }
            board[row][col] = 0; // backtrack
          }
        }
        return false; // No solution
      }
    }
  }
  return true; // Solved
}

function solveSudoku() {
  const board = getSudokuBoard();
  if (solveSudoku(board)) {
    displaySudokuBoard(board);
  } else {
    alert("No solution exists");
  }
}
