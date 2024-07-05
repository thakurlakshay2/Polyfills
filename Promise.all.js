//Promise.all - Either All promise will resolve or none will be accepted.

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 1");
  }, 2000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 2");
  }, 2000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 3");
  }, 2000);
});

let promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 4");
  }, 2000);
});

let promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("rejected 5");
  }, 2000);
});

// CASE:1
const arr = [promise1, promise2, promise3, promise4];
const arr2 = [promise1, promise2, promise3, promise4, promise5];

function myPromiseAll(promises) {
  const output = [];
  let promisesResolved = 0;
  return new Promise((resolve, reject) => {
    try {
      promises.forEach(async (promise, index) => {
        const response = await promise;
        promisesResolved += 1;
        output.push(response);
        if (promisesResolved === promises.length) {
          resolve(output);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
}

//CASE 1: ALL PROMISE SUCCESS

myPromiseAll(arr).then((res) => {
  console.log(res);
});

//CASE 2: 1 PROMISE REJECTS
myPromiseAll(arr2)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
