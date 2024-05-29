/* eslint-disable */
// `request(..)` is a Promise-aware Ajax utility,
// like we defined earlier in the chapter

var p1 = fetch('https://google.com');
var p2 = fetch('https://twitch.tv');

Promise.all([p1, p2])
  .then(function (msgs) {
    // both `p1` and `p2` fulfill and pass in
    // their messages here
    return fetch('https://amazon.com');
  })
  .then(function (msg) {
    console.log(msg);
  });