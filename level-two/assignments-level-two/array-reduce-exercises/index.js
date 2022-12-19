'use strict';

function total(arr) {
  // your code here
  return arr.reduce((acc, num) => (acc += num));
}

console.log(total([1, 2, 3])); // 6

function stringConcat(arr) {
  // your code here
  return arr.reduce(function (acc, num) {
    acc += num;
    return acc;
  });
}

console.log(stringConcat([1, 2, 3])); // "123"

function totalVotes(arr) {
  // your code here
  return arr.reduce(function (acc, num) {
    if (num.voted) {
      acc++;
    }
    return acc;
  }, 0);
}

var voters = [
  { name: 'Bob', age: 30, voted: true },
  { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false },
];
console.log(totalVotes(voters)); // 7

function shoppingSpree(arr) {
  // your code here
  return arr.reduce(function (acc, price) {
    acc += price.price;
    return acc;
  }, 0);
}

var wishlist = [
  { title: 'Tesla Model S', price: 90000 },
  { title: '4 carat diamond ring', price: 45000 },
  { title: 'Fancy hacky Sack', price: 5 },
  { title: 'Gold fidgit spinner', price: 2000 },
  { title: 'A second Tesla Model S', price: 90000 },
];

console.log(shoppingSpree(wishlist)); // 227005

function flattenArr(arr) {
  return arr.flat(Infinity);
}

function flatten(arr) {
  // your code here
  const newArr = arr.reduce(function (acc, index) {
    if (Array.isArray(index)) {
      acc = acc.concat(flattenArr(index));
    } else {
      acc.push(index);
    }
  }, []);
  return newArr;
}

var arrays = [['1', '2', '3'], [true], [4, 5, 6]];

console.log(flattenArr(arrays)); // ["1", "2", "3", true, 4, 5, 6];

var voters = [
  { name: 'Bob', age: 30, voted: true },
  { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false },
];

function voterResults(arr) {
  // your code here
  return arr.reduce(
    function (acc, votes) {
      if (votes.age >= 18 && votes.age <= 25 && votes.voted) {
        acc.numYoungVotes++;
      }
      if (votes.age >= 18 && votes.age < 26) {
        acc.numYoungPeople++;
      }
      if (votes.age > 26 && votes.age < 36 && votes.voted) {
        acc.numMidVotesPeople++;
      }
      if (votes.age > 25 && votes.age < 36) {
        acc.numMidsPeoples++;
      }
      if (votes.age >= 36 && votes.age <= 55 && votes.voted) {
        acc.numOldVotesPeople++;
      }
      if (votes.age > 35 && votes.age < 56) {
        acc.numOldsPeoples++;
      }
      return acc;
    },
    {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidsPeoples: 0,
      numOldVotesPeople: 0,
      numOldsPeoples: 0,
    }
  );
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/
