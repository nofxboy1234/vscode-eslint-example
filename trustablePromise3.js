/* eslint-disable */
const p = {
  then(cb, errcb) {
    cb(42);
    // errcb('evil laugh');
  },
};

Promise.resolve(p).then(
  function fulfilled(val) {
    console.log(val); // 42
  },
  function rejected(err) {
    console.error(err);
  },
);
