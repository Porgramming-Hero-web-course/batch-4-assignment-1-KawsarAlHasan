"use strict";
function getProperty(obj, key) {
    return obj[key];
}
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name")); // Output: Alice
console.log(getProperty(person, "age")); // Output: 30
