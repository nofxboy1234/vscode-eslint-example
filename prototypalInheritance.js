/* eslint-disable */
class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log('Woof!');
  }
}

class Chihuahua extends Dog {
  constructor(name) {
    super(name);
  }

  smallBark() {
    console.log('Small woof!');
  }
}
// console.log(Dog);
// console.log('\n');
// console.log(Dog.prototype);
// console.log('\n');
// console.log(Dog.prototype.constructor);
// console.log('\n');

// const dog1 = new Dog('Daisy', 'Labrador', 'black');
// console.log(dog1);
// const dog2 = new Dog('Jack', 'Jack Russell', 'white');

const myPet = new Chihuahua('Max');

console.log('end');
