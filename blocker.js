/* eslint-disable */
const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

const hello = async function hello() {
  console.log('sync hello!');
};

const codeBlocker = () => {
  // Sync Blocking
  // let i = 0;
  // while (i < 1000000000) {
  //   i++;
  // }
  // return 'billion loops done';

  // Async blocking
  // Creation of Promise and its internal While-loop are still happening on the main thread
  // return new Promise((resolve, reject) => {
  //   hello().then(() => console.log('async bye!'));
  //   let i = 0;
  //   while (i < 1000000000) {
  //     i++;
  //   }
  //   console.log('sync code');

  //   // Only the resolving of the value that happens as a micro task
  //   resolve('billion loops done');
  // });

  // Async non-blocking
  console.log('sync code');
  return Promise.resolve().then((v) => {
    console.log('\nasync code 1');
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    console.log('big while loop complete')
    return 'billion loops done';
  });
};

log('Synchronous 1');

// log(codeBlocker());
const promise = codeBlocker();
promise.then((result) => {
  console.log('\nasync code 2');
  log(result);
});

log('Synchronous 2');
