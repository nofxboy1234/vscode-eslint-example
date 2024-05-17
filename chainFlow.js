/* eslint-disable */
var p = Promise.resolve(21);

p.then(function (v) {
  console.log(v); // 21

  // create a promise and return it
  return new Promise(function (resolve, reject) {
    // fulfill with value `42`
    resolve(v * 2);
  });
}).then(function (v) {
  console.log(v); // 42
});
