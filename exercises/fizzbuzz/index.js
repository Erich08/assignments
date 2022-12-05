'use strict';

function fizzBuzz() {
  let arrOfObj = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arrOfObj.push({ FizzBuzz: `${i}` });
    } else if (i % 3 === 0) {
      arrOfObj.push({ Fizz: `${i}` });
    } else if (i % 5 === 0) {
      arrOfObj.push({ Buzz: `${i}` });
    } else {
      console.log(i);
    }
  }
  return arrOfObj;
}

console.log(fizzBuzz());
