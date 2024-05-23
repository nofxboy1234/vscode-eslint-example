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

async function double(item) {
  return item * 2;
}

// Asynchronous
const outerMessage = 'Hello, ';

function asyncForEach(array, cb) {
  array.forEach(async function (item) {
    
    // do something asynchronously for each item in 'array'
    // one could also use .map here to return an array of promises to use with 'Promise.all()'
    await Promise.resolve(); // Causes function to be deferred - executes once call stack is empty
    // const doubledItem = await double(item);
    cb([item, item * 2]);
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

asyncForEach([1, 2, 3, 4], function ([item, doubledItem]) {
  const message = 'Async log:';
  console.log(`${outerMessage}${message} ${item}`);

  console.log(doubledItem);
});

console.log('end');
