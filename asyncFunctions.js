const { setTimeout: setTimeoutPromiseBased } = require('node:timers/promises');
/* eslint-disable */

function promisifyTimeout() {
  return new Promise((resolve) => {
    // do something asynchronously and return a promise
    setTimeout(() => {
      resolve('hello');
    }, 2000);
  });
}

function promisifyLog() {
  return new Promise((resolve, reject) => {
    // do something asynchronously and return a promise
    promisifyTimeout().then((message) => {
      console.log(`message is: ${message}`);
      resolve();
    });
  });
}

const yourAsyncFunction2 = async () => {
  // do something asynchronously and return a promise
  // return await promisifyTimeout();

  // const result = await promisifyTimeout();
  // return result;

  // return promisifyTimeout();

  const promise = promisifyLog();
  try {
    await promise;
    await promise;
  } catch (error) {
    console.log(error);
  }

  // await promisifyLog();
  console.log('here');

  // promisifyLog().then(() => {
  //   console.log('here');
  // });

  // const message = await setTimeoutPromiseBased(2000, 'hello');
  // console.log(`message is: ${message}`);

  // const message = await setTimeoutPromiseBased(2000, () => {
  //   console.log('hey');
  // });
  // message();

  return promisifyTimeout();

  // setTimeout(() => {
  //   return 'hello';
  // }, 2000);
};

yourAsyncFunction2().then((result) => {
  console.log(`result is: ${result}`);
});

// const anArray = ['a', 'b', 'c'];
// anArray.forEach(async (item) => {
//   // do something asynchronously for each item in 'anArray'
//   setTimeout(() => {
//     console.log(item);
//   }, 2000);
//   // one could also use .map here to return an array of promises to use with 'Promise.all()'
// });

// server.getPeople().then(async (people) => {
//   people.forEach((person) => {
//     // do something asynchronously for each person
//   });
// });
