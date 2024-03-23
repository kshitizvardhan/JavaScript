/* String to Array

1) Array from method is used to convert a string into an array */

let str = "Hello World!";
let arr2 = Array.from(str);
console.log(arr2);  // [ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd' ]   

/*
2) The split() method is used to split a string into an array of substrings based on a specified separator and then returns the new array.
    Basic Syntax--> string.split(separator, limit);
        separator: Specifies the character, or the regular expression, to use for splitting the string. This parameter is required.
        limit: An integer specifying a limit on the number of splits to be found. (Optional) */

let str2 = "Hello World!";
let arr3 = str2.split(" ")
console.log(arr3); // Output: ["Hello,", "world!"]
arr3 = str2.split("");
console.log(arr3); // Output: [ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd' ]

// So 1) can be avoided.
