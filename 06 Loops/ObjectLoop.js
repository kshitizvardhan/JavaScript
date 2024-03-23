let marks = {
    kshitiz: 93,
    mohnish: 94,
    diptanshu: 99,
    arsh: 89,
    tanay:95
}

// Object.keys(marks) => This returns the array of all keys in the 'marks' object.
var keysArray = Object.keys(marks);
console.log(keysArray); // Output: [ 'kshitiz', 'mohnish', 'diptanshu', 'arsh', 'tanay' ]

// Object.values(marks) => This returns the array of all the values in the 'marks' object.
var valuesArray = Object.values(marks);
console.log(valuesArray); // Output: [ 93, 94, 99, 89, 95 ]

for (let i = 0; i < Object.keys(marks).length; i++) {               
    console.log("The marks of " + Object.keys(marks)[i] + " are " + Object.values(marks)[i]);   // marks[Object.keys(marks)[i]]
}