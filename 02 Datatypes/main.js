var a = "Hello"; // String
console.log(a);

var b = 14.23; // Number
console.log(b);

var c = BigInt("123456789012345678901234567890");   // bigint
console.log(c);

var d = true;   // boolean
console.log(d);

var e = undefined;      // undefined
console.log(e);

var f = null;       // null
console.log(f)

var g = Symbol(b);
console.log(g)

var h = {
    firstName: "Kshitiz", 
    lastName: "Vardhan"
};                                      // object
console.log(h.firstName);
console.log(h.lastName);

var i = ["Mercedes", "Volvo", "BMW"];                       // array
console.log(i[0]);
console.log(i[1]);
console.log(i[2]);

const date = new Date("2022-03-25");                        // date
console.log(date);