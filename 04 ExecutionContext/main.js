// execution context matalab hai jab bhi function chlega to uske liye ek container banega jismein 3 cheeze hongi 
//     1.variables 
//     2.function inside the parent function
//     3. lexical environment of that function :- lexical environment ek type ka chart hai jismein likha hota hai ki kin chozon ko access kar sakte hai aur kin chozon ko access nahi kar sakte hai matalab ki it holds scope and scope chain.

    // example:-
    function a(){
        var a = 10;
        function b(){
            var b = 20;
            console.log(a);
        }
        b();
    }
    a();

// In JavaScript, an execution context is an abstract concept that refers to the environment in which JavaScript code is executed. It consists of three main components:

// 1. **Variable Environment**: This component contains all the variables declared within the current scope, including function arguments, local variables, and variables from outer scopes accessible through closures.

// 2. **Lexical Environment**: Similar to the variable environment, the lexical environment holds identifiers and their associated values. It also maintains a reference to the outer lexical environment, allowing access to variables in outer scopes.

// 3. **This Binding**: The `this` keyword refers to the object that is currently executing the code. Its value depends on how the function was called and where it was defined.

// There are different types of execution contexts in JavaScript:

// 1. **Global Execution Context**: This is the outermost execution context, representing the environment in which the top-level code is executed. It is created when the JavaScript engine starts running, and it persists until the script finishes execution. In a web browser, the global execution context is associated with the `window` object.

// 2. **Function Execution Context**: Each time a function is invoked, a new execution context is created for that function. This context includes the function's arguments, local variables, and a reference to the outer lexical environment.

// 3. **Eval Execution Context**: When code is executed using the `eval()` function, a new execution context is created. The variables and functions defined within the `eval()` code are scoped to this context.

// 4. **Module Execution Context**: With the introduction of ES6 modules, JavaScript gained a new type of execution context specific to modules. Each module has its own scope, and variables are not shared between modules unless explicitly exported and imported.

// Understanding execution contexts is crucial for understanding how JavaScript code behaves, especially in terms of variable scope, closures, and the value of `this`. These concepts are fundamental for writing efficient and bug-free JavaScript code.