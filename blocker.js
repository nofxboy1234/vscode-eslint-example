/* eslint-disable */
const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

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
  //   let i = 0;
  //   while (i < 1000000000) {
  //     i++;
  //   }
  //   // Only the resolving of the value that happens as a micro task
  //   resolve('billion loops done');
  // });

  // Async non-blocking
  return Promise.resolve().then((v) => {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    return 'billion loops done';
  });
};

log('Synchronous 1');

// log(codeBlocker());
codeBlocker().then((result) => {
  log(result);
});

log('Synchronous 2');
