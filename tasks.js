class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    }
    throw new HttpError(response);
  });
}

// Ask for a user name until github returns a valid user
function demoGithubUser() {
  const name = prompt('Enter a name?', 'iliakan');

  return loadJson(`https://api.github.com/users/${name}`)
    .then((user) => {
      console.log(`Full name: ${user.name}.`);
      return user;
    })
    .catch((err) => {
      if (err instanceof HttpError && err.response.status == 404) {
        console.log('No such user, please reenter.');
        return demoGithubUser();
      }
      throw err;
    });
}

demoGithubUser();
