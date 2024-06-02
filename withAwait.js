async function lastAsyncTask() {
  await null;
  throw new Error('failed');
}

async function withAwait() {
  return await lastAsyncTask();
}

withAwait().catch((err) => {
  console.error(err);
});
// withAwait();

// Error: failed
//    at lastAsyncTask
//    at async withAwait
