/* eslint-disable */

// const randomResponse = async () => {
//   // await '';
//   // return 22;
//   // throw new Error('Error!');
//   // let message = '';
//   // const num = Math.floor(Math.random() * 10) + 1;
//   // if (num < 5) {
//   //   message = 'You guessed correctly!';
//   //   // message = await 'You guessed correctly!';
//   //   console.log(message);
//   // } else {
//   //   message = 'Better luck next time...';
//   //   // message = await 'Better luck next time...';
//   //   console.log(message);
//   // }
// };

const randomResponse = () =>
  new Promise((resolve, reject) => {
    let message = '';
    const num = Math.floor(Math.random() * 10) + 1;
    if (num < 5) {
      message = 'You guessed correctly!';
      console.log(message);
    } else {
      message = 'Better luck next time...';
      console.log(message);
    }
  });

// const promise = randomResponse();
// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

(async () => {
  try {
    const promise = randomResponse();
    const result = await promise;
    
    console.log(result);
  } catch (err) {
    console.error(err);
  }
})();
