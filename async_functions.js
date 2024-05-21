// Create a function without any error handling
async function yolo() {
  // do something that errors out
  const wes = await fetch('https://no.com');
}

yolo()
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.error(err);
  });
