/* eslint-disable */

const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');

promise
  .then((res) => res.json())
  .then((user) => console.log(user.title))
  .catch((err) => console.error(err));

console.log('Synchronous');
