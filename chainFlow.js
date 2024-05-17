/* eslint-disable */
function delay(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, time);
  });
}

delay(1000) // step 1
  .then(function STEP2() {
    console.log('step 2 (after 1000ms)');
    return delay(2000);
  })
  .then(function STEP3() {
    console.log('step 3 (after another 2000ms)');
  })
  .then(function STEP4() {
    console.log('step 4 (next Job)');
    return delay(2000);
  })
  .then(function STEP5() {
    console.log('step 5 (after another 2000ms)');
  });
