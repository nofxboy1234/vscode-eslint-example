/* eslint-disable */
// assume an `ajax( {url}, {callback} )` utility

// Promise-aware ajax
function request(url) {
  return new Promise(function (resolve, reject) {
    // the `ajax(..)` callback should be our
    // promise's `resolve(..)` function

    // ajax(url, resolve);
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

// step 1:
request('http://some.url.1/')
  // step 2:
  .then(function (response1) {
    foo.bar(); // undefined, error!

    // never gets here
    return request('http://some.url.2/?v=' + response1);
  })

  // step 3:
  .then(
    function fulfilled(response2) {
      // never gets here
    },
    // rejection handler to catch the error
    function rejected(err) {
      console.log(err); // `TypeError` from `foo.bar()` error
      return 42;
    },
  )

  // step 4:
  .then(function (msg) {
    console.log(msg); // 42
  });
