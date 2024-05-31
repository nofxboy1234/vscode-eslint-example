/* eslint-disable */
function hello() {
  return new Promise((resolve, reject) => {
    fetch('https://skjdfhdskjaf.com').catch((err) => {
      // console.error(err);
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
