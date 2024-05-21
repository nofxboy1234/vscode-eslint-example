// async function getValue() {}

// async function getValue() {
//   return undefined;
// }

// const getValue = async () => undefined;

// const getValue = async () => {};

// async function getValue() {
//   return 1;
// }

// async function getValue() {
//   throw new Error('promise failed');
// }

// function getValue() {
//   return new Promise((resolve, reject) => {});
// }

// function getValue() {
//   return new Promise((resolve, reject) => {
//     resolve(undefined);
//   });
// }

// function getValue() {
//   return new Promise((resolve, reject) => {
//     resolve(1);
//   });
// }

function getValue() {
  return new Promise((resolve, reject) => {
    reject(new Error('promise failed!'));
  });
}

let promise;
(async () => {
  try {
    promise = getValue();
    const response = await promise;
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
