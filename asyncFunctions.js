/* eslint-disable */

function double(number) {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve(number * 2);
    }, 2000);
  });
}

function triple(number) {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve(number * 3);
    }, 2000);
  });
}

const anArray = [3, 6, 9];

anArray.forEach(async (item) => {
  // do something asynchronously for each item in 'anArray'
  const doubled = await double(item);
  console.log(doubled);
});

const tripledArrray = anArray.map(async (item) => {
  // one could also use .map here to return an array of promises to use with 'Promise.all()'
  const tripled = await triple(item);
  return tripled;
});
console.log(tripledArrray);
Promise.all(tripledArrray).then((results) => {
  console.log(results);
});
