async function hello() {
  return Promise.reject(new Error('Whoops!'));
  // await Promise.reject(new Error('Whoops!'));
}

async function bye() {
  throw new Error('Whoops!');
}

let promise;
(async () => {
  try {
    promise = hello();
    const response = await promise;
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
