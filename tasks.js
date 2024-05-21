function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    }
    throw new Error(response.status);
  });
}

loadJson('https://javascript.info/no-such-user.json').catch((err) => {
  console.error(err);
}); // Error: 404

// (async () => {
//   await fetch(url)
// })();
