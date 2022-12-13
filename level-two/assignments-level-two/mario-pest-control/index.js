'use strict';

const form = document.pestForm;
const total = document.getElementById('price');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const goomba = form.goomba.value * 5;
  const piranha = form.piranha.value * 7;
  const blooper = form.blooper.value * 10;
  const koopa = form.koopa.value * 15;
  const payment = goomba + piranha + blooper + koopa;
  const span = document.createElement('span');
  span.textContent = ' ' + payment + ' ' + 'Coins';
  total.appendChild(span);
  form.goomba.value = '';
  form.piranha.value = '';
  form.blooper.value = '';
  form.koopa.value = '';
});
