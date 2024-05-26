/* eslint-disable */
const startTime = Date.now();
const log = (v) => console.log(`${v}: ${Date.now() - startTime}ms`);

const foo = () => log('First');
const bar = () => setTimeout(() => log('Second'), 500);
const baz = () => log('Third');

bar();
foo();
baz();
