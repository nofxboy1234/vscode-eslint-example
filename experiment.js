/* eslint-disable */
async function hello() {
  try {
    // await fetch('https://google.com');
    await fetch('https://googleeeeeeee.com')
    return 'done!';
  } catch (err) {
    throw err;
  }
}

const p = hello();
p.then((result) => {
  console.log(result);
}).catch((err) => {
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
