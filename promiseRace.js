/* eslint-disable */
// `request(..)` is a Promise-aware Ajax utility,
// like we defined earlier in the chapter

var p1 = fetch('https://google.com/');
var p2 = fetch('https://google.com/');

Promise.race([p1, p2])
  .then(function (msg) {
    // either `p1` or `p2` will win the race
    console.log(msg);
    return fetch('https://google.com/');
  })
  .then(function (msg) {
    console.log(msg);
  });
