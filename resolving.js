/* eslint-disable */

var rejectedPr = new Promise(function (resolve, reject) {
  // resolve this promise with a rejected promise
  resolve(Promise.reject('Oops'));
});

rejectedPr.then(
  function fulfilled() {
    // never gets here
    console.log('fulfilled');
  },
  function rejected(err) {
    console.log(err); // "Oops"
  },
);
