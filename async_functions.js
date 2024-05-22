const randomResponse = async () => {
  let message = '';
  const num = Math.floor(Math.random() * 10) + 1;
  if (num < 5) {
    message = await 'You guessed correctly!';
    console.log(message);
  } else {
    message = await 'Better luck next time...';
    console.log(message);
  }
};

randomResponse();
