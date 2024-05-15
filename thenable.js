/* eslint-disable */
var o = {
  then: function () {
    console.log('then()');
  },
};

// make `v` be `[[Prototype]]`-linked to `o`
var v = Object.create(o);
v.someStuff = 'cool';
v.otherStuff = 'not so cool';

const result = v.hasOwnProperty('then'); // false
console.log(result);
v.then();

if (
  v !== null &&
  (typeof v === 'object' || typeof v === 'function') &&
  typeof v.then === 'function'
) {
  // assume it's a thenable!
  console.log('v is a thenable');
} else {
  // not a thenable
  console.log('v is not a thenable');
}
