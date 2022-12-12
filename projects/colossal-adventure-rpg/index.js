'use strict';

const readLine = require('readline-sync');
const greeting = console.log('Welcome to my Colossal Adventure RPG!');
const userName = readLine.question('Please tell me your name: ');
let userInventory = [];
let hasItems = false;
let hp = 100;
let enemyHp = 100;
let weaponEquipped = false;
let playerLevel = 1;
let experience = 0;

function walk() {
  const options = ['Walk', 'Player Info', 'Equip Weapon'];
  const userOption = readLine.keyInSelect(
    options,
    'Choose one of the following options:'
  );
  if (userOption === 0) {
    console.log('You continue walking...');
    const enemyAppears = Math.random();
    if (enemyAppears <= 0.4) {
      fight();
    }
  } else if (userOption === 1) {
    console.log(
      `**********\nUsername: ${userName}\nHP: ${hp}\nItems: ${userInventory}\nLevel: ${playerLevel}\n**********`
    );
    //Checks to see if the user has items and will run if === true;
  } else if (userOption === 2 && hasItems) {
    const equipWeapon = readLine.keyInYN(
      'Would you like to equip a weapon to increase your attack damage? '
    );
    if (equipWeapon === true) {
      weaponEquipped = true;
    }
  } else if (userOption === -1) {
    hp = 0;
    playAgain();
  }
}

function fight() {
  const willFight = readLine.keyIn(
    'A wild enemy has appeared! Press "f" to fight or "r" to attempt to run. ',
    { limit: 'fr' }
  );
  const attemptToRun = Math.random();
  if (willFight === 'f') {
    determineWinner();
  } else if (willFight === 'r' && attemptToRun >= 0.5) {
    console.log('You have successfully escaped.');
  } else if (attemptToRun < 0.5) {
    console.log('Your attempt to escape has failed. Prepare for the attack!');
    determineWinner();
  }
}

//This function handles the random enemy that appears as well as the random item a user will be given if they defeat the enemy.
function determineWinner() {
  const enemies = ['Orc', 'Goblin', 'Giant Spider', 'Minotaur'];
  const randomEnemy = Math.floor(Math.random() * enemies.length);
  const enemy = enemies[randomEnemy];
  const items = [' 🗡 ', ' 🪓 ', ' ⛏ ', ' 🏹 '];
  const randomItems = Math.floor(Math.random() * items.length);
  const playerItem = items[randomItems];

  while (hp >= 0 && enemyHp >= 0) {
    const playerDmg = randomDmg(10, 16);
    const enemyDmg = randomDmg(5, 8);
    const bonusDmg = randomDmg(5, 11);
    const attack = readLine.keyIn('Press "a" to attack! ', { limit: 'a' });
    //Checks to see if use has an equipped weapon and will add bonus damage if === true.
    if (weaponEquipped === true) {
      console.log(
        `**********\nYou attack the ${enemy} for ${playerDmg} points of damage + ${bonusDmg} points of bonus damage!`
      );
      enemyHp = enemyHp - (playerDmg + bonusDmg);
    } else {
      console.log(
        `**********\nYou attack the ${enemy} for ${playerDmg} points of damage!`
      );
      enemyHp = enemyHp - playerDmg;
    }
    console.log(
      `**********\nThe ${enemy} attacks you for ${enemyDmg} points of damage!\n**********`
    );
    hp = hp - enemyDmg;
    if (enemyHp <= 0) {
      console.log(
        '**********\nYou have slain your enemy and have been healed for 30 points of damage and an item has been added to your inventory. You have gained 25 points of experience!\n**********'
      );
      experience = experience + 25;
      if (experience === 100) {
        playerLevel++;
        hp = 100;
        experience = 0;
        console.log(
          `You have reached level ${playerLevel}! You have been fully healed.`
        );
      }
      hasItems = true;
      //Added if statement here to avoid adding 30 HP upon player leveling up so total HP doesn't exceed 100HP.
      if (hp < 100) {
        hp = hp + 30;
      }
      enemyHp = 100;
      userInventory.push(playerItem);
      break;
    } else if (hp <= 0) {
      //Asks the user if they would like to play again. If yes, resets enemy hp to 100 and clears out user inventory.
      console.log('**********\nYou have been slain!\n**********');
      playAgain();
      enemyHp = 100;
      userInventory = [];
      break;
    }
  }
}

//Allows the user to decide if they would like to play again or not.
function playAgain() {
  const playAgain = readLine.keyInYN('Would you like to play again? ');
  if (playAgain === true) {
    hp = 100;
  } else {
    console.log('Thank you for playing!');
  }
}

//Generates a random amount of damage within a specified range to handle enemy encounters.
function randomDmg(max, min) {
  const attackDamage = Math.floor(Math.random() * (max - min) + min);
  return attackDamage;
}

while (hp > 0) {
  walk();
}
