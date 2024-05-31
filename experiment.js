/* eslint-disable */
function hello() {
  return new Promise((resolve, reject) => {
    fetch('https://skjdfhdskjaf.com').catch((err) => {
      reject(err);
    });
  });
}

hello()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

console.log('end');
