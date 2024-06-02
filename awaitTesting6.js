async function hello() {
  await undefined;
  console.log('hello');
}

function hello() {
  // const p = Promise.resolve();
  // console.log(p);
  // p.then(() => console.log('hello'));

  Promise.resolve().then(() => console.log('hello'));
}

hello();
console.log('end');
