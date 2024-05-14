/* eslint-disable */
function foo(x) {
  // start doing something that could take a while

  // construct and return a promise
  return new Promise(function (resolve, reject) {
    // eventually, call `resolve(..)` or `reject(..)`,
    // which are the resolution callbacks for
    // the promise.
    setTimeout(() => {
      console.log('hello');
      resolve(x);
    }, 2000);
  });
}

var p = foo(42);

bar(p);

// baz(p);

function bar(fooPromise) {
  // listen for `foo(..)` to complete
  fooPromise.then(
    function (value) {
      // `foo(..)` has now finished, so
      // do `bar(..)`'s task
      console.log(`bar task using value: ${value}`);
    },
    function () {
      // oops, something went wrong in `foo(..)`
    },
  );
}

// ditto for `baz(..)`
