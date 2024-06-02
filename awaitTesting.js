const aThenable = {
  then(onFulfilled, onRejected) {
    onFulfilled({
      // The thenable is fulfilled with another thenable
      then(onFulfilled, onRejected) {
        onFulfilled(42);
      },
    });
  },
};

const p = Promise.resolve(aThenable); // A promise fulfilled with 42
p.then((result) => {
  console.log(result);
}).then(() => {
  console.log(p);
  console.log('all thens done');
});
console.log('end');
