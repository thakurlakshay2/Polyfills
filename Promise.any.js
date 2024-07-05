const p1 = new Promise((res, rej) => setTimeout(rej, 100, "resolve 1"));
const p2 = new Promise((res, rej) => setTimeout(rej, 200, "resolve 2"));
const p3 = new Promise((res, rej) => setTimeout(res, 200, "resolve 3"));

function myPromiseAny(promiseArray) {
  let errors = [];

  return new Promise((res, rej) => {
    promiseArray.forEach((promise, index) => {
      promise
        .then((data) => {
          res(data);
        })
        .catch((err) => {
          errors[index] = err;

          if (index === promiseArray.length - 1) {
            rej(new AggregateError(errors), "All promises were rejected");
          }
        });
    });
  });
}

//CASE 1: ALL REJECTED

myPromiseAny([p1, p2])
  .then(console.log)
  .catch((err) => console.error(err.message));

//CASE 2: ANY REJECTED

myPromiseAny([p1, p3])
  .then(console.log)
  .catch((err) => console.error(err.message));
