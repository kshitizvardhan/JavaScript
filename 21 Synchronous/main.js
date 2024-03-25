/* So Uptill here, what we studied was all synchronous code execution, 
In synchronous code execution, statements are executed one after the other in sequence. Each statement waits for the previous one to finish before it starts executing.
Synchronous code can block further execution until a particular operation completes. If one operation takes a long time to complete, it can delay the execution of subsequent code.
*/

function findSum(num1, num2){
    return num1 + num2;
}

console.log('Start');
console.log(findSum(5,5));
console.log('End');

/*
Sequentially
Output:
Start
10
End

*/

// In this example, each console.log() statement executes synchronously, one after the other, and the output will be in the same order as the code.