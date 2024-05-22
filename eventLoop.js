/* eslint-disable */
// async function timer() {
//   await new Promise((resolve) => setTimeout(resolve, 3000));
//   return 'Done!';
// }

// timer().then((message) => {
//   console.log(message);
// });

// console.log('Carrying on!');
// setTimeout(console.log, 3000, 'hello');
// console.log('End!');

// Promises use microtasks
// Promise.resolve().then(() => console.log('Hey!'));
// console.log('Yo!');

// setTimeout(function timeout() {
//   console.log('hi1');
// }, 1000);

// setTimeout(function timeout() {
//   console.log('hi2');
// }, 1000);

// setTimeout(function timeout() {
//   console.log('hi3');
// }, 1000);

// setTimeout(function timeout() {
//   console.log('hi4');
// }, 1000);

// Synchronous
[1, 2, 3, 4].forEach(function (i) {
  console.log(`Sync log: ${i}`);
});

// Asynchronous
const outerMessage = 'Hello, ';

function asyncForEach(array, cb) {
  array.forEach(async function (i) {
    await Promise.resolve(); // Causes function to be deferred - executes once call stack is empty
    const message = 'Async log:';
    console.log(`${outerMessage}${message}`);
    cb(i);
  });
}

function asyncForEachUsingSetTimeout(array, cb) {
  array.forEach(function (i) {
    setTimeout(
      (message) => {
        console.log(`${outerMessage}${message}`);
        cb(i);
      },
      0,
      'Async log:',
    );
  });
}

asyncForEach([1, 2, 3, 4], function (i) {
  console.log(i);
});

console.log('end');
