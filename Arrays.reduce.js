const add = (acc, curr) => acc + curr;

const reduce = (arr, callBack, init = 0) => {
  let res = init;
  arr.forEach((item) => {
    res = callBack(res, item);
  });
  return res;
};

const arr = [1, 2, 3, 4, 5];

console.log(reduce(arr, add, 0));

//-----------------------Edge Cases------------------------//

// case 1: Empty Array ---

const edgeCase1 = [];

console.log(reduce(edgeCase1, add, 0));

// case 2: Array with One Element ---

const edgeCase2 = [2];

console.log(reduce(edgeCase2, add, 0));

// case 3:  Array with Negative Numbers ---

const edgeCase3 = [-2, -4, -8, -32];

console.log(reduce(edgeCase3, add, 0));

// case 4: Array With Zeros ---

const edgeCase4 = [0, 2, 4, 3, 7];

console.log(reduce(edgeCase4, add, 0));

// case 5: Array With Duplicates ---

const edgeCases5 = [1, 2, 2, 3];

console.log(reduce(edgeCases5, add, 0));

//case 6:  Floating Point Precision ---

const edgeCases6 = [0.1, 0.2, 0.4];

console.log(reduce(edgeCases6, add, 0));

//case 7: Complex Objects ---

const complexAdd = (acc, curr) => acc + curr.x;

const edgeCases7 = [{ x: 1 }, { x: 2 }, { x: 3 }];

console.log(reduce(edgeCases7, complexAdd, 0));

//case 8: Array with Large Integers ---

const edgeCases8 = [Number.MAX_SAFE_INTEGER, 1];

console.log(reduce(edgeCases8, add, 0));

//case 9: Array with NULL and undefiend; ---

const edgeCases9 = [1, null, 2, undefined, 3];

console.log(reduce(edgeCases9, add, 0)); //NaN comes here due to not handling null cases in "add" function
