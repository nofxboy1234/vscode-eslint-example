/* eslint-disable */

// `click(..)` binds the `"click"` event to a DOM element
// `request(..)` is the previously defined Promise-aware Ajax
var p = new Promise(function (resolve, reject) {
  click('#mybtn', resolve);
});

p.then(function (evt) {
  var btnID = evt.currentTarget.id;
  return request('http://some.url.1/?id=' + btnID);
}).then(function (text) {
  console.log(text);
});
