function hello() {
  return new Promise((resolve, reject) => {
    console.log('Starting hello promise');
    // resolve('hello promise fulfilled!');
    reject('hello promise rejected!')
  });
}

function fulfilled(result) {
  console.log(result);
}

function rejected(err) {
  console.error(err);
}

hello().then(fulfilled).catch(rejected);
