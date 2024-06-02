async function f() {
  const thenable = {
    then(resolve, reject) {
      reject(new Error('rejected!'));
    },
  };
  await thenable; // Throws Error: rejected!
}

f();
