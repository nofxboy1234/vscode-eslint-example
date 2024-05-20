async function hello() {
  await Promise.reject(new Error('Whoops!'));
}

async function goodbye() {
  throw new Error('Whoops!');
}

hello().catch((error) => {
  console.log(error);
});
