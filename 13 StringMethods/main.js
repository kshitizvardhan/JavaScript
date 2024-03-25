const str = "Hello Kshitiz & Kshitiz";

// length of a string
let length = str.length;
console.log(length);

// finding first appearance index of a passed value
let index = str.indexOf("Kshitiz");
console.log(index);

// finding last appearance index of a passed value
let index2 = str.lastIndexOf("Kshitiz");
console.log(index2);

// finding sub-string
let subStr = str.substring(2,5);
console.log(subStr);

// slicing part of a string
let sliced = str.slice(2,5);
console.log(sliced);

// Both are same

// Deprecated - substr
let oldMtd = str.substr(2,5);   // llo K
// here start is 2, but 5 is not the end, rather its the length uptill which it is to be returned by starting from 2
console.log(oldMtd);

// Replacing from a string
let replaced = str.replace("Kshitiz", "Tyakshi");
console.log(replaced);

// Splitting in a string and storing them in an array,
let splittedArr = str.split(" ")  // a whitespace passed here as delimeter, as soon as it sees a space in string, it splits and store in array
console.log(splittedArr);   // Output [ 'Hello', 'Kshitiz', '&', 'Kshitiz' ]

// Removing all spaces from beginning and at the end of the string
let str2 = "      Hello    Kshitiz      ";
console.log(str2.trim());       // Output "Hello    Kshitiz"

// Changing all letters to UpperCase
console.log(str.toUpperCase());

// Changing all letter to LowerCase
console.log(str.toLowerCase());
