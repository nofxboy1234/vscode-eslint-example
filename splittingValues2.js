/* eslint-disable */
function getY(x) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(3 * x - 1);
    }, 100);
  });
}

function foo(bar, baz) {
  var x = bar * baz;

  // return both promises
  return [Promise.resolve(x), getY(x)];
}

Promise.all(foo(10, 20)).then(function (msgs) {
  var x = msgs[0];
  var y = msgs[1];

  console.log(x, y);
});

function spread(fn) {
  return Function.apply.bind(fn, null);
}

Promise.all(foo(10, 20)).then(
  spread(function (x, y) {
    console.log(x, y); // 200 599
  }),
);

Promise.all(foo(10, 20)).then(function ([x, y]) {
  console.log(x, y);
});
