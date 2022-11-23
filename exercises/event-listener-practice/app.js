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

square.addEventListener('mouseleave', (e) => {
  square.style.backgroundColor = 'black';
});
