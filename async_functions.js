async function hello() {
  try {
    const response = await fetch('/no-user-here');
    const user = await response.json();
  } catch (err) {
    // catches errors both in fetch and response.json
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
