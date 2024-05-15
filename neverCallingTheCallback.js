/* eslint-disable */
// a utility for timing out a Promise
function timeoutPromise(delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject('Timeout!');
    }, delay);
  });
}

function foo() {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    //   reject('foo rejected');
    // }, 4000);
    setTimeout(() => {
      reject('foo rejected');
    }, 2000);
    // setTimeout(() => {
    //   resolve('foo resolved');
    // }, 2000);
  });
}

// setup a timeout for `foo()`
Promise.race([
  foo(), // attempt `foo()`
  timeoutPromise(3000), // give it 3 seconds
]).then(
  function (value) {
    // `foo(..)` fulfilled in time!
    console.log(value);
  },
  function (err) {
    // either `foo()` rejected, or it just
    // didn't finish in time, so inspect
    // `err` to know which
    console.log(err);
  },
);
