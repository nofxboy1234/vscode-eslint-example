/* eslint-disable */
const startTime = Date.now();
const log = (v) => console.log(`${v} - Elapsed: ${Date.now() - startTime}ms`);

const foo = () => log('First');
const zoo = () => setTimeout(() => log('Fourth'), 1000);
const bar = () => setTimeout(() => log('Third'), 500);
const baz = () => log('Second');

bar();
zoo();
foo();
baz();
