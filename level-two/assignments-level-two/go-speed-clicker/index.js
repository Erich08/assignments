'use strict';

const btnOne = document.getElementById('btn-one');
const btnTwo = document.getElementById('btn-two');
const btnOneContainer = document.getElementById('button-one');
const btnTwoContainer = document.getElementById('button-two');
let btnOneClicks = 0;
let btnTwoClicks = 0;

function btnOneClickCount() {
  btnOneClicks++;
  localStorage.setItem('buttonOne', btnOneClicks);
  let clicks = localStorage.getItem('buttonOne');
  console.log(clicks);
  let timer = setInterval(function () {}, 1000);
  function stopTimer() {
    clearInterval(timer);
    btnOne.removeEventListener('click', btnOneClickCount);
  }
  setTimeout(stopTimer, 10000);
}

function btnTwoClickCount() {
  btnTwoClicks++;
  localStorage.setItem('buttonTwo', btnTwoClicks);
  let clicks = localStorage.getItem('buttonTwo');
  console.log(clicks);
  let timer = setInterval(function () {}, 1000);
  function stopTimer() {
    clearInterval(timer);
    btnTwo.removeEventListener('click', btnTwoClickCount);
  }
  setTimeout(stopTimer, 10000);
}

btnOne.addEventListener('click', btnOneClickCount);

btnTwo.addEventListener('click', btnTwoClickCount);

//TODO: Set an interval with a countdown of X seconds. Clear that interval after the elapsed time. Remove the event listeners from both buttons and then display the amount of times the buttons were clicked.
