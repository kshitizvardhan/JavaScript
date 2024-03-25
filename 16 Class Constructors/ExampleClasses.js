class User {
    // jese hi 'new' keyword use hoga to constructor call hoga
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        this.password = this.password.split('').reverse().join('');
        return this.password
    }

    changeUserName(newUserName) {
        this.username = newUserName;
        return this.username
    }

    displayUserInfo() {
        console.log(`Username: ${this.username}`);
        console.log(`Email: ${this.email}`);
        console.log(`Password: ${this.password}`);
    }
}


const Kshitiz = new User("Kshitiz", "Kshitiz@gmail.com", "123");
const Mohnish = new User("fitmontii","fit@gmail.com","789");
const Diptanshu = new User("i.diptanshu","Diptanshu@gmail.com","123");

console.log(Kshitiz.encryptPassword());
console.log(Kshitiz.changeUserName("itxKshitiz"));
Kshitiz.displayUserInfo();

// Behind the scene

// function NewUser(username, email, password) {
//     this.username = username
//     this.email = email
//     this.password = password
// }

// NewUser.prototype.encryptPassword = function () {
//     return `${this.password}abc`
// }

// NewUser.prototype.changeUsername = function () {
//     return `${this.username.toUpperCase()}`
// }

// const tea = new User("tea", "tea@gmail.com", "123")

// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());