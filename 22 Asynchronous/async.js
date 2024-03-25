/* In asynchronous code execution, statements don't necessarily execute in sequence. Instead, certain operations can be started, and the program can continue executing while those operations are being processed in the background.
Asynchronous operations often involve I/O tasks that may take some time to complete, such as fetching data from a server or reading a file from disk.
Asynchronous code uses mechanisms like callbacks, promises, and async/await to handle the completion of asynchronous tasks and execute code when those tasks finish. */

function findSum(num1, num2){
    return num1 + num2;
}


console.log("Start");
setTimeout(() => {                  // this acts as counter which reminds the thread, to execute the code after 1 sec
    console.log(findSum(5,5))
}, 1000);
console.log("End")

/* 
Delegated the task of findSum for 1 ms. and the control went to the next line....for further execution.
Output :
Start
End
10

*/


/* setTimeout() is a function that allows you to execute a callback function after a specified delay. It's commonly used for asynchronous operations, particularly when you want to delay the execution of a piece of code or schedule it to run in the future. */