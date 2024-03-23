/* Non-Primitve DataTypes in JavaScript
    
Non-primitive data types, also known as reference types in JavaScript, are types of data that are not directly stored in the variable but are instead stored as references to locations in memory where the data is stored. These types of data can contain multiple values or complex data structures. In JavaScript, common non-primitive data types include:

Object: Objects are complex data types that represent collections of key-value pairs, where the keys are strings (or symbols) and the values can be of any data type, including other objects, functions, arrays, primitives, etc.
javascript */

var person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA"
  }
};

console.log(person.name);
console.log(person.address.country)

/*
Array: Arrays are ordered collections of values, where each value can be of any data type, including primitives, objects, or even other arrays.
javascript
*/

var fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);

/*
Function: Functions are a special type of object that can be invoked (called) to perform a task or return a value.
javascript
*/

function greet() {
  return "Hello !";
}
console.log(greet());


/*
Date: The Date object represents a specific moment in time javascript

var currentDate = new Date();

RegExp: The RegExp object represents a regular expression pattern javascript

var regex = /[a-z]+/;

Error: Error objects are thrown when runtime errors occur. They contain information about the error, such as its type and message javascript

var error = new Error("Something went wrong.");

These non-primitive data types are stored by reference, meaning that when you assign a non-primitive value to a variable or pass it as an argument to a function, you're actually working with a reference to the data stored elsewhere in memory. As a result, changes made to the data through one reference will affect all other references to the same data.

---------------------------------------------------------------------------------------------------------------------------------------------
aesi koi bhi value jisko copy karne par real value copy nahi hota, balki us mein value ka reference paas hojaata hai, usse hum reference value kehte hai, 
aur jisse copy krne pe real copy ho jayye wo primitive type value hoti hai 


ek se jyada bande ki baat ki to hum usee array bolenge 
and 
agr ek bande ke baare mein saari baat ki hai to hum usse object bolenge

objects : EK bande ki details ko hold karna, in  key:value pair

like hume ek watch ki saari information store karni hai to hum uska ek object create kar denge

*/

let watch = {
    name: "Rollex",   // here, name is property and "Rollex" is value
    price: "150k",
    type: "Digital",
    color: "Gold",
    feature: function abc() {
        // Agar kisi property ki value function ho to hum usse 'METHOD' bolte hai
        return "this is my feature";
    }
}

console.log(watch.type)
console.log(watch.feature())

