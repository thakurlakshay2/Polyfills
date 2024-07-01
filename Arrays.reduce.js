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
