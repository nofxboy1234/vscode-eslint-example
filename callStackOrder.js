/* eslint-disable */
const foo = () => console.log('First');
const zoo = () => setTimeout(() => console.log('Fourth'), 1000);
const bar = () => setTimeout(() => console.log('Third'), 500);
const baz = () => console.log('Second');

bar();
zoo();
foo();
baz();
