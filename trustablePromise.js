/* eslint-disable */
// var p1 = new Promise(function (resolve, reject) {
//   resolve(42);
// });

// var p2 = Promise.resolve(42);

var p1 = Promise.resolve(42);

var p2 = Promise.resolve(p1);

console.log(p1 === p2); // true
