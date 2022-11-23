'use strict';

const square = document.getElementById('square');

square.addEventListener('mouseover', (e) => {
  square.style.backgroundColor = 'blue';
});

square.addEventListener('mousedown', (e) => {
  square.style.backgroundColor = 'red';
});

square.addEventListener('mouseup', (e) => {
  square.style.backgroundColor = 'yellow';
});

square.addEventListener('dblclick', (e) => {
  square.style.backgroundColor = 'green';
});

document.body.addEventListener('wheel', (e) => {
  square.style.backgroundColor = 'orange';
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'r') {
    square.style.backgroundColor = 'red';
  } else if (e.key === 'y') {
    square.style.backgroundColor = 'yellow';
  } else if (e.key === 'b') {
    square.style.backgroundColor = 'blue';
  } else if (e.key === 'g') {
    square.style.backgroundColor = 'green';
  } else if (e.key === 'o') {
    square.style.backgroundColor = 'orange';
  }
});
