"use strict";
function validateKeys(obj, keys) {
    // Check if all keys exist in the object
    return keys.every((key) => key in obj);
}
const person2 = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person2, ["name", "age"])); // Output: true
// console.log(validateKeys(person2, ["name", "address"])); // Output: false
