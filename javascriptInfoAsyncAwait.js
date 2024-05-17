async function f() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000);
  });

  const result = await promise; // wait until the promise resolves (*)

  console.log(result); // "done!"
}

f();
