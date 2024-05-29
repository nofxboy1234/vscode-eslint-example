/* eslint-disable */
var p = Promise.resolve(42);

p.then(
  function fulfilled(msg) {
    // numbers don't have string functions,
    // so will throw an error
    console.log(msg.toLowerCase());
  },
  function rejected(err) {
    // never gets here
    console.error(err);
  },
);
