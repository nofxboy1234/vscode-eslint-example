/* eslint-disable */
function greet() {
  console.log('Hello!');
}

function respond() {
  return setTimeout(() => {
    console.log('Hey!');
  }, 1000);
}

greet();
respond();
