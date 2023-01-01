'use strict';

const readline = require('readline-sync');
const characters = ['Mario', 'Luigi'];
const userName = readline.keyInSelect(
  characters,
  'Which character would you like to play as?'
);
//Will continue to run until user.status === 'dead'
const playGame = setInterval(randomNum, 2000);

class Player {
  constructor(name, totalCoins, status, hasStar) {
    this.name = name;
    this.totalCoins = totalCoins;
    this.status = status;
    this.hasStar = hasStar;
  }

  setName(namePicked) {
    this.name = namePicked;
  }

  addCoin() {
    this.totalCoins = this.totalCoins + 1;
  }

  print() {
    console.log(
      `\n Name: ${this.name}\n Coins: ${this.totalCoins}\n Status: ${this.status}\n`
    );
  }

  gotHit() {
    if (this.status === 'Small') {
      this.status = 'Dead';
      console.log('You have died!');
      clearInterval(playGame);
    } else if (this.status === 'Big') {
      this.status = 'Small';
    } else if (this.status === 'Powered Up' && this.hasStar) {
      console.log('The star protected you!');
      this.hasStar = false;
    } else if (this.status === 'Powered Up') {
      this.status = 'Big';
    }
  }

  gotPowerup() {
    if (this.status === 'Small') {
      this.status = 'Big';
    } else if (this.status === 'Big') {
      this.status = 'Powered Up';
    } else if (this.status === 'Powered Up') {
      this.hasStar = true;
      console.log('You got a star!');
    }
  }
}

//Instantiates a new player
const user = new Player('name', 0, 'Big', false);

//Selects the player name based off of user's choice
if (userName === 0) {
  user.setName('Mario');
  playGame;
} else if (userName === 1) {
  user.setName('Luigi');
  playGame;
} else {
  //Does not allow program to run if the user selects 'cancel'
  clearInterval(playGame);
}

//Generates a random number between 0 and 2
function randomNum() {
  const num = Math.floor(Math.random() * (3 - 0) + 0);
  if (num === 0) {
    user.gotHit();
  } else if (num === 1) {
    user.gotPowerup();
  } else {
    user.addCoin();
  }
  user.print();
}
