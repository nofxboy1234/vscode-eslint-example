/* eslint-disable */
function foo(x, y, cb) {
  ajax('http://some.url.1/?x=' + x + '&y=' + y, cb);
}

foo(11, 31, function (err, text) {
  if (err) {
    console.error(err);
  } else {
    console.log(text);
  }
});

// polyfill-safe guard check
if (!Promise.wrap) {
  Promise.wrap = function (fn) {
    return function () {
      var args = [].slice.call(arguments);

      return new Promise(function (resolve, reject) {
        fn.apply(
          null,
          args.concat(function (err, v) {
            if (err) {
              reject(err);
            } else {
              resolve(v);
            }
          }),
        );
      });
    };
  };
}
