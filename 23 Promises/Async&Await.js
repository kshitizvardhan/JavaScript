// const fs = require('fs');
// const path = require('path');

// const filePath = path.join(__dirname, "file.txt");

// // My own asynchronous function
// function kshitizReadFile() {
//     return new Promise(function(resolve, reject) {
//         fs.readFile(filePath, "utf-8", function(err, data) {
//             if (err) {
//                 reject(err); // Reject the Promise with the error
//             } else {
//                 resolve(data); // Resolve the Promise with the data
//             }
//         });
//     });
// }

// kshitizReadFile()
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.error("Error reading file:", error);
//     });

/* Now instead of .then and .catch, we could make a function with keyword async in front and await for its value in it, when the value is fetched then it logs there...till then the rest of the logic is not run in that function...but outside of that function..code still runs. */

function readFile() {
    return new Promise(function(resolve,reject){
        // suppose it takes 6 sec for a work to be done
        setTimeout(()=>{
            resolve("foo");
        },6000)
    })
}

async function data(){
    const result = await readFile();    // here the thread is busy waiting for 6 seconds till the promise is not resolved
    // if await is not used in front of the function which will return promise, then it would log the promise in its pending stage.
    // also till the thread above is waiting for the promise to be resolved...no code below this could run..
    console.log(result);
    console.log("Prints Only after the promise is resolved after 6 seconds");
    console.log("This is actually good for developers, as further code might need the data which is resolved by promise");
    console.log("So, it would'nt run unitll data is recieved");
}

data();
console.log("Main");
// So this gets print.... when thread is waiting for readFile(). 

// So this syntax replaced the .then, .catch stuff
// Made code more readable and maintainable, easy to understand..
// Similarly, this is also a syntactic sugar, you can use any syntax...based on your preference.

/*

total 3 syntaxes to write asynchronous code:-
a) callbacks
b) promises with .then, .catch
c) promises with async and await keyword.

*/