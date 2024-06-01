async function test() {
  await queueMicrotask(() => {
    console.log('1');
    queueMicrotask(() => {
      console.log('2');
    });
  });

  console.log('3');
}
test();

// function asyncStuff() {
//   console.log('async: Stuff!');
//   return 'asyncStuff result';
// }

// function hello() {
//   return new Promise((resolve, reject) => {
//     console.log('sync: Starting hello promise');

//     Promise.resolve()
//       .then(asyncStuff)
//       .then((result) => {
//         console.log(result);
//         resolve('hello promise fulfilled!');
//       });
//   });
// }

// function fulfilled(result) {
//   console.log(result);
// }

// function rejected(err) {
//   console.error(err);
// }

// hello().then(fulfilled).catch(rejected);

// console.log('end');
