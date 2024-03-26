const fs = require("fs");
const path = require("path");
// node js libraries...

// Construct the absolute path to the file using path.join()
const filePath = path.join(__dirname,"a.txt");


fs.readFile(filePath, "utf-8", function(err, data){
    console.log(data);
})

// as this above function is a asynchronous function, the control will move further, till the time file is being read and logged.
console.log("END");
let a=0;

for(let i=0; i<10000000; i++){
    a++;
}
// By the time above loop executing the, file has been read and is waiting there for a callback.

console.log("END-2");   // when control reaches here and gets free, then the control goes back to the fileSystem
// and now the data is logged.













/* 

require("path"): This line imports the built-in Node.js path module, which provides utilities for working with file paths.

__dirname: __dirname is a special global variable provided by Node.js. It represents the directory name of the current module (i.e., the directory containing the current script).
When you use __dirname, you get the absolute path to the directory containing the script file, regardless of where the script is being executed from.

path.join(): The path.join() method joins all given path segments together using the platform-specific separator (e.g., \ on Windows, / on Unix-like systems) and resolves the resulting path. 

path.join(__dirname, "a.txt"):  joins the directory path stored in __dirname with the relative path "a.txt", resulting in the absolute path to the file "a.txt".*/