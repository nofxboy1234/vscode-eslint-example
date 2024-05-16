/* eslint-disable */
var p = new Promise(function (resolve, reject) {
  resolve(42);
});

p.then(
  function fulfilled(msg) {
    foo.bar();
    console.log(msg); // never gets here :(
  },
  function rejected(err) {
    // never gets here either :(
    console.error(err);
  },
)
  .then(function fulfilled(msg) {
    console.log('hello');
  })
  .catch(function rejected(err) {
    console.error(err);
  });
