'use strict';

//Write a function that takes an array of numbers and returns the largest (without using Math.max())
//TODO: Iterate through the array and check to see if the current value is > the next value. If so, push that value into an array, if not, pop that value and push the new highest value until all values have been compared and then return the highest.

function largest(arr) {
  let largestNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  return largestNum;
}

// console.log(largest([6, 13, 250, 3, 500, 4, 7]));
// console.log(largest([3, 5, 2, 8, 1]));
// console.log(largest([-13, 40, 3, 0, 19, 22]));

function lettersWithStrings(arr, char) {
  let stringsWithLetters = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(char)) {
      stringsWithLetters.push(arr[i]);
    }
  }
  return stringsWithLetters;
}

// console.log(lettersWithStrings(['$hello!', '%%^%%', 'test!'], '!'));
console.log(lettersWithStrings(['#3', '$$$', 'C%4!', 'Hey!'], '!'));
// console.log(
//   lettersWithStrings(['yellow', 'green', '^up^', 'down', 'dog'], 'h')
// );

function isDivisible(num1, num2) {
  let result = num1 / num2;
  if (Number.isInteger(result)) {
    return true;
  } else {
    return false;
  }
}

// console.log(isDivisible(4, 2));
// console.log(isDivisible(9, 3));
// console.log(isDivisible(15, 4));
