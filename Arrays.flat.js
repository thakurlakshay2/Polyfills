Array.prototype.myFlat = function (depth = 1) {
  //RECURSIVE APPROACH
  const output = [];

  if (depth <= 0) {
    output.push(...this);
    return output;
  } else {
    this.forEach((item) => {
      if (Array.isArray(item) && depth > 0) {
        output.push(...item.myFlat(depth - 1));
      } else {
        output.push(item);
      }
    });

    return output;
  }
};

Array.prototype.myFlat = function () {
  //Iterative APPROACH
  const output = [];

  Array.prototype.myFlat = function (depth = 1) {
    //RECURSIVE APPROACH
    const output = [];

    if (depth <= 0) {
      output.push(...this);
      return output;
    } else {
      this.forEach((item) => {
        if (Array.isArray(item) && depth > 0) {
          output.push(...item.myFlat(depth - 1));
        } else {
          output.push(item);
        }
      });

      return output;
    }
  };
};

const arr = [1, 2, 3, 4, 5, [6, 7, 8, 9, [10, 11, 12]]];

console.log(arr.myFlat(10));

//----------------------- EDGE CASES --------------------------//

// Edge Case 1: Empty Array
let emptyArray = [];
let result = emptyArray.myFlat();
console.log("Empty array:", result); // Output: []

// Edge Case 2: Already Flat Array
let alreadyFlatArray = [1, 2, 3];
result = alreadyFlatArray.myFlat();
console.log("Already flat array:", result); // Output: [1, 2, 3]

// Edge Case 3: Single Nested Array
let singleNestedArray = [[1, 2, 3]];
result = singleNestedArray.myFlat();
console.log("Single nested array:", result); // Output: [1, 2, 3]

// Edge Case 4: Multiple Levels of Nesting
let multiNestedArray = [1, [2, [3, [4]]]];
result = multiNestedArray.myFlat();
console.log("Multiple levels of nesting:", result); // Output: [1, 2, [3, [4]]]

// Edge Case 5: Custom Depth Flattening
result = multiNestedArray.myFlat(2);
console.log("Multiple levels of nesting with depth 2:", result); // Output: [1, 2, 3, [4]]

// Edge Case 6: Infinite Depth Flattening
result = multiNestedArray.myFlat(Infinity);
console.log("Multiple levels of nesting with depth Infinity:", result); // Output: [1, 2, 3, 4]

// Edge Case 7: Array with Null or Undefined Values
let arrayWithNulls = [1, null, [2, undefined, [3]]];
result = arrayWithNulls.myFlat();
console.log("Array with null or undefined values:", result); // Output: [1, null, 2, undefined, [3]]

// Edge Case 8: Array with Empty Subarrays
let arrayWithEmptySubarrays = [1, [], [2, [], [3]]];
result = arrayWithEmptySubarrays.myFlat();
console.log("Array with empty subarrays:", result); // Output: [1, 2, [3]]

// Edge Case 9: Nested Empty Arrays
let nestedEmptyArrays = [[[]]];
result = nestedEmptyArrays.myFlat(Infinity);
console.log("Nested empty arrays:", result); // Output: []

// Edge Case 10: Array with Non-Array Elements
let mixedArray = [1, "two", [3, true], [null, [undefined]]];
result = mixedArray.myFlat(2);
console.log("Array with non-array elements:", result); // Output: [1, "two", 3, true, null, undefined]

// Edge Case 11: Arrays with Objects
let objectsArray = [{ x: 1 }, [{ x: 2 }]];
result = objectsArray.myFlat();
console.log("Arrays with objects:", result); // Output: [{ x: 1 }, { x: 2 }]

// Edge Case 12: Flat with Large Depth
let largeDepthArray = [1, [2, [3, [4, [5]]]]];
result = largeDepthArray.myFlat(10);
console.log("Large depth array:", result); // Output: [1, 2, 3, 4, 5]

// Edge Case 13: Flat on Sparse Arrays
let sparseArray = [1, , [3, , [5]]];
result = sparseArray.myFlat();
console.log("Sparse array:", result); // Output: [1, 3, , [5, ]]

// Edge Case 14: Flat on Typed Arrays
let typedArray = [new Int16Array([1, 2]), new Uint8Array([3, 4])];
result = typedArray.myFlat();
console.log("Typed arrays:", result); // Output: [Int16Array [1, 2], Uint8Array [3, 4]]

// Edge Case 15: Flat on Arrays with Custom Flattening
let customFlatteningArray = [1, [2, [3, [4, [5]]]]];
Array.prototype.customFlat = function (depth = 1) {
  return this.reduce(
    (acc, val) =>
      acc.concat(
        Array.isArray(val) && depth > 1 ? val.customFlat(depth - 1) : val
      ),
    []
  );
};
result = customFlatteningArray.customFlat(2);
console.log("Custom flattening function with depth 2:", result); // Output: [1, 2, 3, [4, [5]]]
