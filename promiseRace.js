/* eslint-disable */
// `request(..)` is a Promise-aware Ajax utility,
// like we defined earlier in the chapter

var p1 = fetch('https://jsonplaceholder.typicode.com/todos/1');
var p2 = fetch('https://jsonplaceholder.typicode.com/todos/2');

Promise.race([p1, p2])
  .then(function (msg) {
    // either `p1` or `p2` will win the race
    console.log(msg);
    return msg.json();
    // return fetch('https://www.theodinproject.com/');
  })
  .then(function (msg) {
    console.log(msg);
  });
