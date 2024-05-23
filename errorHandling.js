/* eslint-disable */
function foo() {
  setTimeout(function () {
    baz.bar();
  }, 100);
}

try {
  foo();
  // later throws global error from `baz.bar()`
} catch (err) {
  // never gets here
  console.error(err);
}
