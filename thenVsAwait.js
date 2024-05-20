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
  console.log('Then: Start on 6');
  server
    .getPeople()
    .then((resp) => resp.json())
    .then((data) =>
      data.forEach((name) => {
        console.log(
          `Then: inside the last .then on 10 and inside forEach: ${name.name}`,
        );
        const li = {};
        li.textContent = name.name;
        const container = {};
      }),
    );
  console.log('Then: End on 16');
};

const fetchNamesWithAwait = async () => {
  console.log('Async: Start on 20');
  const response = await server.getPeople();
  console.log('Async: after first await...');
  const data = await response.json();
  console.log('Async: after second await...');

  data.forEach((name) => {
    console.log(`Async: after second await and inside forEach: ${name.name}`);
    const li = {};
    li.textContent = name.name;
    const container = {};
  });

  console.log('Async...end of function');
};

console.log('Before fetch call');
// fetchNamesWithThen();
fetchNamesWithAwait()
console.log('After fetch call');
