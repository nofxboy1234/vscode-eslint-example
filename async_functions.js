async function f() {
  // return 1;
  return Promise.resolve(1);
}

f().then(console.log);
