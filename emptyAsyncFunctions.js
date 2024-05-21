// async function getValue() {
//   return 1;
// }
// async function getValue() {}
// const getValue = async () => 1;
// const getValue = async () => {};
function getValue() {
  return new Promise((resolve, reject) => {});
}

(async () => {
  const promise = getValue();
  const response = await promise;
  console.log('Done!');
})();
