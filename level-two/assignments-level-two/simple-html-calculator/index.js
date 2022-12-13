'use strict';

const add = document.add;
const subtract = document.subtract;
const multiply = document.multiply;
const addSpan = document.getElementById('addSpan');
const subtractSpan = document.getElementById('subtractSpan');
const multiplySpan = document.getElementById('multiplySpan');

console.log(add);

add.addEventListener('submit', (e) => {
  e.preventDefault();
  const num1 = parseInt(add.numOne.value);
  const num2 = parseInt(add.numTwo.value);
  const result = num1 + num2;
  add.numOne.value = '';
  add.numTwo.value = '';
  const span = document.createElement('span');
  span.textContent = ' ' + result;
  addSpan.appendChild(span);
});

subtract.addEventListener('submit', (e) => {
  e.preventDefault();
  const num1 = parseInt(subtract.numOne.value);
  const num2 = parseInt(subtract.numTwo.value);
  const result = num1 - num2;
  subtract.numOne.value = '';
  subtract.numTwo.value = '';
  const span = document.createElement('span');
  span.textContent = ' ' + result;
  subtractSpan.appendChild(span);
});

multiply.addEventListener('submit', (e) => {
  e.preventDefault();
  const num1 = parseInt(multiply.numOne.value);
  const num2 = parseInt(multiply.numTwo.value);
  const result = num1 * num2;
  multiply.numOne.value = '';
  multiply.numTwo.value = '';
  const span = document.createElement('span');
  span.textContent = ' ' + result;
  multiplySpan.appendChild(span);
});
