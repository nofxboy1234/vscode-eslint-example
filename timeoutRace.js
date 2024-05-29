/* eslint-disable */
// `foo()` is a Promise-aware function
function foo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo() won the race!');
    }, 2000);
  });
}

// `timeoutPromise(..)`, defined ealier, returns
// a Promise that rejects after a specified delay
// a utility for timing out a Promise
function timeoutPromise(delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject('Timeout!');
    }, delay);
  });
}

// setup a timeout for `foo()`
Promise.race([
  foo(), // attempt `foo()`
  timeoutPromise(1000), // give it 3 seconds
])
  .then(
    function (result) {
      // `foo(..)` fulfilled in time!
      console.log(result);
    },
    function (err) {
      // either `foo()` rejected, or it just
      // didn't finish in time, so inspect
      // `err` to know which
      console.error(err);
    },
  )
  .finally(() => {
    console.log('Race completed!');
  });
