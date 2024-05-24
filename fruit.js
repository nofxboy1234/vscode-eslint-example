/* eslint-disable */
const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

const delay = async (ms) => {
  await new Promise((resolve, reject) => setTimeout(resolve, ms));
};

const getFruit = async (name) => {
  const fruits = {
    pineapple: 'PINEAPPLE',
    peach: 'PEACH',
    strawberry: 'STRAWBERRY',
  };

  await delay(1000);

  // Can use the below without `async` keyword above
  // return Promise.resolve(fruits[name]);
  return fruits[name];
};

const makeSmoothieNonConcurrent = async () => {
  const a = await getFruit('pineapple');
  const b = await getFruit('strawberry');

  return [a, b];
};

const makeSmoothieConcurrent = async () => {
  const a = getFruit('pineapple');
  const b = getFruit('strawberry');

  return Promise.all([a, b]);
  // const smoothie = await Promise.all([a, b]);
  // return smoothie;
};

const makeSmoothie2 = () => {
  let a;
  return getFruit('pineapple')
    .then((v) => {
      a = v;
      return getFruit('strawberry');
    })
    .then((v) => [a, v]);
};

const badSmoothie = async () => {
  try {
    const a = getFruit('pineapple');
    const b = getFruit('strawberry');

    const smoothie = await Promise.all([a, b]);

    throw 'broken!';

    return smoothie;
  } catch (err) {
    console.error(`catch 1: ${err}`);
    throw err;
  }
};

// getFruit('peach').then(console.log);
// console.log('hello');

// makeSmoothieConcurrent().then(log);
// makeSmoothieNonConcurrent().then(log);
console.log('hello');

// makeSmoothie2().then(console.log);

const promise = badSmoothie();
promise
  .then((result) => {
    console.log(`Successful smoothie! - ${result}`);
  })
  .catch((err) => {
    console.error(`catch 2: ${err}`);
  });
