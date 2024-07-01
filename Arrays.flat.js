const arr = [1, 2, 3, 4, 5, [6, 7, 8, 9, [10, 11, 12]]];

const flatten = (arr, depth = 1, output = []) => {
  if (depth <= 0) {
    output.push(...arr);
    return output;
  } else {
    for (const item of arr) {
      if (Array.isArray(item)) {
        flatten(item, depth - 1, output);
      } else {
        output.push(item);
      }
    }
  }
  return output;
};

console.log(flatten(arr, 10));
