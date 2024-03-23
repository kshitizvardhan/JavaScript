/*

important:-

forEach(): function is used to iterate over an Array and modify the existing array and does not return anything (i.e., it returns undefined) */
let nums = [1,2,3,4,5];
nums.forEach((current,index,array) => {
    array[index] = current * 2;  // Modifying the existing array
})

console.log(nums) // Output: [2, 4, 6, 8, 10]


/*
MAP : function is used to iterate over an array and generates a new value for each element, and these values are collected to form a new array.
It does not modify the original array; instead, it creates a new array and returns it. */

let arr = [1,2,3,4,5];

let doubledNumbers = arr.map((current, index, array) => {
    return current * 2;         // Generating a new array
  });
  
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
console.log(arr);           // original array exists with no change in value

// So this map() must be used when you need to have the original array also, and by this you avoid the pass by reference problem you faced in storage part.