/* So, what we studied before, Classes and the extends keyword were introduced in ECMAScript 2015 (ES6) as a way to provide developers with a more familiar and structured syntax for working with objects and inheritance. They were introduced to make JavaScript more approachable for developers coming from other object-oriented programming languages like Java or C++, where classes are a central concept.

Classes and inheritance with extends simplify the syntax for defining object blueprints and establishing inheritance relationships, making the code more readable and maintainable, especially for developers who are used to working with classes in other languages.

But originally, when JavaScript was introduced Prototyping has been a fundamental feature of JavaScript. It's a core part of the language's object-oriented programming model and has been used extensively by developers to create objects, define their properties and methods, and establish inheritance relationships. 

Prototyping in JavaScript refers to the mechanism by which objects inherit properties and methods from other objects. Every object in JavaScript has a prototype, which acts as a template or blueprint for that object (Similar to a class). When you access a property or method on an object, JavaScript first looks for it on the object itself. If it's not found, it looks for it on the object's prototype, and this process continues up the prototype chain until the property or method is found or the chain ends at the null prototype. */

// So below is the exact same code of previous class based approach, in protoype approach.




// Parent constructor function
function User(username, age, gender) {
    this.username = username;
    this.age = age;
    this.gender = gender;
}

// Method added to the User prototype
User.prototype.logMe = function() {
    console.log(`Username is ${this.username}`);
};

// Child constructor function inheriting from User
function SubUser(username, age, gender, email, password) {
    User.call(this, username, age, gender); 
    // Call parent constructor similar to as super() discussed previously
    this.email = email;
    this.password = password;
}

/* This below line creates a new object whose prototype is set to User.prototype. In other words, it establishes a prototype chain where SubUser.prototype inherits from User.prototype. This step sets up the inheritance relationship between SubUser and User. */
SubUser.prototype = Object.create(User.prototype);
SubUser.prototype.constructor = SubUser; 
/*This above line ensures that the constructor property of SubUser.prototype points back to the SubUser constructor function. When you reset the constructor property, you're essentially correcting it because it gets overwritten when you set SubUser.prototype to a new object */

/* In summary, these lines together set up prototypal inheritance between SubUser and User, just like using 'extends' does in a class-based approach. */

// Method added to the SubUser prototype
SubUser.prototype.addCourse = function() {
    console.log(`${this.username} added a course`);
};




const user = new User("Arsh", 18, "Male");
const user2 = new SubUser("Kshitiz", 18, "Male", "kshitiz@gmail.com", "123");

user2.logMe();      // Output: Username is Kshitiz
user2.addCourse();  // Output: Kshitiz added a course
