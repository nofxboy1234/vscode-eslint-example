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
  const a = await getFruit('pineapple');
  const b = await getFruit('strawberry');

  return [a, b];
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
