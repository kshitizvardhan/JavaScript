fetch('https://randomuser.me/api/')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();     // Parse response body as JSON,

        // You could also have done like this only in the case where you know the response body contains JSON string
        // .then(response => {
        //     return response.text(); // Read the response body as text
        // })
        // .then(text => {
        //     const data = JSON.parse(text); // Parse the response text as JSON
        //     return data;
        // })

        // But when you don't know that the response object is a valid JSON string or not, then simply use response.json()
        // Mostly use response.json() as its shorter...also no matter what the response body is, it will pass it to json without any errors.
    })
    .then(data => {         // could write any parameter name, like responseData or result or etc....
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });


/*

In JavaScript's Fetch API, the ".ok" property is a boolean value indicating whether the HTTP response was successful or not. It represents the status of the response and is a convenient way to check if the request was successful without having to manually check the status code.

The .ok property returns true if the status code of the HTTP response is in the range 200-299 (inclusive), indicating a successful request. It returns false for all other status codes, including client errors (4xx) and server errors (5xx).

-- throw: In JavaScript, throw is a keyword used to generate an exception (or an error). When throw is executed, it interrupts the normal flow of the program and causes it to jump to the nearest enclosing try...catch block.

-- new: As we already know, the new keyword is used in JavaScript to create instances of user-defined objects or built-in constructor functions. In this context, it's used to create a new instance of the built-in Error object.

-- Error: Error is a built-in JavaScript object constructor function used to create error objects. Error objects can be used to throw new errors and capture information about what went wrong. You can provide a message string to the Error constructor to describe the error.

'Network response was not ok': This is a string parameter passed to the Error constructor. It provides a human-readable description of the error that occurred. This message will be available in the message property of the error object.

When throw new Error('Network response was not ok'); is executed, it creates a new Error object with the specified message, and then throws that error. If there is a surrounding try...catch block, the program will jump to the corresponding catch block to handle the error. Otherwise, it will cause the script to terminate, and the error will be displayed in the console with the specified message.
In this case the surrounding catch block will be the .catch where error is passed as parameter.

*/