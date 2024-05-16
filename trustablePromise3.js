/* eslnt-disable */
const p = {
  then(cb, errcb) {
    cb(42);
    errcb('evil laugh');
  },
};

p.then(
  (val) => {
    console.log(val); // 42
  },
  (err) => {
    // oops, shouldn't have run
    console.log(err); // evil laugh
  },
);
