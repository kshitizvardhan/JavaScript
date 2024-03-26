console.log("Start");
var a = setTimeout(()=>{
    console.log("This wont be printed if ClearTimeout function is used later")
},2000);

console.log("END")
// clearTimeout(a)
// clearTimeout() javascript function as name suggest, used to stop the function setTimeout() from being executed
