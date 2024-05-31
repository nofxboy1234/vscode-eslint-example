function asyncStuff() {
  console.log('async: Stuff!');
  return 'asyncStuff result';
}

function hello() {
  return new Promise((resolve, reject) => {
    console.log('sync: Starting hello promise');

    Promise.resolve()
      .then(asyncStuff)
      .then((result) => {
        console.log(result);
      });
    // queueMicrotask(asyncStuff);

    // resolve('hello promise fulfilled!');
    reject(Error('hello promise rejected!'));
  });
}

function fulfilled(result) {
  console.log(result);
}

function rejected(err) {
  console.error(err);
}

hello().then(fulfilled).catch(rejected);

console.log('end');
