/* eslint-disable */

// var fulfilledPr = Promise.resolve(42);
// var rejectedPr = Promise.reject('Oops');

var rejectedTh = {
  then: function (resolved, rejected) {
    rejected('Oops');
  },
};

// var rejectedPr = Promise.reject('Oops');
var rejectedPr = Promise.resolve(rejectedTh);
rejectedPr
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });
console.log('end');
