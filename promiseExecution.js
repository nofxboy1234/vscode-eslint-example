/* eslint-disable */

// https://youtu.be/Xs1EMmBLpn4?list=PLaYco3qR_dVJm_clCOg-B4KXhPsonE7hx&t=188
const p = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Done!');
  }, 1000);
});
p.then((result) => {
  console.log(result);
});
