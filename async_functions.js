let promise;
(async () => {
  // wait for the array of results
  const results = await Promise.all([
    fetch('http://no-such-url'),
    fetch('http://no-such-url2'),
  ]).catch((err) => {
    console.log(err);
  });

  // try {
  //   promise = hello();
  //   const response = await promise;
  //   console.log(response);
  // } catch (err) {
  //   console.error(err);
  // }
})();
