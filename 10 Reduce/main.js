// REDUCE
// Imagine you're creating a budget tracking app, and you want to calculate the total expenses from an array of expense items:


const expenses = [
    { category: "Food", amount: 50 },
    { category: "Transportation", amount: 30 },
    // ...
];

const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
// Result: 80