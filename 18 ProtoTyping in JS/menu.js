// Here Menu is class

function Menu(name, duration, price, type){
    this.name = name;
    this.duration = duration;
    this.price = price;
    this.type = type;
}

// Below these are class methods

Menu.prototype.showMenu = function() {
    console.log(`Name of the Dish: ${this.name}`);
    console.log(`Duration to Cook: ${this.duration} mins`);
    console.log(`Price: Rs. ${this.price}`);
    console.log(`Starter/Main/Dessert: ${this.type}`);
}

Menu.prototype.bill = function() {
    return `You need to Pay Rs. ${this.price}`;
}

// This below is a static Method, which is directly called with class.
// When defining a static function in Prototyping JS, you don't need to use the 'prototype' syntax

Menu.restaurant = function() {
    console.log("Kshitiz's Restaurant !!");
}

Menu.restaurant();      // Output: Kshitiz's Restaurant !!
// Menu.showMenu();        // as we know these won't work as they are used only when an instance is created.

const BreakFast = new Menu("Aloo Prantha", 5, 20, "Main");
const Lunch = new Menu("Chhole Bhature", 10, 50, "Main");
const dinner = new Menu("Matar Paneer", 15, 80, "Main");

BreakFast.showMenu();
const pay = BreakFast.bill();
console.log(pay);

function SubMenu(name, duration, price, type, quantity){
    Menu.call(this, name, duration, price, type);
    this.quantity = quantity;
}

SubMenu.prototype = Object.create(Menu.prototype);
SubMenu.prototype.constructor = SubMenu;

// So this here inheritance is done. SubMenu has inherited from Menu...Quite complex syntax...but can be understood as follows :-
/* Line 1 =  Object.create(Menu.prototype) --> creates a new object with its prototype set to Menu.prototype
             This means that any properties or methods added to Menu.prototype will be accessible to instances of SubMenu
             Such as the showMenu() and bill() functions are accessible in SubMenu.
             By assigning this new object to "SubMenu.prototype" , we establish the prototype chain such that instances of SubMenu inherit from Menu.
   Line 2 =  By setting 'SubMenu.prototype.constructor' to 'SubMenu', we ensure that the constructor property of instances created with "new 
             SubMenu()" correctly points to SubMenu instead of Menu. 
             
             This is important for clarity and potential debugging purposes, as it maintains consistency with the expected constructor function.
*/

/* the default behaviour of JavaScript is to search for the property in the object itself and if it is not found then it will search for the property in the prototype of the object and if it is not found there then it will search for the property in the prototype of the prototype of the object and so on until it reaches the end of the prototype chain.*/


// Added method to the subMenu (child class) of menu (parent class)
SubMenu.prototype.log = function() {
    console.log("This is Sub Menu");
}

const check = new SubMenu("Aloo Prantha", 5, 20, "Main",2);
check.log();                    // Its own function
const bill = check.bill();      // Inherited function from parent
console.log(bill);