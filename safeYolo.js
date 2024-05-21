/* eslint-disable */

function handleError(fn) {
  return function (...params) {
    return fn(...params).catch(function (err) {
      // do something with the error!
      throw err;
      // console.error(`Oops!`, err);
    });
  };
}

async function fetcher() {
  throw new Error('Fetcher error!');
}

// Create a function without any error handling
async function yolo() {
  // do something that errors out
  const response = await fetcher('https://no.com');
}

const safeYolo = handleError(yolo);
const promise = safeYolo();
// const promise = yolo();

(async () => {
  try {
    const result = await promise;
    console.log(result);
  } catch (err) {
    console.error(err);
  }
})();

process.on('unhandledRejection', (error) => {
  console.error('unhandledRejection', error);
});
