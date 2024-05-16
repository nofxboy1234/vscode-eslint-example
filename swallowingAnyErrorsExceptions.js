/* eslint-disable */
var p = new Promise(function (resolve, reject) {
  foo.bar(); // `foo` is not defined, so error!
  resolve(42); // never gets here :(
});

p.then(
  function fulfilled() {
    // foo.bar(); // `foo` is not defined, so error!
    throw new Error('dylan error');

    // never gets here :(
  },
  function rejected(err) {
    // `err` will be a `TypeError` exception object
    // from the `foo.bar()` line.
    console.error(err);
  },
);
