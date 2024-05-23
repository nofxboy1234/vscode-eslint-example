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

getFruit('peach').then(console.log);
