/*
A promise is a promise of code execution,the code either executes successfully or fails in both the user get notified.

syntax :-
---------
let promise = new Promise(function(resolve, reject) {
         // executor (the producing code, "singer")
});


There are three states of a promise:-
-------------------------------------


1. Pending:- initial state, neither fulfilled nor rejected.
2. Fulfilled:- meaning that the operation was completed successfully.
3. Rejected:- meaning that the operation failed.


Will write similar code now for the reading file, but with promises, they have .catch, .then, and .finally .

JavaScript Promises are a powerful feature introduced in ECMAScript 6 (ES6) that allow asynchronous operations to be handled in a more organized and manageable way. They provide a cleaner alternative to traditional callback-based approaches for handling asynchronous code.
So this is just syntactic sugar and under the hood it working the same as callbacks.

1) Creation: To create a Promise, you typically instantiate a new Promise object using the Promise constructor. This constructor takes a function as an argument, which in turn takes two parameters: resolve and reject. Inside this function, you perform your asynchronous operation, and then call resolve when it succeeds or reject when it fails.

                        const myPromise = new Promise((resolve, reject) => {
                            // Perform some asynchronous operation
                            // If successful, call resolve
                            // If there's an error, call reject
                        });

2) Consumption: Once you have a Promise, you can consume its result using the .then() method. This method takes one or two callback functions as arguments. The first callback is executed if the Promise is resolved successfully, and the second callback (optional) is executed if the Promise is rejected.

                        myPromise
                            .then((result) => {
                                // Handle successful result
                            },
                            .catch((error)) => {
                                // Handle error
                            }
                        );

3) Chaining: Promises support chaining, allowing you to execute multiple asynchronous operations sequentially. You can chain multiple .then() methods to a Promise, where each .then() returns a new Promise.

                        myPromise
                            .then((result) => {
                                // Do something with the result
                                return anotherAsyncOperation();
                            })
                            .then((result) => {
                                // Do something with the result of the second async operation
                            })
                            .catch((error) => {
                                // Handle any errors in the chain
                            });

4) Error Handling: You can use the .catch() method to handle errors that occur in any part of the Promise chain.

Promises provide a more structured and readable way to handle asynchronous code compared to "nested callbacks", making code easier to understand and maintain. They are widely used in modern JavaScript development */

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, "file.txt");

function readFile() {
    return new Promise(function(resolve, reject) {
        fs.readFile(filePath, "utf-8", function(err, data) {
            if (err) {
                reject(err); // Reject the Promise with the error
            } else {
                resolve(data); // Resolve the Promise with the data
            }
        });
    });
}

readFile()
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error("Error reading file:", error);
    });
