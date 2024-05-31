/* eslint-disable */
function hello() {
  return new Promise((resolve, reject) => {
    fetch('https://google.com')
      // fetch('https://googleeeeeeee.com')
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

hello()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

console.log('end');

// ***************************************
// async function hello() {
//   try {
//     await fetch('https://google.com');
//     // await fetch('https://googleeeeeeee.com');
//     return result;
//   } catch (err) {
//     throw err;
//   }
// }

// hello()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// console.log('end');
