/* eslint-disable */
// assume an `ajax( {url}, {callback} )` utility

// Promise-aware ajax
function request(url) {
  return new Promise(function (resolve, reject) {
    // the `ajax(..)` callback should be our
    // promise's `resolve(..)` function
    ajax(url, resolve);
  });
}

request('http://some.url.1/')
  .then(function (response1) {
    return request('http://some.url.2/?v=' + response1);
  })
  .then(function (response2) {
    console.log(response2);
  });
