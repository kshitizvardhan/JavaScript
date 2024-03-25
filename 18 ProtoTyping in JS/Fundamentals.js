

function multiplyBy5(num){
    this.num = num
    return num * 5;
}

console.log(multiplyBy5(5));
/* This line calls the multiplyBy5 function with an argument of 5. Inside the function, 'this' refers to the global object. The function returns the result of multiplying num by 5. In this case, it returns 5 * 5 = 25 */

multiplyBy5.power = 2;
/* This line adds a property named power to the multiplyBy5 function object. So, multiplyBy5 now has a property 'power' with a value of '2'. 
*******This property is unrelated to the function's behavior when it's called.**********/
console.log(multiplyBy5.power);


/* This line logs the prototype property of the multiplyBy5 function object. Since multiplyBy5 is a function and not a constructor function (i.e., it's not intended to be used with the new keyword), its prototype property doesn't play a role in prototype-based inheritance. */
console.log(multiplyBy5.prototype);

// Question - But why this line showed the output as {}
/* ANSWER TO THIS IS

In JavaScript, every function has a prototype property by default, regardless of whether it's a regular function or a constructor function. When you log the prototype property of a regular function like multiplyBy5, it initially appears to be an empty object {}.

This is because the prototype property of a regular function is typically used when the function is intended to be used as a constructor function to create objects with shared properties and methods. But here the function is a normal function. 

*/