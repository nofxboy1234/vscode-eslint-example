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

  return getY(x).then(function (y) {
    // wrap both values into container
    return [x, y];
  });
}

foo(10, 20).then(function (msgs) {
  var x = msgs[0];
  var y = msgs[1];

  console.log(x, y); // 200 599
});
