'use strict';

const readLine = require('readline-sync');
const name = readLine.question('Welcome! What is your name? ');
let guesses = 3;

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
  let userOption;
  userOption = parseInt(
    readLine.keyIn('Which option do you choose? Choose wisely...  ', {
      limit: '$<1-3>',
    })
  );

  console.log(typeof userOption);

  if (userOption === 1) {
    console.log('You died... better luck next time.');
  } else if (userOption === 2) {
    lookForKey();
  }
}

//Logic to cover user selecting option 2.
function lookForKey() {
  console.log(
    'You look on the far side of the room and notice a table with a box on top that is labeled "key." It really cannot be this easy, can it?'
  );

  //Returns true if Y and false if N
  const yesOrNo = readLine.keyInYN(
    'Next to the box you see a button that says "DO NOT PRESS." Do you press it? '
  );

  if (yesOrNo === true) {
    readLine.question(
      'You hear a voice.. it is unclear at first, but then you hear it say, "If you can solve this simple riddle.. the box will be opened. How many months of the year have 28 days? You have 3 chances to answer correctly, or you will be locked in here forever."'
    );
  }
}

function playAgain() {
  startGame();
}

startGame();
