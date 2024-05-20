const server = {
  people: {
    data: [
      {
        name: 'Odin',
        age: 20,
      },
      {
        name: 'Thor',
        age: 35,
      },
      {
        name: 'Freyja',
        age: 29,
      },
    ],

    json() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(this.data);
        });
      });
    },
  },

  getPeople() {
    return new Promise((resolve) => {
      // Simulating a delayed network call to the server
      setTimeout(() => {
        resolve(this.people);
      }, 2000);
    });
  },
};

const fetchNamesWithThen = () => {
  console.log('Then: Start of function');
  server
    .getPeople()
    .then((resp) => resp.json())
    .then((data) =>
      data.forEach((name) => {
        console.log(`Then: inside forEach: ${name.name}`);
        const li = {};
      }),
    );
  console.log('Then: End of function');
};

const fetchNamesWithAwait = async () => {
  console.log('Async: Start of function');
  const response = await server.getPeople();
  console.log('Async: after first await...');
  const data = await response.json();
  console.log('Async: after second await...');

  data.forEach((name) => {
    console.log(`Then: inside forEach: ${name.name}`);
    const li = {};
  });

  console.log('Async: End of function');
};

console.log('Before fetch call');
// fetchNamesWithThen();
fetchNamesWithAwait();
console.log('After fetch call');
