function asyncStuff() {
  console.log('async: Stuff!');
}

function hello() {
  return new Promise((resolve, reject) => {
    console.log('sync: Starting hello promise');
    queueMicrotask(asyncStuff);

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
