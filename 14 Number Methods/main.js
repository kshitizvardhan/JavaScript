console.log(parseInt("42"));                // 42
console.log(parseInt("42pxsds"));           // 42
console.log(parseInt("eie42"));             // NaN, so only later characters are removed
console.log(parseInt("eqpo42preq"));        // NaN
console.log(parseInt("42.32"));             // 42, DOESNOT includes after decimal places.

// for float values use

console.log(parseFloat("42.32"));           // 42.32