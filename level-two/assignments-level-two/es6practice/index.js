'use strict';

var name = 'John';
var age = 101;

function runForLoop(pets) {
  var petObjects = [];
  for (var i = 0; i < pets.length; i++) {
    var pet = { type: pets[i] };
    let name;
    if (pets[i] === 'cat') {
      name = 'fluffy';
    } else {
      name = 'spot';
    }
    console.log('pet name: ', name);
    pet.name = name;
    petObjects.push(pet);
  }
  console.log('man name: ', name);
  return petObjects;
}

runForLoop(['cat', 'dog']);

const carrots = ['bright orange', 'ripe', 'rotten'];

function mapVegetables(arr) {
  return arr.map((carrot) => {
    return { type: 'carrot', name: carrot };
  });
}

// console.log(mapVegetables(carrots));

const people = [
  {
    name: 'Princess Peach',
    friendly: false,
  },
  {
    name: 'Luigi',
    friendly: true,
  },
  {
    name: 'Mario',
    friendly: true,
  },
  {
    name: 'Bowser',
    friendly: false,
  },
];

function filterForFriendly(arr) {
  return arr.filter((person) => person.friendly);
}

console.log(filterForFriendly(people));

const doMathSum = (a, b) => a + b;

const produceProduct = (a, b) => a * b;

console.log(doMathSum(4, 5));
console.log(produceProduct(4, 5));

const printString = (firstName, lastName, age) =>
  `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`;

console.log(printString('Kat', 'Stark', 40));

const animals = [
  {
    type: 'dog',
    name: 'theodore',
  },
  {
    type: 'cat',
    name: 'whiskers',
  },
  {
    type: 'pig',
    name: 'piglette',
  },
  {
    type: 'dog',
    name: 'sparky',
  },
];

function filterForDogs(arr) {
  return arr.filter((animal) => animal.type === 'dog');
}

console.log(filterForDogs(animals));
