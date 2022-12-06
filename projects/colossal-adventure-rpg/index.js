'use strict';

const readLine = require('readline-sync');
const greeting = console.log('Welcome to the best console RPG ever created!');
const userName = readLine.question('Please tell me your name: ');
const userInventory = [];
let hp = 100;

function walk() {
  //TODO add option for user to check HP, name, and inventory
  const options = ['Walk', 'Player Info'];
  const userOption = readLine.keyInSelect(
    options,
    'Choose one of the following options:'
  );
  if (userOption === 0) {
    console.log('You continue walking...');
    const enemyAppears = Math.random().toFixed(2);
    if (enemyAppears <= 0.33) {
      fight();
    }
  } else if (userOption === 1) {
    console.log(`Username: ${userName} HP: ${hp} Items: `);
  } else if (userOption === -1) {
    hp = 0;
    playAgain();
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
    console.log("You're attempt to escape has failed. Prepare for the attack!");
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

function playAgain() {
  const playAgain = readLine.keyInYN('Would you like to play again? ');
  if (playAgain === true) {
    hp = 100;
    walk();
  } else {
    console.log('Thank you for playing!');
  }
}

while (hp > 0) {
  walk();
}
