// Create a function without any error handling
async function asyncYolo() {
  // do something that errors out
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  const wes = await fetch('https://no.com');
}

function yolo() {
  // do something that errors out
  return new Promise((resolve, reject) => {
    new Promise((resolve, reject) => setTimeout(resolve, 3000)).then(() => {
      fetch('https://no.com')
        .then((response) => {
          if (!response.ok) {
            return reject(new Error('response was not ok!'));
            // throw new Error('response was not ok!');
          }
          console.log(`response: ${response}`);
        })
        .catch((err) => {
          reject(err);
          // throw err;
          // console.error(err);
        });
    });
  });
}

const promise = yolo();
promise
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.error(err);
  });
