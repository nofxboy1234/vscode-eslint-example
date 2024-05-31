/* eslint-disable */
const one = () => Promise.resolve('One!');

async function myFunc() {
  console.log('In function!');
  const res = await one();
  console.log(res);
}

console.log('Before function!');
myFunc();
console.log('After function!');
