function f() {
  const promise = Promise.resolve(1);
  let result = await promise;
}

f();