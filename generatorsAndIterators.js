/* eslint-disable */
// function normalFunction() {
//   console.log('I am the coolest function!');
//   console.log('There is no way of stopping me');
//   console.log('Oh boi we are still going');
//   console.log('Okay finally all done now');
// }

// normalFunction();

function* genFunc() {
  yield 'stars';
  console.log('First log!');
  yield 'hearts';
  console.log('Second log');
  return 'Done';
}
const genObj = genFunc();

// console.log([...genObj]);

console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());

console.log('end');
