'use strict';

const header = document.getElementById('header');
const messages = document.querySelector('.messages');

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

//TODO: Bronze - There's some sub par conversation going on in this messaging app. You have two tasks to help give it either a clean slate, or a positive start.
// - Write some custom JavaScript to automatically change the words of the conversation to something fun and good.
