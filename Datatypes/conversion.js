let score1 = "45";   // this is string 
console.log(typeof(score1));
let change = Number(score1); // change string into number through typecasting
console.log(typeof (change));  // typeof is used to find the data type 



let score2 = "abc22";                       // here this string also has alphabets
let changeToNumber = Number(score2);        // this typecasts it to number.
console.log(changeToNumber);                // This will give NaN (Not a Number)

console.log(typeof (changeToNumber));       // but this will convert this NaN to Number which is orignally not a number 


// Values for Undefined 
let und = undefined;
console.log(typeof und)
console.log(und)

let changeto = Number(und);         // typecasting undefined to number
console.log(typeof changeto)        // type shown as number
console.log(changeto)               // but NaN



// Values for Null
let nl = null;
console.log(typeof nl)              // type is object
console.log(nl)                     

let changetonl = Number(nl);        // typecasting null  to number
console.log(typeof changetonl)      // type shown as number
console.log(changetonl);            // and is 0.


/*
Notes :

33 => 33
"ss33" => NaN
true => 1 ; false => 0
null => 0
undefined => NaN


*/


let isLogin = ""; // empty string
let booleanIslogin = Boolean(isLogin);      // typecasting string to boolean
console.log(booleanIslogin);                