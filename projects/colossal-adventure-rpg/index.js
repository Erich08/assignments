'use strict';

const readLine = require('readline-sync');
const greeting = console.log('Welcome to the best console RPG ever created!');
const userName = readLine.question('Please tell me your name: ');
const userInventory = [];
let hp = 100;

function walk() {
  const userWalk = readLine.question('Press "w" to walk. ').toLowerCase();
  if (userWalk === 'w') {
    const enemyAppears = Math.random().toFixed(2);
    if (enemyAppears <= 0.33) {
      fight();
    }
  } else {
    userWalk;
  }
}

function fight() {
  const willFight = readLine.question(
    'A wild enemy has appeared! Press "f" to fight or "r" to attempt to run. '
  );
  const attemptToRun = Math.random().toFixed(2);
  if (willFight === 'f') {
    determineWinner();
  } else if (willFight === 'r' && attemptToRun >= 0.5) {
    console.log('You have successfully escaped.');
  } else if (attemptToRun < 0.5) {
    determineWinner();
  }
}

function determineWinner() {
  const winner = Math.random().toFixed(2);
  if (winner <= 0.33) {
    console.log('You lost this battle and have taken 20 damage!');
    hp = hp - 20;
    console.log(`You have ${hp} HP remaining`);
  } else {
    console.log('You are victorious! You have taken 10 points of damage!');
    hp = hp - 10;
    console.log(`You have ${hp} HP remaining`);
  }
}

while (hp > 0) {
  walk();
}
