"use strict";
function removeDuplicates(numbers) {
    const uqNums = [];
    const seenNums = new Set();
    for (const number of numbers) {
        if (!seenNums.has(number)) {
            seenNums.add(number);
            uqNums.push(number);
        }
    }
    return uqNums;
}
// Input:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 6, 7, 7])); // Output: [1, 2, 3, 4, 5, 6, 7]
