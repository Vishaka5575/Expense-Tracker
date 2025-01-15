// script.js

let totalAmount = 0;
const totalAmountElement = document.getElementById("total-amount");
const expenseListElement = document.getElementById("expense-list");

// Function to add an expense
function addExpense() {
  const expenseName = document.getElementById("expense-name").value.trim();
  const expenseAmount = parseFloat(document.getElementById("expense-amount").value.trim());

  // Validate input
  if (!expenseName || isNaN(expenseAmount) || expenseAmount <= 0) {
    alert("Please provide valid expense details.");
    return;
  }

  // Add expense to the list
  const expenseItem = document.createElement("div");
  expenseItem.classList.add("expense-item");

  expenseItem.innerHTML = `
    <span>${expenseName}</span>
    <span>$${expenseAmount.toFixed(2)}</span>
    <button class="delete-btn" onclick="deleteExpense(this, ${expenseAmount})">Delete</button>
  `;

  // Append the expense item to the list
  expenseListElement.appendChild(expenseItem);

  // Update total amount
  totalAmount += expenseAmount;
  updateTotalAmount();

  // Clear input fields
  document.getElementById("expense-name").value = "";
  document.getElementById("expense-amount").value = "";
}

// Function to delete an expense
function deleteExpense(button, expenseAmount) {
  // Remove the expense from the list
  button.parentElement.remove();

  // Update total amount
  totalAmount -= expenseAmount;
  updateTotalAmount();
}

// Function to update the total amount displayed
function updateTotalAmount() {
  totalAmountElement.textContent = totalAmount.toFixed(2);
}
