'use strict';

const readLine = require('readline-sync');
const name = readLine.question('Welcome! What is your name? ');
// const beginGame = readLine.question(`Hello, ${name} are you ready to begin? `);
const foundKey = false;

function beginGame() {
  let beginGame;
  do {
    beginGame = readLine
      .question(
        `Hello, ${name}. Are you ready to begin? Yes or yes? HINT: You don't have a choice because you're locked in a room. `
      )
      .toLowerCase();
  } while (beginGame !== 'yes');
}

beginGame();
