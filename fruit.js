/* eslint-disable */

const getFruit = async (name) => {
  const fruits = {
    pineapple: 'PINEAPPLE',
    peach: 'PEACH',
    strawberry: 'STRAWBERRY',
  };

  return Promise.resolve(fruits[name]);
  // return fruits[name];
};

const makeSmoothie = async () => {
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

getFruit('peach').then(console.log);
makeSmoothie().then(console.log);
makeSmoothie2().then(console.log);
