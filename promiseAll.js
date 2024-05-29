/* eslint-disable */
// `request(..)` is a Promise-aware Ajax utility,
// like we defined earlier in the chapter

var p1 = fetch('https://jsonplaceholder.typicode.com/todos/1');
var p2 = fetch('https://jsonplaceholder.typicode.com/todos/2');

Promise.all([p1, p2])
  .then(function (msgs) {
    // both `p1` and `p2` fulfill and pass in
    // their messages here
    console.log(msgs);
    return fetch('https://jsonplaceholder.typicode.com/todos/3');
  })
  .then(function (msg) {
    return msg.json();
  })
  .then((msg) => {
    console.log(msg);
  });
