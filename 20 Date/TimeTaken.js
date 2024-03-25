// Checking time taken by a function to run in JavaScript

function sumUptilln(){
    let sum = 0
    for (let i=0; i<10000000; i++){
        sum += 1;
    }
}

const before = new Date();
const beforeTime = before.getTime();

sumUptilln();

const after = new Date();
const afterTime = after.getTime();
let result = afterTime-beforeTime;

console.log("The above code takes " + result + " ms to run completely.");
// Output: The above code takes 11 ms to run completely.