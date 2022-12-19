'use strict';

const heading = document.querySelector('header');
const btnOne = document.getElementById('btn-one');
const btnTwo = document.getElementById('btn-two');
const btnOneContainer = document.getElementById('button-one');
const btnTwoContainer = document.getElementById('button-two');
const btnOneTotal = document.getElementById('btn-one-total');
const btnTwoTotal = document.getElementById('btn-two-total');
const btnOneTimer = document.getElementById('btn-one-timer');
const btnTwoTimer = document.getElementById('btn-two-timer');
let btnOneClicks = 0;
let btnTwoClicks = 0;
let timeLeftOne = 9;
let timeleftTwo = 9;
let spanOne = document.createElement('span');
let spanTwo = document.createElement('span');

function btnOneClickCount() {
  btnOneClicks++;
  localStorage.setItem('buttonOne', btnOneClicks);
}

function btnTwoClickCount() {
  btnTwoClicks++;
  localStorage.setItem('buttonTwo', btnTwoClicks);
}

//Fires as soon as the page loads. Added this here in order to avoid having it live inside of the event listener which was causing it to refire everytime the button was clicked.
window.addEventListener('load', (event) => {
  btnOneTotal.textContent = localStorage.getItem('buttonOne');
  let timer = setInterval(function () {
    spanOne.textContent = ` ${timeLeftOne--}`;
    btnOneTimer.appendChild(spanOne);
    if (timeLeftOne === -1) {
      spanOne.textContent = ` Times up!`;
      btnOneTimer.appendChild(spanOne);
    }
  }, 1000);
  function stopTimer() {
    let clicks = localStorage.getItem('buttonOne');
    clearInterval(timer);
    btnOne.removeEventListener('click', btnOneClickCount);
    btnOneTotal.textContent = `Total: ${clicks}`;
  }
  setTimeout(stopTimer, 10000);
  console.log('hello');
});

//Fires as soon as the page loads. Added this here in order to avoid having it live inside of the event listener which was causing it to refire everytime the button was clicked.
window.addEventListener('load', (event) => {
  btnTwoTotal.textContent = localStorage.getItem('buttonTwo');
  let timer = setInterval(function () {
    spanTwo.textContent = ` ${timeleftTwo--}`;
    btnTwoTimer.appendChild(spanTwo);
    if (timeleftTwo === -1) {
      spanTwo.textContent = ` Times up!`;
      btnTwoTimer.appendChild(spanTwo);
    }
  }, 1000);
  function stopTimer() {
    let clicks = localStorage.getItem('buttonTwo');
    clearInterval(timer);
    btnTwo.removeEventListener('click', btnTwoClickCount);
    btnTwoTotal.textContent = `Total: ${clicks}`;
  }
  setTimeout(stopTimer, 10000);
});

btnOne.addEventListener('click', btnOneClickCount);

btnTwo.addEventListener('click', btnTwoClickCount);
