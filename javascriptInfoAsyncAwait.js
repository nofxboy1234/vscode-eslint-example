async function f() {
  try {
    const response = await fetch('http://no-such-url');
  } catch (err) {
    console.error(err); // TypeError: failed to fetch
  }
}

f();
