// Expense and Income Form Handling

// Add Income
document.getElementById('income-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const incomeAmount = parseFloat(document.getElementById('income-amount').value);
    let income = localStorage.getItem('income') ? parseFloat(localStorage.getItem('income')) : 0;
    income += incomeAmount;
    localStorage.setItem('income', income);
  
    alert('Income added successfully');
    document.getElementById('income-form').reset();
  });
  
  // Add Expense
  document.getElementById('expense-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('expense-name').value;
    const category = document.getElementById('expense-category').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);
  
    let expenses = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : [];
    expenses.push({ name, category, amount });
    localStorage.setItem('expenses', JSON.stringify(expenses));
  
    alert('Expense added successfully');
    document.getElementById('expense-form').reset();
  });
  
  // Load Reports
  function loadReports() {
    const expenses = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : [];
    const reportOutput = document.getElementById('report-output');
    
    if (expenses.length === 0) {
      reportOutput.innerHTML = '<p>No expenses recorded yet.</p>';
    } else {
      let reportHTML = '<ul class="list-group">';
      let totalExpenses = 0;
  
      expenses.forEach(expense => {
        reportHTML += `<li class="list-group-item"> ${expense.name} - ${expense.category} - $${expense.amount.toFixed(2)}</li>`;
        totalExpenses += expense.amount;
      });
  
      reportHTML += '</ul>';
      reportOutput.innerHTML = reportHTML;
  
      const totalIncome = localStorage.getItem('income') ? parseFloat(localStorage.getItem('income')) : 0;
      const remainingBudget = totalIncome - totalExpenses;
  
      document.getElementById('total-income').textContent = `$${totalIncome.toFixed(2)}`;
      document.getElementById('total-expenses').textContent = `$${totalExpenses.toFixed(2)}`;
      document.getElementById('remaining-budget').textContent = `$${remainingBudget.toFixed(2)}`;
    }
  }
  
  // Load Reports on Page Load
  if (document.getElementById('report-output')) {
    loadReports();
  }

  