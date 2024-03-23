/* PRIMITVE DATATYPES IN JavaScript

Primitive data types in JavaScript are data types that are not objects and do not have methods or properties. 
They represent single values and are immutable, meaning they cannot be changed. 
In JavaScript, there are six primitive data types:

String: Represents a sequence of characters enclosed within single (') or double (") quotes javascript
var str = "Hello, world!";

Number: Represents numeric values, including integers and floating-point numbers javascript
var num = 42;

Boolean: Represents a logical value of true or false javascript
var isTrue = true;

Undefined: Represents a variable that has been declared but not assigned a value javascript
var undefinedVariable;

Null: Represents the intentional absence of any value javascript
var nullValue = null;

Symbol: Represents a unique and immutable value used as an identifier for object properties javascript
var sym = Symbol("description");



These primitive data types are stored directly in memory, and when you access a variable containing a primitive value, you work directly with that value's copy.

It's important to note that although primitive values are immutable, variables containing primitive values can be reassigned to new values. However, this does not change the original value, but rather replaces it with a new value.

*/