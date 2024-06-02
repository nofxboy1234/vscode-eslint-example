async function hello() {
  try {
    // const result = await 22;
    const result = await 'async';
    // const result = await Promise.resolve(22);
    // const result = await Promise.reject('error!');
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

hello();
console.log('sync');
