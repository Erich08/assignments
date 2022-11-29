'use strict';

function capitilizeAndLowercase(string) {
  let uppercase = string.toUpperCase();
  let lowercase = string.toLowerCase();

  return uppercase + lowercase;
}

// console.log(capitilizeAndLowercase('random'));

function findMiddleIndex(string) {
  let middleIndex = Math.floor(string.length / 2);

  return middleIndex;
}

// console.log(findMiddleIndex('randomstringgoeshere'));

function returnFirstHalf(string) {
  let findHalf = findMiddleIndex(string);
  let firstHalf = string.slice(0, findHalf);

  return firstHalf;
}

// console.log(returnFirstHalf('hello world'));

function capFirstHalfLowSecondHalf(string) {
  let findHalf = findMiddleIndex(string);
  let firstHalf = string.slice(0, findHalf).toUpperCase();
  let secondHalf = string.slice(findHalf).toLowerCase();

  return firstHalf + secondHalf;
}

// console.log(capFirstHalfLowSecondHalf('hello'));

function capitalize(string) {
  let arr = string.toLowerCase().split(' ');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr.join(' ');
}

console.log(capitalize('hey friends! practice practice practice!'));
