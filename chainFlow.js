/* eslint-disable */
var p = Promise.resolve(21);

p.then(function (v) {
  console.log(v); // 21

  // fulfill the chained promise with value `42`
  return v * 2;
})
  // here's the chained promise
  .then(function (v) {
    console.log(v); // 42
  });
