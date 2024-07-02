const array = [1, 3, 4, 5, 5, 6];

const logger = (item, index) => {
  console.log(item, index);
};

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i);
  }
};

array.myForEach(logger);

//----------------------- EDGE CASES --------------------------//

// Edge Case 1: Empty Array
let emptyArray = [];
emptyArray.myForEach((x) => console.log("Empty array:", x)); // No output

// Edge Case 2: Array with One Element
let singleElementArray = [42];
singleElementArray.myForEach((x) => console.log("Single element array:", x)); // Output: 42

// Edge Case 3: Array with Negative Numbers
let arrayWithNegatives = [-1, -2, -3, -4];
arrayWithNegatives.myForEach((x) =>
  console.log("Array with negative numbers:", x)
); // Output: -1, -2, -3, -4

// Edge Case 4: Array with Zeroes
let arrayWithZeroes = [0, 1, 2, 3];
arrayWithZeroes.myForEach((x) => console.log("Array with zeroes:", x)); // Output: 0, 1, 2, 3

// Edge Case 5: Array with Duplicate Elements
let arrayWithDuplicates = [1, 2, 2, 3];
arrayWithDuplicates.myForEach((x) => console.log("Array with duplicates:", x)); // Output: 1, 2, 2, 3

// Edge Case 6: Array with Large Integers
let arrayWithLargeNumbers = [Number.MAX_SAFE_INTEGER, 1];
arrayWithLargeNumbers.myForEach((x) =>
  console.log("Array with large integers:", x)
); // Output: 9007199254740991, 1

// Edge Case 7: Non-Numeric Elements
let arrayWithStrings = ["a", "b", "c"];
arrayWithStrings.myForEach((x) => console.log("Non-numeric elements:", x)); // Output: a, b, c

// Edge Case 8: Array with Mixed Types
let arrayWithMixedTypes = [1, "two", 3, null];
arrayWithMixedTypes.myForEach((x) => console.log("Array with mixed types:", x)); // Output: 1, two, 3, null

// Edge Case 9: Array with Null or Undefined Values
let arrayWithNulls = [1, null, 2, undefined, 3];
arrayWithNulls.myForEach((x) =>
  console.log("Array with null or undefined values:", x)
); // Output: 1, null, 2, undefined, 3

// Edge Case 10: Nested Arrays
let nestedArray = [
  [1, 2],
  [3, 4],
];
nestedArray.myForEach((arr) =>
  arr.myForEach((x) => console.log("Nested arrays:", x))
); // Output: 1, 2, 3, 4

// Edge Case 11: Objects in Array
let objectsArray = [{ x: 1 }, { x: 2 }, { x: 3 }];
objectsArray.myForEach((obj) => console.log("Objects in array:", obj)); // Output: {x: 1}, {x: 2}, {x: 3}

// Edge Case 12: Array with Functions
let arrayWithFunctions = [() => 1, () => 2, () => 3];
arrayWithFunctions.myForEach((fn) =>
  console.log("Array with functions:", fn())
); // Output: 1, 2, 3

// Edge Case 13: Modifying Array During Iteration
let arrayToModify = [1, 2, 3];
arrayToModify.myForEach((x, index, arr) => {
  console.log("Modifying array during iteration:", x);
  if (x === 2) arrayToModify.push(4); // Adding elements while iterating
});
console.log("Final array:", arrayToModify); // Output: [1, 2, 3, 4]

// Edge Case 14: Early Termination
let arrayToCheckTermination = [1, 2, 3, 4];
try {
  arrayToCheckTermination.myForEach((x) => {
    console.log("Early termination test:", x);
    if (x === 2) throw new Error("Terminate");
  });
} catch (e) {
  console.log(e.message); // Output: Terminate
}

// Edge Case 15: Breaking out of myForEach (simulated with return)
let arrayToBreak = [1, 2, 3, 4];
let stopLoop = false;
arrayToBreak.myForEach((x) => {
  if (stopLoop) return;
  console.log("Breaking out of myForEach:", x);
  if (x === 2) stopLoop = true;
});
// Output: 1, 2
