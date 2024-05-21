async function hello() {
  const response = await fetch('http://no-such-url');
}

let promise;
(async () => {
  hello().catch((err) => {
    console.error(err);
  });
  // try {
  //   promise = hello();
  //   const response = await promise;
  //   console.log(response);
  // } catch (err) {
  //   console.error(err);
  // }
})();
