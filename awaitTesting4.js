async function f() {
  const thenable = {
    then(resolve, _reject) {
      resolve('resolved!');
    },
  };
  console.log(await thenable); // "resolved!"
}

f();
