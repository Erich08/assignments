'use strict';

const input = document.getElementById('input');
const header = document.getElementById('header');
const messages = document.querySelector('.messages');
const theme = document.getElementById('theme-drop-down');
const left = document.getElementsByClassName('left');
const right = document.getElementsByClassName('right');
const leftOne = document.querySelector('.messages :nth-child(1)');
const rightOne = document.querySelector('.messages :nth-child(2)');
const leftTwo = document.querySelector('.messages :nth-child(3)');
const rightTwo = document.querySelector('.messages :nth-child(4)');


// Created this div and added the class name header to center the h1 and p elements
let headerDiv = document.createElement('div');
headerDiv.classList.add('header');

let headerEl = document.createElement('h1');
headerEl.textContent = 'JavaScript Made This!';

let para = document.createElement('p');
para.innerHTML += '<p><span class="name">Erich Hartnauer</span> wrote the JavaScript</p>'

header.append(headerDiv)
headerDiv.append(headerEl);
headerDiv.append(para);


// Removes the content of the conversation
let clear = document.getElementById('clear-button').addEventListener('click', (e) => {
    e.preventDefault();
    messages.textContent = '';
    console.log('hello');
})

//My solution to target the specific conversations without changing each conversation to the same thing if I were to use getElementsByClassName for example. I used :nth-child(n) to accomplish this. Although, it is quite verbose with all of the variables I had to declare. I am wondering if I could have used a for loop instead, but I am not sure as to how I would be able to specify exactly where I want each sentence to be. 
leftOne.textContent = 'I am learning JavaScript.';
leftTwo.textContent = 'That is the plan.';
rightOne.textContent = 'That is awesome! One day you will make a lot of money.';
rightTwo.textContent = 'You will get there. You just have to be persistent.';

theme.addEventListener('change', (e) => {
    if(e.target.value === 'theme-one') {
        leftOne.style.backgroundColor = 'blue';
        rightOne.style.backgroundColor = 'brown';
        leftTwo.style.backgroundColor = 'blue';
        rightTwo.style.backgroundColor = 'brown';
    } else if (e.target.value === 'theme-two') {
        leftOne.style.backgroundColor = 'red';
        rightOne.style.backgroundColor = 'black';
        leftTwo.style.backgroundColor = 'red';
        rightTwo.style.backgroundColor = 'black';
        rightOne.style.color = 'white';
        rightTwo.style.color = 'white';
    } else if (e.target.value === 'none') {
        leftOne.style.backgroundColor = '';
        rightOne.style.backgroundColor = '';
        leftTwo.style.backgroundColor = '';
        rightTwo.style.backgroundColor = '';
        rightOne.style.color = '';
        rightTwo.style.color = '';
    }
})

const newMessage = document.getElementById('new-message').addEventListener('click', (e) => {
    e.preventDefault()
    messages.append(input.value);
    input.value = '';
})


