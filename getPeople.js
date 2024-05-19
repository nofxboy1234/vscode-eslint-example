const server = {
  people: [
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

  getPeople() {
    return new Promise((resolve) => {
      // Simulating a delayed network call to the server
      setTimeout(() => {
        resolve(this.people);
      }, 2000);
    });
  },
};

function getPersonsInfo(name) {
  return server
    .getPeople()
    .then((people) => people.find((person) => person.name === name));
}

async function getPersonsInfo2(name) {
  const people = await server.getPeople();
  const foundPerson = people.find((person) => person.name === name);
  return foundPerson;
}

getPersonsInfo('Odin').then((message) => {
  console.log(message);
});
getPersonsInfo('Dylan').then((message) => {
  console.log(message);
});

getPersonsInfo2('Odin').then((message) => {
  console.log(message);
});
getPersonsInfo2('Dylan').then((message) => {
  console.log(message);
});

