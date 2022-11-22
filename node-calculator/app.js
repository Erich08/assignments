'use strict';

const readLine = require('readline-sync');

const num1 = parseInt(readLine.question('Please enter your first number: '));
const num2 = parseInt(readLine.question('Please enter your second number: '));
let operation = readLine.question(
  'Please enter the operation to perform: add, sub, mul, div: '
);

if (operation === 'add') {
  console.log(add(num1, num2));
} else if (operation === 'mul') {
  console.log(mul(num1, num2));
} else if (operation === 'div') {
  console.log(div(num1, num2));
} else if (operation === 'sub') {
  console.log(sub(num1, num2));
}

function add() {
  return num1 + num2;
}

function mul() {
  return num1 * num2;
}

function div() {
  return num1 / num2;
}

function sub() {
  return num1 - num2;
}
