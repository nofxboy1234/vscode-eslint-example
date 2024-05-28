/* eslint-disable */
const bookClubs = [
  {
    name: 'The Cool Club',
    clubMembers: [
      {
        name: 'John Doe',
        books: [
          { id: 'hs891', tite: 'A Perfect' },
          { id: 'ey812', title: 'A Good Book' },
        ],
      },
    ],
  },
  {
    name: 'The Better Club',
    clubMembers: [
      {
        name: 'Jane Doe',
        books: [
          { id: 'u8291', tite: 'A Great Book' },
          { id: 'p9201', title: 'A Nice Book' },
        ],
      },
    ],
  },
];

function* iterateBooks(books) {
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    yield book;
  }
}

function* iterateMembers(members) {
  for (let i = 0; i < members.length; i++) {
    const clubMember = members[i];
    yield* iterateBooks(clubMember.books);
  }
}

function* iterateBookClubs(clubs) {
  for (let i = 0; i < clubs.length; i++) {
    const bookClub = clubs[i];
    yield* iterateMembers(bookClub.clubMembers);
  }
}

const it = iterateBookClubs(bookClubs);
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

function findBook(id) {
  const genObj = iterateBookClubs(bookClubs);
  let result = genObj.next();

  while (!result.done) {
    if (result.value.id === id) {
      return result.value;
    } else {
      result = genObj.next();
    }
  }
}

const foundBook = findBook('ey812');
// const foundBook = findBook('zzzzz');

console.log('end');
