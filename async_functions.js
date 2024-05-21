async function hello() {
  try {
    const response = await fetch('http://no-such-url');
  } catch (err) {
    console.error(err);
  }
}

let promise;
(async () => {
  hello();
  // try {
  //   promise = hello();
  //   const response = await promise;
  //   console.log(response);
  // } catch (err) {
  //   console.error(err);
  // }
})();
