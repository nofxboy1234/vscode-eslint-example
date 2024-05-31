/* eslint-disable */
async function hello() {
  try {
    await fetch('https://google.com');
    // await fetch('https://googleeeeeeee.com');
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

// *************************

function bye() {
  return new Promise((resolve, reject) => {
    fetch('https://google.com')
    // fetch('https://googleeeeeeee.com')
      .then((result) => {
        resolve('done!');
      })
      .catch((err) => {
        reject(err);
      });
  });
}

const p2 = bye();
p2.then((result) => {
  console.log(result);
}).catch((err) => {
  console.error(err);
});

console.log('end');
