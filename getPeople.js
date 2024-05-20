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

// getPersonsInfo('Odin').then((message) => {
//   console.log(message);
// });
// getPersonsInfo('Dylan').then((message) => {
//   console.log(message);
// });

// getPersonsInfo2('Odin').then((message) => {
//   console.log(message);
// });
// getPersonsInfo2('Dylan').then((message) => {
//   console.log(message);
// });

function uppercase(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name.toUpperCase());
    }, 2000);
  });
}

server.getPeople().then(async (people) => {
  uppercase('aaa').then((upperCased) => {
    console.log(upperCased);
  });

  const result = await uppercase('bbb');
  console.log(result);

  people.forEach((person) => {
    uppercase(person.name).then((upperCased) => {
      console.log(upperCased);
    });
    // const upperCased = await uppercase(person.name);
    // console.log(upperCased);
  });
});

/*
wait 2 seconds
wait 2 seconds
AAA
BBB
wait 2 seconds
ODIN
THOR
FREYJA
*/