const newarr = [100, 200, 300, 400]

function returnsecondvalue(getarray) {
    return getarray[1]
}


console.log(returnsecondvalue(newarr))
console.log(returnsecondvalue(45))


// So we can see that we need not defined anything in the parameter, as is it a array or a object, if the return statement matches, the code is runned. else it logs undefined

// This is why typescript was introduced for more strictness


/*

interface User {
    firstName: string;
    gender: string;
}

const allUsers: User[] = [
    {
        firstName: "Kshitiz",
        gender: "male"
    },
    {
        firstName: "Tyakshi",
        gender: "female"
    },
    // Other user objects...
];

function handleObject(obj: User): void {
    console.log(`${obj.firstName} is ${obj.gender}`);
}

allUsers.forEach(user => handleObject(user));

In this TypeScript code:

We define an interface User to describe the shape of user objects.
We explicitly specify that allUsers is an array of User objects.
The handleObject function takes a parameter of type User and returns void (meaning it doesn't return anything).
TypeScript compiler will enforce type checking, ensuring that only objects matching the User interface can be passed to the handleObject function.
By using TypeScript, you can catch potential errors early in the development process and write safer and more maintainable code.

*/