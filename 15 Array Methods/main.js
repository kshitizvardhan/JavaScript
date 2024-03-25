const arr = [1,2,3];
const arr2 = [4,5,6];

// Pushing an element to the last of an array
arr.push(4);
console.log(arr);   // Output [ 1, 2, 3, 4 ]

// Removing the last element from the array
arr.pop();
console.log(arr)    // Output [ 1, 2, 3 ]

// Removing the first element from array
arr.shift();
console.log(arr);

// Pushing an element to the front of an array
arr.unshift(1);
console.log(arr);

// Joining two arrays - it creates a new array (So, its not done by reference)
const result = arr.concat(arr2);
console.log(result);