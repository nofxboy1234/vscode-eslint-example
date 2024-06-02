async function hello() {
  const response = await Promise.reject(new Error('error!')).catch((err) => {
    console.error(err);
    return 'default response';
  });
  return response;
}

hello().then((result) => {
  console.log(result);
});
console.log('end');
