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

// function callback(err, text) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(text);
//   }
// }

// make a promissory for `ajax(..)`
var request = Promise.wrap(ajax);

// function foo(x, y, cb) {
//   ajax('http://some.url.1/?x=' + x + '&y=' + y, cb);
// }

// refactor `foo(..)`, but keep it externally
// callback-based for compatibility with other
// parts of the code for now -- only use
// `request(..)`'s promise internally.
function foo(x, y, cb) {
  request('http://some.url.1/?x=' + x + '&y=' + y).then(function fulfilled(
    text,
  ) {
    cb(null, text);
  }, cb);
}

// function foo(x, y) {
//   return request('http://some.url.1/?x=' + x + '&y=' + y);
// }

var betterFoo = Promise.wrap(foo);

// foo(11, 31, callback);
betterFoo(11, 31)
  .then(function fulfilled(msg) {
    console.log(msg);
  })
  .catch(function rejected(err) {
    console.error(err);
  });
