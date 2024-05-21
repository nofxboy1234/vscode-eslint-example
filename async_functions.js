function sleep(amount) {
  return new Promise((resolve, reject) => {
    if (amount <= 300) {
      reject(new Error('That is too fast, cool it down!'));
    }
    setTimeout(() => resolve(`Slept for ${amount}`), amount);
  });
}

sleep(500)
  .then((result) => {
    console.log(result);
    return sleep(1000);
  })
  .then((result) => {
    console.log(result);
    return sleep(750);
  })
  .then((result) => {
    console.log(result);
    console.log('Done!');
  })
  .catch((err) => {
    console.error(err);
  });
