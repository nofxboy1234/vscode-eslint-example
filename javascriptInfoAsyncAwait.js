async function showAvatar() {
  // read our JSON
  const response = await fetch('/article/promise-chaining/user.json');
  const user = await response.json();

  // read github user
  const githubResponse = await fetch(
    `https://api.github.com/users/${user.name}`,
  );
  const githubUser = await githubResponse.json();

  // show the avatar
  const img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = 'promise-avatar-example';
  document.body.append(img);

  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

showAvatar();
