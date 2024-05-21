function doubleAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
}

doubleAfter2Seconds(10).then((r) => {
  console.log(r);
});
