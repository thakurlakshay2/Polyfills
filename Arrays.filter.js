Array.prototype.myFilter = function (fn) {
  const output = [];
  this.forEach((element, idx) => {
    if (fn(element, idx, this)) {
      output.push(element);
    }
  });
  return output;
};

const isEven = (num) => num % 2 === 0;

const arr = [1, 2, 3, 4, 5, 6, 6, 6, 9];

const evenElements = arr.myFilter(isEven);

console.log(evenElements);

//----------------------- EDGE CASES --------------------------//

// Edge Case 1: Empty Array
let emptyArray = [];
let result = emptyArray.myFilter((x) => x > 0);
console.log("Empty array:", result); // Output: []

// Edge Case 2: Array with One Element
let singleElementArray = [42];
result = singleElementArray.myFilter((x) => x > 40);
console.log("Single element array (true condition):", result); // Output: [42]
result = singleElementArray.myFilter((x) => x > 50);
console.log("Single element array (false condition):", result); // Output: []

// Edge Case 3: Array with Negative Numbers
let arrayWithNegatives = [-1, -2, -3, -4];
result = arrayWithNegatives.myFilter((x) => x < -2);
console.log("Array with negative numbers:", result); // Output: [-3, -4]

// Edge Case 4: Array with Zeroes
let arrayWithZeroes = [0, 1, 2, 3];
result = arrayWithZeroes.myFilter((x) => x > 0);
console.log("Array with zeroes:", result); // Output: [1, 2, 3]

// Edge Case 5: Array with Duplicate Elements
let arrayWithDuplicates = [1, 2, 2, 3];
result = arrayWithDuplicates.myFilter(
  (x, index, self) => self.indexOf(x) === index
);
console.log("Array with duplicates (unique elements):", result); // Output: [1, 2, 3]

// Edge Case 6: Array with Large Integers
let arrayWithLargeNumbers = [Number.MAX_SAFE_INTEGER, 1];
result = arrayWithLargeNumbers.myFilter((x) => x > 1);
console.log("Array with large integers:", result); // Output: [9007199254740991]

// Edge Case 7: Non-Numeric Elements
let arrayWithStrings = ["a", "b", "c"];
result = arrayWithStrings.myFilter((x) => x === "b");
console.log("Non-numeric elements:", result); // Output: ["b"]

// Edge Case 8: Array with Mixed Types
let arrayWithMixedTypes = [1, "two", 3, null];
result = arrayWithMixedTypes.myFilter((x) => typeof x === "number");
console.log("Array with mixed types (numbers only):", result); // Output: [1, 3]

// Edge Case 9: Array with Null or Undefined Values
let arrayWithNulls = [1, null, 2, undefined, 3];
result = arrayWithNulls.myFilter((x) => x != null);
console.log("Array with null or undefined values:", result); // Output: [1, 2, 3]

// Edge Case 10: Nested Arrays
let nestedArray = [[1, 2], [3, 4], [5]];
result = nestedArray.myFilter((arr) => arr.length > 1);
console.log("Nested arrays:", result); // Output: [[1, 2], [3, 4]]

// Edge Case 11: Arrays with Objects
let objectsArray = [{ x: 1 }, { x: 2 }, { x: 3 }];
result = objectsArray.myFilter((obj) => obj.x > 1);
console.log("Arrays with objects:", result); // Output: [{ x: 2 }, { x: 3 }]

// Edge Case 12: Empty Strings
let arrayWithEmptyStrings = ["", "hello", "", "world"];
result = arrayWithEmptyStrings.myFilter((x) => x !== "");
console.log("Array with empty strings:", result); // Output: ["hello", "world"]

// Edge Case 13: Sparse Arrays
let sparseArray = [1, , 3, , 5];
result = sparseArray.myFilter((x) => x !== undefined);
console.log("Sparse array:", result); // Output: [1, 3, 5]

// Edge Case 14: Array with Functions
let arrayWithFunctions = [() => 1, () => 2, () => 3];
result = arrayWithFunctions.myFilter((fn) => fn() > 1);
console.log("Array with functions:", result); // Output: [() => 2, () => 3]

// Edge Case 15: Large Array
let largeArray = Array.from({ length: 1000000 }, (_, i) => i);
result = largeArray.myFilter((x) => x % 100000 === 0);
console.log("Large array:", result); // Output: [0, 100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000]
