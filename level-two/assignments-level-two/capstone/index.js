'use strict';

const todoform = document.todoform;

axios
  .get('https://api.vschool.io/erich8/todo')
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));

todoform.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Hello');
});
