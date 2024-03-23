const allUsers = [{
    firstName: "Kshitiz",
    gender: "male"
},{
    firstName: "Tyakshi",
    gender: "female"
},{
    firstName: "Mohnish",
    gender: "male"
},{
    firstName: "Diptanshu",
    gender: "male"
},{
    firstName: "Arsh",
    gender: "male"
},{
    firstName: "Tanay",
    gender: "male"
}]

function handleObject(Object){
    console.log(`${Object.firstName} is ${Object.gender}`);
}

handleObject(allUsers);     // Since function expects a single object with properties firstName and gender
// I am  passing the entire array allUsers as a single argument to the function. Since arrays don't have properties like firstName and gender, we are getting undefined when trying to access them.

// So, pass each individual object to the handleObject function

allUsers.forEach((current) => {handleObject(current)});