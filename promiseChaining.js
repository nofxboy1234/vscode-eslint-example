/* eslint-disable */

/*
The first promise constructor resolves, 
the first then handler is encountered: 
  - this handler is immediately added to the microtask queue. 
However, the callstack isn't empty at this point because there are more thens 
to handle. 
So it keeps creating Promise Reaction/Promise Object records for 
the subsequent thens and these are added to the fulfill reactions list,
[inside the Promise that the .then is attached to] 
but they aren't fulfilled at this point since the first handler is still 
waiting on the microtask queue. Only when the callstack is empty would this 
resolve and add the next then's handler to the microtask queue.
*/

const p = new Promise((resolve, reject) => {
  resolve(1);
});
const p2 = p.then((result) => {
  return result * 2;
});
const p3 = p2.then((result) => {
  return result * 2;
});
const p4 = p3.then((result) => {
  console.log(result);
});
const p5 = p3.finally(() => {
  console.log('finally!');
  console.log(p4);
});

// async function hello() {
//   //
// }
// const p = hello();

console.log('end');
