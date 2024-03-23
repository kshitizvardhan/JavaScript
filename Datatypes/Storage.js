/*
In JavaScript, "primitive types are passed by value", meaning that a copy of the primitive value is made and passed to functions or assigned to variables. This means that when you assign a primitive value to another variable or pass it as an argument to a function, you're working with an independent copy of that value.

On the other hand, "non-primitive types are passed by reference", meaning that a reference to the original value in memory is passed around. When you assign a reference type to another variable or pass it as an argument to a function, you're working with a reference to the same underlying data in memory.
*/

// Easily understood by the example below

// Primitive Type (passed by value):

var num1 = 10;
var num2 = num1; // num2 receives a copy of the value of num1

num2 = 20; // Changing num2 does not affect num1

console.log(num1); // Output: 10
console.log(num2); // Output: 20

// -------------------------------------------------------------------------------------------------------------------------------------------
// Non-Primitive Type (passed by reference):

var arr1 = [1, 2, 3];
var arr2 = arr1; // arr2 receives a reference to the same array as arr1

arr1.pop()      // pop removes the last element from an array and return it
arr2.push(4); // Modifying arr2 affects arr1 since they refer to the same array
// So, modifying any of them, affects both, since they are not copies, but the actual references.

console.log(arr1); // Output: [1, 2, 4]
console.log(arr2); // Output: [1, 2, 4]

// push/pop is happen in both the arrays, so we have not to do this 