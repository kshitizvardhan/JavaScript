/* Inheritance in JavaScript refers to the ability of one class to inherit properties and methods from another class. This allows you to create a hierarchy of classes where subclasses can inherit behavior from their parent classes */

class User {
    constructor(username, age, gender) {
        this.username = username
        this.age = age
        this.gender = gender
    }
    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

/* The extends keyword allows a child class to inherit from a parent class. When a class extends another class, the child class inherits all properties and methods from the parent class */

// SubUser class Inheriting from user class
class SubUser extends User{
    constructor(username, age, gender, email, password) {
        super(username, age, gender);
        // the super() function is used within the constructor of the subclass to call the constructor of the parent class.
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`${this.username} added a course`);
    }
}

const user  = new User("Arsh", 18, "Male");
const user2 = new SubUser("Kshitiz", 18, "Male", "kshitiz@gmail.com", "123")

user2.logMe();      // Sub Class can access all methods from Parent Class....
user.addCourse();   // But parent class does not have access to Sub class methods....

// So, this is how is inheritance in JavaScript, but this is now all shifted to typeScipt as that is more strict
/* In TypeScript, you can define classes and inheritance in a more structured and type-safe manner compared to JavaScript. TypeScript's type system allows you to explicitly specify types for class properties, method parameters, and return types, providing better type checking and tooling support. */