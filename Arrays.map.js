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
