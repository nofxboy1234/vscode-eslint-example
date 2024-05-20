class Waiter {
  async wait() {
    return await Promise.resolve(1);
  }
}

new Waiter().wait().then(console.log);
// new Waiter().wait().then((result) => console.log(result));
