/* eslint-disable */

/*
The first promise constructor resolves, the first then handler is encountered, 
this handler is immediately added to the microtask queue. 
However, the callstack isn't empty at this point because there are more thens 
to handle. So it keeps creating Promise Reaction/Promise Object records for 
the subsequent thens and these are added to the fulfill reactions list, 
but they aren't fulfilled at this point since the first handler is still 
waiting on the microtask queue. Only when the callstack is empty would this 
resolve and add the next then's handler to the microtask queue.

https://youtu.be/Xs1EMmBLpn4?list=PLaYco3qR_dVJm_clCOg-B4KXhPsonE7hx&t=417
*/

new Promise((resolve, reject) => {
  resolve(1);
})
  .then((result) => result * 2)
  .then((result) => result * 2)
  .then((result) => console.log(result));

// async function hello() {
//   //
// }
// const p = hello();
// console.log('end');
