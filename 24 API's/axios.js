const axios = require('axios');

axios.get('https://randomuser.me/api/')
    .then(response => {                     // parameter named 'response' or any other name you prefer.
        console.log(response.data);         // parameter.data   --> .data property specifically holds the response data returned from the   server. It is specific to Axios and may not be available in other HTTP client libraries or environments.
        
        /* const data = JSON.parse(response.data);
        console.log(data); */
        // No need to parse as, Axios automatically parses the response body for you, so response.data contains the parsed JSON object.
    })
    .catch(error => {
        console.error('Error:', error);
    });




/* .get, .then, and .catch are methods used in JavaScript to work with asynchronous operations, particularly with promises. They are commonly used with libraries like Axios or Fetch API for making HTTP requests. 




1) .get: This method is used to initiate an HTTP GET request to a specified URL. It's commonly used in libraries like Axios to specify the type of HTTP request to be made.

-- In this example,, .get is used to specify that a GET request should be made to the URL 'https://api.example.com/data'

2) .then: This method is used to handle the fulfillment of a promise. When a promise resolves successfully (i.e., it's fulfilled), the function passed to .then is executed. It allows you to perform actions on the resolved value of the promise

-- In this example, the function passed to .then will be executed when the GET request successfully completes, and response.data will contain the response data.

3) .catch: This method is used to handle errors or rejections of a promise. When a promise is rejected (i.e., it's not fulfilled), the function passed to .catch is executed. It allows you to handle errors gracefully

-- In this example, the function passed to .catch will be executed if there's an error during the HTTP request, allowing you to log the error or perform other error-handling tasks.






These methods are commonly used with promises in JavaScript to handle asynchronous operations in a concise and readable manner. They're particularly useful when working with asynchronous tasks like making HTTP requests, where you need to handle both successful responses and errors.


*/