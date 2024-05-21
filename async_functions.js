function sleep(amount) {
  return new Promise((resolve, reject) => {
    if (amount <= 300) {
      reject(new Error('That is too fast, cool it down!'));
    }
    setTimeout(() => resolve(`Slept for ${amount}`), amount);
  });
}

sleep(2000)
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.error(err);
  });
