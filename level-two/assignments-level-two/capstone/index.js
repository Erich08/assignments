'use strict';

const todoform = document.todoform;

//Performs a get request to the API for the data
function getData() {
  axios
    .get('https://api.vschool.io/erich8/todo')
    .then((res) => listData(res.data))
    .catch((err) => console.log(err));
}

//Performs a POST request to the API and then calls getData and sends that data to listData to render the information to the DOM
todoform.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTodo = {
    title: todoform.title.value,
    description: todoform.description.value,
    imgUrl: todoform.imgUrl.value,
    price: parseInt(todoform.price.value),
  };
  todoform.title.value = '';
  todoform.description.value = '';
  todoform.imgUrl.value = '';
  todoform.price.value = '';

  axios
    .post('https://api.vschool.io/erich8/todo', newTodo)
    .then((res) => getData())
    .catch((err) => console.log(err));
});

//Calls clearList to prevent duplicates then loops through the data to append the information to the DOm
function listData(data) {
  clearList();
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    console.log(data[i]._id);
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = data[i].title;
    const span = document.createElement('span');
    span.textContent = data[i].description;
    const p = document.createElement('p');
    p.textContent = `Price: $${data[i].price}`;
    const img = document.createElement('img');
    img.src = data[i].imgUrl;
    const btn = document.createElement('button');
    btn.textContent = 'Delete';
    div.append(h1, span, p, img, btn);
    document.getElementById('todo-list').appendChild(div);
    btn.addEventListener('click', (e) => {
      axios
        .delete(`https://api.vschool.io/erich8/todo/${data[i]._id}`)
        .then((res) => location.reload())
        .catch((err) => console.log(err));
    });
  }
}

//Handles new list items being added by clearing the DOM in order to prevent duplicates
function clearList() {
  const todolist = document.getElementById('todo-list');
  while (todolist.firstChild) {
    todolist.removeChild(todolist.firstChild);
  }
}

window.onload = function () {
  getData();
};
