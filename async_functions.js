const fetcher = async function fetcher(url) {
  await new Promise((resolve, reject) => setTimeout(resolve, 2000));
  const response = {
    async json() {
      return url;
    },
  };
  return response;
};

(async () => {
  const response = await fetcher('/article/promise-chaining/user.json');
  const user = await response.json();
  console.log(user);
})();
