const doStuff = async () => 22;
// const doStuff = async () => {
//   throw new Error('goodbye error!');
// };

const fetcher = async function fetcher(url) {
  try {
    const value1 = await doStuff();
    console.log(`value1: ${value1}`);
    const value2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('timed out');
        resolve(19);
        // return 19; - does not work
        // reject(new Error('hello error!'));
        // throw new 0Error('hello error!'); - does not work
      }, 2000);
    });
    console.log(`value2: ${value2}`);
  } catch (error) {
    console.error(error);
  }
  const response = {
    async json() {
      return url;
    },
  };
  return response;
};

(async () => {
  const response = await fetcher('/article/promise-chaining/user.json');
  const user = await response.json();
  console.log(user);
})();
