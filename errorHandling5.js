/* eslint-disable */
var p = Promise.resolve(42);

function handleErrors(err) {
  console.error(err);
}

p.then(function fulfilled(msg) {
  // numbers don't have string functions,
  // so will throw an error
  console.log(msg.toLowerCase());
}).catch(handleErrors);
