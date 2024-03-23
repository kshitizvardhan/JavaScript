// for in loop -- > is simplest way to iterate over an object

let marks = {
    kshitiz: 93,
    mohnish: 94,
    diptanshu: 99,
    arsh: 89,
    tanay:95
}

for (let key in marks) {
    console.log("The marks of " + key + " are " + marks[key]);
}