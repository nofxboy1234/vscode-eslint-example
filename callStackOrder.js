/* eslint-disable */
const startTime = Date.now();
const log = (v) => console.log(`${v}: ${Date.now() - startTime}ms`);

const blocker = () => {
  let i = 0;
  while (i < 1000000000) {
    i++;
  }
};

const foo = () => log('foo');

const zoo = () => {
  log('Start of zoo timer');
  setTimeout(() => log('End of zoo timer'), 2000);
};

const bar = () => {
  log('Start of bar timer');
  setTimeout(() => log('End of bar timer'), 500);
};

const baz = () => log('baz');

(async () => {
  bar();
  zoo();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  foo();
  baz();
})();
// blocker();
