// jasync function getValue() {}

// async function getValue() {
//   return 1;
// }

// function getValue() {
//   return new Promise((resolve, reject) => {});
// }

function getValue() {
  return new Promise((resolve, reject) => {
    resolve(1);
  });
}

(async () => {
  const promise = getValue();
  const response = await promise;
  console.log(response);
})();
