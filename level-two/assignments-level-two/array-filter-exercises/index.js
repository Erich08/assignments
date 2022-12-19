'use strict';

function fiveAndGreaterOnly(arr) {
  // your code here
  return arr.filter((num) => num > 5);
}
// test
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

function evensOnly(arr) {
  // your code here
  return arr.filter((num) => num % 2 === 0);
}
// test
console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

function fiveCharactersOrFewerOnly(arr) {
  // your code here
  return arr.filter((name) => {
    if (name.length <= 5) {
      return name;
    }
  });
}
// test
console.log(
  fiveCharactersOrFewerOnly(['dog', 'wolf', 'by', 'family', 'eaten', 'camping'])
); // ["by", "dog", "wolf", "eaten"]

function peopleWhoBelongToTheIlluminati(arr) {
  // your code here
  return arr.filter((name) => name.member);
}
// test
console.log(
  peopleWhoBelongToTheIlluminati([
    { name: 'Angelina Jolie', member: true },
    { name: 'Eric Jones', member: false },
    { name: 'Paris Hilton', member: true },
    { name: 'Kayne West', member: false },
    { name: 'Bob Ziroll', member: true },
  ])
);
// =>
//[ { name: 'Angelina Jolie', member: true },
//  { name: 'Paris Hilton', member: true },
//  { name: 'Bob Ziroll', member: true } ]

function ofAge(arr) {
  // your code here
  return arr.filter((age) => {
    if (age.age >= 18) {
      return age;
    }
  });
}
// test
console.log(
  ofAge([
    { name: 'Angelina Jolie', age: 80 },
    { name: 'Eric Jones', age: 2 },
    { name: 'Paris Hilton', age: 5 },
    { name: 'Kayne West', age: 16 },
    { name: 'Bob Ziroll', age: 100 },
  ])
);
// =>
//[ { name: 'Angelina Jolie', age: 80 },
//  { name: 'Bob Ziroll', age: 100 } ]
