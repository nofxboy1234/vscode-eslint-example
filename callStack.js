/* eslint-disable */
function greet() {
  console.log('Hello!');
}

function respond() {
  setTimeout(() => {
    console.log('Hey!');
  }, 1000);

  setTimeout(() => {
    console.log('Hey2!');
  }, 1000);
}

greet();
respond();
