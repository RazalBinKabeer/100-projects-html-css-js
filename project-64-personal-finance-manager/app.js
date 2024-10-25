const incomeForm = document.getElementById("income-form");
const expenseForm = document.getElementById("expense-form");
const budgetForm = document.getElementById("budget-form");
const incomeList = document.getElementById("income-list");
const expenseList = document.getElementById("expense-list");
const budgetDisplay = document.getElementById("budget-display");
let totalIncome = 0;
let totalExpenses = 0;

incomeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const source = document.getElementById("income-source").value;
  const amount = parseFloat(document.getElementById("income-amount").value);
  addIncome(source, amount);
  incomeForm.reset();
});

expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const category = document.getElementById("expense-category").value;
  const amount = parseFloat(document.getElementById("expense-amount").value);
  addExpense(category, amount);
  expenseForm.reset();
});

budgetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const amount = parseFloat(document.getElementById("budget-amount").value);
  setBudget(amount);
  budgetForm.reset();
});

function addIncome(source, amount) {
  totalIncome += amount;
  const incomeItem = document.createElement("li");
  incomeItem.textContent = `${source}: $${amount.toFixed(2)}`;
  incomeList.appendChild(incomeItem);
  updateBudgetDisplay();
}

function addExpense(category, amount) {
  totalExpenses += amount;
  const expenseItem = document.createElement("li");
  expenseItem.textContent = `${category}: $${amount.toFixed(2)}`;
  expenseList.appendChild(expenseItem);
  updateBudgetDisplay();
}

function setBudget(amount) {
  budgetDisplay.textContent = `Monthly Budget: $${amount.toFixed(2)}`;
}

function updateBudgetDisplay() {
  budgetDisplay.textContent += ` | Total Income: $${totalIncome.toFixed(
    2
  )} | Total Expenses: $${totalExpenses.toFixed(2)} | Balance: $${(
    totalIncome - totalExpenses
  ).toFixed(2)}`;
}
