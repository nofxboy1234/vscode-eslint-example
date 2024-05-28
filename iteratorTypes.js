/* eslint-disable */

const array = ['✨', '💕', '🍃'];
// console.log(`array: ${array[Symbol.iterator]}`);

const string = 'I love JavaScript!';
// console.log(`string: ${string[Symbol.iterator]}`);

const object = { name: 'Lydia Hallie' };
object[Symbol.iterator] = function* () {
  // yield this;
  // yield* Object.keys(this);
  yield Object.keys(this);
};
// console.log(`object: ${object[Symbol.iterator]}`);
const result = [...object]; // [['name']]
const item = result[0]; // ['name']
const str = item[0]; // 'name'
console.log('hello');
// console.log([...object]);
// for (let item of object) {
//   console.log(item);
// }

function regularFunction() {
  return 'I am a basic function';
}
// console.log(`regularFunction: ${regularFunction[Symbol.iterator]}`);

function* generatorFunction() {
  return 'I am a generator function';
}

const generatorObject = generatorFunction();
// console.log(`generatorObject: ${array[Symbol.iterator]}`);

const emojis = ['a', 'b'];
function* genFunc() {
  yield 'c';
  yield* emojis;
  // yield emojis;
  yield 'd';
}
const genObj = genFunc();
console.log([...genObj]);

console.log('end');
