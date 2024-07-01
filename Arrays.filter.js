const filter = (arr, fn, output = []) => {
  arr.forEach((element) => {
    if (fn(element)) {
      output.push(element);
    }
  });
  return output;
};

const isEven = (num) => num % 2 === 0;

const arr = [1, 2, 3, 4, 5, 6, 6, 6, 9];

const evenElements = filter(arr, isEven);

console.log(evenElements);
