function add(num1, num2, funcToCall){
    const result = num1 + num2;
    funcToCall(result);
}

function printResult(data){
    console.log(`THE SUM IS ${data}`);
}

function printResult2(data){
    console.log(`The sum is ${data}`);
}

const result = add(5,5,printResult);            // The 3rd argument is the callback function passed which is used their in the function.
console.log(result);

// Callback function reduces the work to change the function call by going internally in the called function's code.
// By this pass any function, and it replaces the funcToCall() with the particular passed callback function.

const result2 = add(5,5,printResult2);
console.log(result2)


// -----------------------------------------------------------------------------------------------------------------------------------------
// Example-2

function greet(name, callBack){
    console.log(`Hi! ${name}`);
    callBack();
}

function callChiiku(){
    console.log("Haan !!, Baby Bolo -1");
}
function callShalini(){
    console.log("Haan !!, Baby Bolo -2");
}
function callKandy(){
    console.log("Haan !!, Baby Bolo -3");
}

// So like this, aapko jisko call lagana, usko pass kardo, greet function mai change karne ki zarurat nhi
// speedial...hehehe

greet("Kshitiz",callChiiku);
greet("Kshitiz",callShalini);
greet("Kshitiz",callKandy);