/* eslint-disable */

// https://youtu.be/Xs1EMmBLpn4?list=PLaYco3qR_dVJm_clCOg-B4KXhPsonE7hx&t=417
const p = new Promise((resolve) => {
  console.log(1);
  resolve(2);
});
p.then((result) => {
  console.log(result);
});

console.log(3);

// 1 3 2
