function addtwonumbers(num1, num2) {    // (parameter1,parameter2)
    console.log(num1 + num2)
}
// addtwonumber ---> without () it is only the refrence of the function but when we add () it calls the function 

addtwonumbers(2, 3)                     //(argument1,argument2)

/*  const result = addtwonumbers(2, 3);    
    this will return undefined because we are not returning anything from the above function
    console.log(result);     
    Output: undefined 
*/

// On the other hand, here the value is returned.

function add(a,b){          // Here a,b are parameters
    return a+b;
}

const sum = add(5,5);       // Here 5,5 are arguments
console.log(sum);

/*Parameters are the variables declared in the function definition.
Arguments are the actual values passed to the function when it's called, which correspond to the parameters.*/