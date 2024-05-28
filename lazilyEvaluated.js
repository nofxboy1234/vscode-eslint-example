/* eslint-disable */
function getVeryLargeNumber(num1, num2) {
  return num1 * num2;
}

function* getLargeNumber() {
  let number = 0;
  while (true) {
    yield getVeryLargeNumber(10, number);
    number++;
  }
}

const it = getLargeNumber();
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
