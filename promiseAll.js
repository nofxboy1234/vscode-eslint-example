/* eslint-disable */
// `request(..)` is a Promise-aware Ajax utility,
// like we defined earlier in the chapter

var p1 = fetch('https://www.google.com/');
var p2 = fetch('https://www.google.com/');

Promise.all([p1, p2])
  .then(function (msgs) {
    // both `p1` and `p2` fulfill and pass in
    // their messages here
    console.log(msgs);
    return fetch('https://www.google.com/');
  })
  .then(function (msg) {
    console.log(msg);
  });
