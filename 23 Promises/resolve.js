
var promise = new Promise(function(resolve,reject){
    // Suppose there is a task which takes 10 seconds.
    setTimeout(()=>{
        resolve("foo");
    },5000)
})

// we will check immediately, then 4 seconds and then 10 seconds, that is the async work done or not ? Pending or Resolved ?
// According to code, it shall resolve after 5 sec, so logging at 5 sec, would also show the resolved output.

console.log(promise);

setTimeout(()=>{
    console.log(promise);
},4000)

setTimeout(()=>{
    console.log(promise);
},10000)

// This above is just an example to tell you that how pending and resolved states are working with promises...not an industry standard code.

/*
Output:

Promise { <pending> }       // Immediately
Promise { <pending> }       // After 4 seconds
Promise { 'foo' }           // After 10 Seconds

*/