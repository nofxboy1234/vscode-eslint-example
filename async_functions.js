async function hello() {
  try {
    const response = await fetch('http://no-such-url');
  } catch (err) {
    console.error(err);
  }
}

hello();
