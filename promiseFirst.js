/* eslint-disable */
// polyfill-safe guard check
if (!Promise.first) {
  Promise.first = function (prs) {
    return new Promise(function (resolve, reject) {
      // loop through all promises
      prs.forEach(function (pr) {
        // normalize the value
        Promise.resolve(pr)
          // whichever one fulfills first wins, and
          // gets to resolve the main promise
          .then(resolve);
      });
    });
  };
}

function foo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo() won the race!');
    }, 2000);
  });
}

function bar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('bar() won the race!');
    }, 1000);
  });
}

Promise.first([foo(), bar()]).then((result) => {
// Promise.first([3, 4]).then((result) => {
  console.log(result);
});
