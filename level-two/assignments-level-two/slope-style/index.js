'use strict';

function collectAnimals(...animals) {
  /*and here*/
  return animals;
}

console.log(collectAnimals('dog', 'cat', 'mouse', 'jackolope', 'platypus'));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

function combineFruit(fruit, sweets, vegetables) {
  return fruit.map((fruits) => {
    return { type: 'fruit', name: fruits };
  });
}

console.log(combineFruit(['apple', 'pear'], ['cake', 'pie'], ['carrot']));
//=> {
//     fruit: ["apple", "pear"],
//     sweets: ["cake", "pie"],
//     vegetables: ["carrot"]
//  }
const object = {
  location: 'Burly Idaho',
  duration: '2 weeks',
};

const { location, duration } = object;

console.log(parseSentence(location, duration));

function parseSentence(_________) {
  return `We're going to have a good time in ${location} for ${duration}`;
}

parseSentence({
  location: 'Burly Idaho',
  duration: '2 weeks',
});

const arr = ['Knife', 'Fork', 'Spoon'];

const [item1, item2, item3] = arr;

console.log(returnFirst(item1));

function returnFirst(items) {
  const firstItem = items; /*change this line to be es6*/
  return firstItem;
}

const favoriteActivities = [
  'magnets',
  'snowboarding',
  'philanthropy',
  'janitor work',
  'eating',
];

const [firstFav, secondFav, thirdFav] = favoriteActivities;

console.log(returnFavorites(firstFav, secondFav, thirdFav));

function returnFavorites(arr) {
  /*your code here*/
  return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}.`;
}

function combineAnimals(arr1, arr2, arr3) {
  return [...arr1, ...arr2, ...arr3];
}

const realAnimals = ['dog', 'cat', 'mouse'];
const magicalAnimals = ['jackolope'];
const mysteriousAnimals = ['platypus'];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]

function product(a, b, c, d, e) {
  let numbers = [a, b, c, d, e];

  return numbers.reduce((acc, number) => acc * number, 1);
}
