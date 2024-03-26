console.log("Start");

const check = setInterval(()=>{
    console.log("This wont be printed if Clearinterval function is used later");
}, 2000);

let a=0;
for (let i=0; i<100000; i++){
    a++;
}

console.log("End");

clearInterval(check)
// clearInterval() javascript function as name suggest, used to stop the function setInterval() from being executed.