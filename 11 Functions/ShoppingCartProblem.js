// REST PARAMETER - Accept infinte arguments as array.


/*The rest parameter (...) allows a function to accept an indefinite number of arguments as an array. This is particularly useful when you don't know in advance how many arguments will be passed to the function.*/

function calculatePrice(...num1){
    return num1
}

console.log(calculatePrice(1, 2, 3, 4, 5));

/*

The CalculatePrice function uses the rest parameter syntax ...num1, to collect all passed arguments into an array named num1.

Inside the function body, num1 is simply returned.

When you call CalculatePrice(1, 2, 3, 4, 5), it passes five arguments to the function.

The function returns an array containing all passed arguments [1, 2, 3, 4, 5].

Finally, console.log prints the returned array [1, 2, 3, 4, 5] to the console.

*/