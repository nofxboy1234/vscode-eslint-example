/* eslint-disable */
var p = {
  then: function (cb) {
    cb(42);
  },
};

// this works OK, but only by good fortune
p.then(
  function fulfilled(val) {
    console.log(val); // 42
  },
  function rejected(err) {
    // never gets here
  },
);
