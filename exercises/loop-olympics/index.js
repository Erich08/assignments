'use strict';

const fruit = ['banana', 'orange', 'apple', 'kiwi'];
const everyOtherFruit = ['banana', 'orange', 'apple', 'kiwi', 'pear', 'peach'];
const numArr = [];
const names = [];
const occupations = [];
const grid = [];

const peopleArray = [
  {
    name: 'Harrison Ford',
    occupation: 'Actor',
  },
  {
    name: 'Justin Bieber',
    occupation: 'Singer',
  },
  {
    name: 'Vladimir Putin',
    occupation: 'Politician',
  },
  {
    name: 'Oprah',
    occupation: 'Entertainer',
  },
];

// ["Harrison Ford", "Vladimir Putin"] // names
// ["Singer", "Entertainer"] // occupations

//Prelims

// for( let i = 0; i <= 9; i++) {
//   console.log(i);
// }

// for( let i = 9; i >= 0; i--) {
//   console.log(i);
// }

// for( let i = 0; i < fruit.length; i++) {
//   console.log(fruit[i]);
// }

//Bronze Medal

// for( let i = 0; i <= 9; i++) {
//   numArr.push([i])
// }

// for( let i = 0; i <= 100; i++ ) {
//   if( i % 2 === 0) {
//     console.log(i);
//   }
// }

// for( let i = 0; i < everyOtherFruit.length; i++) {
//   if( i % 2 !== 0) {
//     console.log(everyOtherFruit[i]);
//   }
// }

//Silver Medal

// for( let i = 0; i < peopleArray.length; i++) {
//   console.log(peopleArray[i].name);
// }

// for( let i = 0; i < peopleArray.length; i++) {
//   names.push(peopleArray[i].name);
//   occupations.push(peopleArray[i].occupation);
// }

// console.log(names);
// console.log(occupations);

// for( let i = 0; i < peopleArray.length; i++) {
//   if(i % 2 === 0) {
//     names.push(peopleArray[i].name);
//   } else if (i % 2 !== 0 ) {
//     occupations.push(peopleArray[i].occupation);
//   }
// }

// console.log(names);
// console.log(occupations);

//Gold Medal - Nesting

for (let i = 0; i < 3; i++) {
  grid[i] = [];
  for (let j = 0; j < 3; j++) {
    grid[i][j] = 0;
  }
}

console.log(grid);

for (let i = 0; i < 3; i++) {
  grid[i] = [];
  for (let j = 0; j < 3; j++) {
    grid[i][j] = i;
  }
}

console.log(grid);

for (let i = 0; i < 3; i++) {
  grid[i] = [];
  for (let j = 0; j < 3; j++) {
    grid[i][j] = j;
  }
}

console.log(grid);

for (let i = 0; i < 3; i++) {
  grid[i] = [];
  for (let j = 0; j < 3; j++) {
    grid[i][j] = 'x';
  }
}

console.log(grid);
