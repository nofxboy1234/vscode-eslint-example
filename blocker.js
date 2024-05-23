/* eslint-disable */
const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

const codeBlocker = () => {
  let i = 0;
  while (i < 1000000000) {
    i++;
  }

  return 'billion loops done';
};

log('Synchronous 1');

log(codeBlocker());

log('Synchronous 2');
