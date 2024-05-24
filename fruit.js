/* eslint-disable */

const getFruit = async (name) => {
  const fruits = {
    pineapple: 'PINEAPPLE',
    peach: 'PEACH',
    strawberry: 'STRAWBERRY',
  };

  // Can use the below without `async` keyword above
  // return Promise.resolve(fruits[name]);
  return fruits[name];
};

const makeSmoothie = async () => {
  const a = await getFruit('pineapple');
  const b = await getFruit('strawberry');

  return [a, b];

  // const a = getFruit('pineapple');
  // const b = getFruit('strawberry');

  // return Promise.all([a, b]);
  // // const smoothie = await Promise.all([a, b]);
  // // return smoothie;
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

// getFruit('peach').then(console.log);
// console.log('hello');

makeSmoothie().then(console.log);
console.log('hello');

// makeSmoothie2().then(console.log);
