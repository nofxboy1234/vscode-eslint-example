/* eslint-disable */

function copyArguments(args) {
  // return [].slice.call(arguments);
  return [...args];
}

// polyfill-safe guard check
if (!Promise.wrap) {
  Promise.wrap = function (fn) {
    return function () {
      var args = copyArguments(arguments);

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

function ajax(url, cb) {
  cb(undefined, `${url} response`);
  // cb('Ajax error!', `${url} response`);
}

// function foo(x, y, cb) {
//   ajax('http://some.url.1/?x=' + x + '&y=' + y, cb);
// }

function foo(x, y) {
  return request('http://some.url.1/?x=' + x + '&y=' + y);
}

function callback(err, text) {
  if (err) {
    console.error(err);
  } else {
    console.log(text);
  }
}

var request = Promise.wrap(ajax);

// foo(11, 31, callback);
foo(11, 31)
  .then(function fulfilled(msg) {
    console.log(msg);
  })
  .catch(function rejected(err) {
    console.error(err);
  });
