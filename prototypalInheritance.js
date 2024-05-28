/* eslint-disable */
function Dog(name, breed, color) {
  this.name = name;
  this.breed = breed;
  this.color = color;
}
Dog.prototype.bark = function () {
  console.log('Woof!');
};

// console.log(Dog);
// console.log('\n');
// console.log(Dog.prototype);
// console.log('\n');
// console.log(Dog.prototype.constructor);
// console.log('\n');

const dog1 = new Dog('Daisy', 'Labrador', 'black');
console.log(dog1);
const dog2 = new Dog('Jack', 'Jack Russell', 'white');

console.log('end');
