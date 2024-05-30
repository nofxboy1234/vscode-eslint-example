/* eslint-disable */
function timeoutPromise(delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject('Timeout!');
    }, delay);
  });
}

function doSomething(msg) {
  console.log(msg);
}

function handleError(err) {
  console.error(err);
}

var OK = true;

// var p = foo(42);
// var p = Promise.resolve(42);
var p = new Promise((resolve) => setTimeout(() => resolve(19), 4000));

Promise.race([
  p,
  timeoutPromise(3000).catch(function (err) {
    OK = false;
    throw err;
  }),
]).then(doSomething, handleError);

p.then(function () {
  if (OK) {
    // only happens if no timeout! :)
    console.log('only happens if not timeout! :)');
  }
});
