/* eslint-disable */
const p = new Promise((resolve) => {
  console.log(1);
  resolve(2);
});
p.then((result) => {
  console.log(result);
});

console.log(3);

// 1 3 2
