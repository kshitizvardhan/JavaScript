/*
Hoisting -->  Is a mechanism in javascript where variables and function declarations are moved to the top of their scope before the code execution

Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is actually executed. 

This means that regardless of where declarations are placed in the code, they are effectively "hoisted" to the top of their containing function or global scope.

EXAMPLE-->
if do hoisting then  

console.log(a);  yahan humne 'a' ko declare nahi kiya hai, but fir bhi hume error nahi aayega, balki 'undefined' aayega
var a = 12;

So, yahan hota yeh hai ki, it is divided into two parts :- 
1) declaration and , 2) definition

console.log(a);
var a; --> this is only declaration
a = 12; --> this is definition

During the compilation phase, before the code is actually executed
the declaration is moved to top of the code. 
Like this shown below

var a ;
.
.
.
.
console.log(a);
a = 12;

that's why we get undefined and not a error in the console



important point : if we are using let keyword then we will get error in the console


*/

console.log(a);
var a = 12;

// Similary is the case for function declaration

foo(); // "Hello, world!"

function foo() {
  console.log("Hello, world!");
}

/* 
    the function declaration function foo() {...} is hoisted to the top, so foo() can be called before the actual declaration in the code.
*/

/*-------------------------------------------------------------------------------------------------------------------------------------------*/

/* IMPORTANT NOTE:- function expressions (where a function is assigned to a variable) are not hoisted in the same way as function declarations. Only the variable declaration is hoisted, not the function itself. 
*/

bar(); // TypeError: bar is not a function

var bar = function() {
  console.log("This won't work!");
};

/* In this case, only the variable 'bar' is hoisted, not the function assigned to it, resulting in a TypeError when trying to call bar() before its assignment.
*/