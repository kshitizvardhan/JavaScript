class Animal{
    constructor(name,legCount,speak){
        this.name = name;
        this.legCount = legCount;
        this.speak = speak
    }
    describe(){
        return `Hi, I am ${this.name}, i have ${this.legCount} legs, i speak ${this.speak}`
    }
    speaking(){
        return `${this.speak}`;
    }
    static makeSound(){
        return "All animals make sounds."
    }
}


// Now using blueprint, created a object with class constructor, similarly in one line we can create many animals which have same properties.


// when you use the 'new' keyword to create an instance of a class, the constructor function of that class is automatically called. 
const dog = new Animal("doggie", 4, "bhow bhow");
console.log(dog.describe())
console.log(dog.speaking());
console.log(dog)

/* you can't call Animal.describe() or Animal.speaking(), becoz these are object/instance methods, meaning they are associated with individual instances of the class, not with the class itself. Therefore, you cannot call these methods directly on the class itself (Animal.describe() or Animal.speak()).

If you want to call a method directly on the class without instantiating an object, you would indeed need to define that method as static in the class. Static methods are associated with the class itself rather than with instances of the class */

console.log(Animal.makeSound());
