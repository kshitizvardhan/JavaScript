const user = {
    firstName: "Kshitiz",
    gender: "male"
}

// JSON is a  global object provided by JavaScript.
// Above object is converted to Json using method stringify(), invoked from JSON object.
const sendUser = JSON.stringify(user);
console.log(sendUser);  

// Above JSON is converted to Object using method parse(), invoked from JSON object.
const JSON_to_Object = JSON.parse(sendUser);
console.log(JSON_to_Object);