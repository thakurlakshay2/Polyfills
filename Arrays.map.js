const doubleVals = (item) => item * 2;

const arr = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }
  return result;
};

console.log(arr.myMap(doubleVals));

//----------------------- EDGE CASES --------------------------//
// Edge Case 1: Empty Array
let emptyArray = [];
let result = emptyArray.myMap((x) => x * 2);
console.log("Empty array:", result); // Output: []

// Edge Case 2: Array with One Element
let singleElementArray = [42];
result = singleElementArray.myMap((x) => x * 2);
console.log("Single element array:", result); // Output: [84]

// Edge Case 3: Array with Negative Numbers
let arrayWithNegatives = [-1, -2, -3, -4];
result = arrayWithNegatives.myMap((x) => x * 2);
console.log("Array with negative numbers:", result); // Output: [-2, -4, -6, -8]

// Edge Case 4: Array with Zeroes
let arrayWithZeroes = [0, 1, 2, 3];
result = arrayWithZeroes.myMap((x) => x * 2);
console.log("Array with zeroes:", result); // Output: [0, 2, 4, 6]

// Edge Case 5: Array with Duplicate Elements
let arrayWithDuplicates = [1, 2, 2, 3];
result = arrayWithDuplicates.myMap((x) => x * 2);
console.log("Array with duplicates:", result); // Output: [2, 4, 4, 6]

// Edge Case 6: Array with Large Integers
let arrayWithLargeNumbers = [Number.MAX_SAFE_INTEGER, 1];
result = arrayWithLargeNumbers.myMap((x) => x * 2);
console.log("Array with large integers:", result); // Output: [18014398509481982, 2]

// Edge Case 7: Non-Numeric Elements
let arrayWithStrings = ["a", "b", "c"];
result = arrayWithStrings.myMap((x) => x.toUpperCase());
console.log("Non-numeric elements:", result); // Output: ["A", "B", "C"]

// Edge Case 8: Array with Mixed Types
let arrayWithMixedTypes = [1, "two", 3, null];
result = arrayWithMixedTypes.myMap((x) => (typeof x === "number" ? x * 2 : x));
console.log("Array with mixed types:", result); // Output: [2, "two", 6, null]

// Edge Case 9: Array with Null or Undefined Values
let arrayWithNulls = [1, null, 2, undefined, 3];
result = arrayWithNulls.myMap((x) => (x == null ? 0 : x * 2));
console.log("Array with null or undefined values:", result); // Output: [2, 0, 4, 0, 6]

// Edge Case 10: Nested Arrays
let nestedArray = [
  [1, 2],
  [3, 4],
];
result = nestedArray.myMap((arr) => arr.myMap((x) => x * 2));
console.log("Nested arrays:", result); // Output: [[2, 4], [6, 8]]

// Edge Case 11: Objects in Array
let objectsArray = [{ x: 1 }, { x: 2 }, { x: 3 }];
result = objectsArray.myMap((obj) => ({ x: obj.x * 2 }));
console.log("Objects in array:", result); // Output: [{ x: 2 }, { x: 4 }, { x: 6 }]

// Edge Case 12: Array with Functions
let arrayWithFunctions = [() => 1, () => 2, () => 3];
result = arrayWithFunctions.myMap((fn) => fn() * 2);
console.log("Array with functions:", result); // Output: [2, 4, 6]
