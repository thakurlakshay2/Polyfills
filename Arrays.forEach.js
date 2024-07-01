const arr = [1, 3, 4, 5, 5, 6];

const logger = (item, index) => {
  console.log(item, index);
};

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i);
  }
};

arr.myForEach(logger);
