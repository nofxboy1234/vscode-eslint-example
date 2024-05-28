/* eslint-disable */

const array = ['✨', '💕', '🍃'];
// console.log(`array: ${array[Symbol.iterator]}`);

const string = 'I love JavaScript!';
// console.log(`string: ${string[Symbol.iterator]}`);

const object = { name: 'Lydia Hallie' };
object[Symbol.iterator] = function* () {
  yield this;
};
// console.log(`object: ${object[Symbol.iterator]}`);
// console.log([...object]);
for (let item of object) {
  console.log(item);
}

function regularFunction() {
  return 'I am a basic function';
}
// console.log(`regularFunction: ${regularFunction[Symbol.iterator]}`);

function* generatorFunction() {
  return 'I am a generator function';
}

const generatorObject = generatorFunction();
// console.log(`generatorObject: ${array[Symbol.iterator]}`);

console.log('end');
