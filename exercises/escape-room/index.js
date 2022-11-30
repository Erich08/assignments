'use strict';

const readLine = require('readline-sync');
const name = readLine.question('Welcome! What is your name? ');

function startGame() {
  //Forces the user to enter yes because I want them to play my game
  let beginGame;
  do {
    beginGame = readLine
      .question(
        `Hello, ${name}. Are you ready to begin? Yes or yes? HINT: You don't have a choice because you're locked in a room. `
      )
      .toLowerCase();
  } while (beginGame !== 'yes');

  console.log(
    'You find yourself in a locked room. You have three options: (1) put your hand in a hole you found in the wall, (2) look for a key, (3) or simply open the door...'
  );

  //Ensures user enters option 1, 2, or 3.
  let userOption = readLine.keyIn(
    'Which option do you choose? Choose wisely...  ',
    { limit: '$<1-3>' }
  );

  //   while (userOption !== 1 || userOption !== 2 || userOption !== 3) {
  //     console.log('Please enter 1, 2, or 3');
  //   }
}
startGame();
