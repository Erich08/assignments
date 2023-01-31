const readline = require('readline-sync');
const input = readline
  .question('What phrase would you like to encrypt? ')
  .toLowerCase();
let shift = parseInt(
  readline.question('How many letters would you like to shift? ')
);

while (shift < 0 || shift > 26) {
  console.log('Shift amount must be between 0 and 26');
  shift = parseInt(
    readline.question('How many letters would you like to shift? ')
  );
}

let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let result = '';

for (let i = 0; i < input.length; i++) {
  let char = input[i];
  if (alphabet.indexOf(char) === -1) {
    result += char;
    continue;
  }
  const shiftedIndex = (alphabet.indexOf(char) + shift) % 26;
  result += alphabet[shiftedIndex];
}

console.log(result);
