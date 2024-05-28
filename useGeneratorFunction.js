/* eslint-disable */
function* generatorFunction() {
  const second = yield 'First';
  console.log(`second: ${second}`);
  return 'All done';
}
const genObj = generatorFunction();
console.log(genObj.next());
console.log(genObj.next('I like JavaScript'));
// console.log(genObj.next());

console.log('end');
