'use strict';

const readLine = require('readline-sync');
const name = readLine.question('Welcome! What is your name? ');
let riddleQuestion;
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

  if (userOption === 1) {
    console.log(
      'Ask you stick your hand in the hole you feel a surge of electricity and then nothing as you slip into darkness...'
    );
    tryAgain();
  } else if (userOption === 2) {
    lookForKey();
  } else {
    openDoor();
  }
}
//End of startGame function

//Logic to cover user selecting option 2.
function lookForKey() {
  console.log(
    'You look on the far side of the room and notice a table with a box on top that is labeled "key." It really cannot be this easy, can it?'
  );

  //Returns true if Y and false if N
  const yesOrNo = readLine.keyInYN(
    'Next to the box you see a button that says "DO NOT PRESS." Do you press it? '
  );

  if (yesOrNo === false) {
    let oneMoreChance = readLine.keyInYN(
      'That was not a wise choice... Would you like to play again? '
    );
    if (oneMoreChance === true) {
      startGame();
    } else {
      return;
    }
  }

  //Asks the user if they want to try and solve the riddle to obtain key to escape the room
  let askUserRiddle = readLine.keyInYN(
    'You hear a voice.. it is unclear at first, but then you hear it say, "If you can solve this simple riddle.. the box will be opened. You have 3 chances to answer correctly, or you will be locked in here forever. Would you like to play? " '
  );

  //For loop to continue asking the riddle until user either gets answer correct or runs out of guesses
  if (askUserRiddle === true) {
    for (let i = 0; i < 3; i++) {
      riddleQuestion = readLine.question(
        'How many months of the year have 28 days? You must spell out your answer... '
      );
      if (riddleQuestion === 'twelve') {
        console.log('That is the correct. Take the key... and leave.');
        break;
      } else if (riddleQuestion !== 'twelve') {
        guesses--;
        console.log(
          `That is incorrect. You have ${guesses} guesses remaining...`
        );
      }
    }
  } else if (askUserRiddle === false) {
    console.log(
      'There are no second chances. You are locked in here forever. Game over.'
    );
  }

  //Allows the user to play again if they desire.
  tryAgain();
}
//End of lookForKey function

function openDoor() {
  console.log('Of course the door is locked... it was worth a shot I guess.');
  lookForKey();
}

function tryAgain() {
  let tryAgain = readLine.keyInYN('Would you like to play again? ');
  if (tryAgain === true) {
    startGame();
    guesses = 3;
  } else {
    console.log('Better luck next time...');
  }
}

startGame();
