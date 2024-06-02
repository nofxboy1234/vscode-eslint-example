async function lastAsyncTask() {
  await null; // Promise.resolve().then()
  // Asynchronously throw an error:
  throw new Error('failed');
}

async function noAwait() {
  // Some actions...

  // return await lastAsyncTask();
  return /* await */ lastAsyncTask();
}

noAwait();

// Error: failed
//    at lastAsyncTask
