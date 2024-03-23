
// The forEach() method is available for arrays and executes a provided function once for each element in the array.
let arr = [2, 3, 4, 5];
arr.forEach((element)=>{
    console.log(element);
})

// forEach() full syntax
// Also can be added with index and whole arr parameters

arr.forEach((element, index, array) => {
    // code to execute on each element
    console.log(element, index, array)
  });

// Output:
// 2 0 [ 2, 3, 4, 5 ]
// 3 1 [ 2, 3, 4, 5 ]
// 4 2 [ 2, 3, 4, 5 ]
// 5 3 [ 2, 3, 4, 5 ]   

//-------------------------------------------------------------------------------------------------------------------------------------------








// // FILTER : Let's say you're building an e-commerce website and you want to display only products that are on sale:

// const products = [
// { name: "Product 1", onSale: true, price: 20 },
// { name: "Product 2", onSale: false, price: 30 },
// // ...
// ];

// const productsOnSale = products.filter(product => product.onSale);
// // Result: [{ name: "Product 1", onSale: true, price: 20 }, ...]

// /*
// You can use the filter function to extract the products that are currently on sale and display them to users.
// */



// // REDUCE
// // Imagine you're creating a budget tracking app, and you want to calculate the total expenses from an array of expense items:


// const expenses = [
// { category: "Food", amount: 50 },
// { category: "Transportation", amount: 30 },
// // ...
// ];

// const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
// // Result: 80

