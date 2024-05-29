/* eslint-disable */
var p = Promise.reject('Oops');

p.then(
  function fulfilled() {
    // never gets here
  },
  function rejected(err) {
    console.log(err); // "Oops"
  },
);
