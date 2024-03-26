/* API stands for Application Programming Interface. An API is a set of rules, protocols, and tools that allows different software applications to communicate and interact with each other. APIs define the methods and data formats that applications can use to request and exchange information, enabling seamless integration between different systems and services. 

API stands for Application Programming Interface. An API is a software intermediary that allows two applications to talk to each other. In other words, an API is the messenger that delivers your request to the provider that you're requesting it from and then delivers the response back to you.

we can make api's readable using a site : https://jsonviewer.stack.hu/


The Old Fashioned way is this below:-

    *>  XMLHttpRequest Object:  in short (XHR)
   
    *> The XHR object is used to exchange data with a webserver behind the scene
      this means that it is possible to updates parts of webpage,without reloading the whole web page
   
    *>  The XMLHttpRequest Object is the key to AJAX
   
    *>  XHR is an API can be used by javaScript to transfer and manipulate XML data to and from a webserver using HTTP , by establishing an independent connection channel between a web Client side and Server Side
   

   Steps :

   1. Create an XHR object
   2. Open a connection (GET,POST,PUT,DELETE)  --- xhr.open('GET', requestUrl, true)
   3. onreadystatechange  --- xhr.onreadystatechange = function () {}   this is used to check the state of the XMLHttprequest (0 to 4) 
   4. send the request  --- xhr.send()

   These are the 4 steps to make an API request using XHR object

*/

const requestURL = 'https://randomuser.me/api/';
const xhr = new XMLHttpRequest();
xhr.open('GET', requestURL, true);
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(this.readyState === 4 && this.status === 200){
        console.log(this.responseText);     // // this will give us a string to change it into object we use JSON.parse()
        const data = JSON.parse(this.responseText);
        console.log(typeof(data));
        console.log(data.results[0].name);
    }
}
xhr.send();

/* The error "ReferenceError: XMLHttpRequest is not defined" typically occurs in environments where the XMLHttpRequest object is not available, such as server-side JavaScript environments like Node.js.

The XMLHttpRequest object is primarily used in web browsers to make HTTP requests from client-side JavaScript code. 
So the code will work only or browser...
run this code via html file or directly in browser console. */

// For the code to run here in server-side js environment, we can use 'axios' (third - party library) to make an HTTP request in node.js