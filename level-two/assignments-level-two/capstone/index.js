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

  for (let i = 0; i < data.length; i++) {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const span = document.createElement('span');
    const p = document.createElement('p');
    const img = document.createElement('img');
    const btn = document.createElement('button');
    const btn2 = document.createElement('button');
    const btn3 = document.createElement('button');
    const chkbox = document.createElement('input');
    const span2 = document.createElement('span');

    chkbox.type = 'checkbox';
    chkbox.name = 'completed';
    chkbox.value = 'complete';
    chkbox.id = 'completed';

    span2.textContent = 'Completed? ';
    span2.append(chkbox);

    h1.textContent = data[i].title;
    h1.setAttribute('id', `${data[i]._id}`);

    span.textContent = data[i].description;

    p.textContent = data[i].price;

    img.src = data[i].imgUrl;

    btn.textContent = 'Delete';

    btn2.textContent = 'Edit';

    btn3.textContent = 'Save';

    div.append(h1, span, p, img, span2, btn, btn2, btn3);

    btn3.hidden = true;

    document.getElementById('todo-list').appendChild(div);

    //Allows user to delete Todos
    btn.addEventListener('click', (e) => {
      axios
        .delete(`https://api.vschool.io/erich8/todo/${data[i]._id}`)
        .then((res) => location.reload())
        .catch((err) => console.log(err));
    });

    btn2.addEventListener('click', () => {
      h1.contentEditable = true;
      span.contentEditable = true;
      p.contentEditable = true;

      h1.style.backgroundColor = 'lightgray';
      span.style.backgroundColor = 'lightgray';
      p.style.backgroundColor = 'lightgray';

      btn2.hidden = true;
      btn3.hidden = false;
    });

    btn3.addEventListener('click', () => {
      const edit = {
        title: h1.textContent,
        description: span.textContent,
        price: p.textContent,
      };
      h1.contentEditable = false;
      span.contentEditable = false;
      p.contentEditable = false;

      h1.style.backgroundColor = 'black';
      span.style.backgroundColor = 'black';
      p.style.backgroundColor = 'black';

      btn2.hidden = false;
      btn3.hidden = true;

      axios
        .put(`https://api.vschool.io/erich8/todo/${data[i]._id}`, edit)
        .then((res) => location.reload())
        .catch((err) => console.log(err));
    });

    chkbox.addEventListener('click', (e) => {
      console.log(e);
      if (completed.checked === true) {
        // e.target.span.span.div.h1.style.textDecoration = 'line-through';
        console.log('hello');
      }
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

//Calling getData() here to have todo list persist through page reload
window.onload = function () {
  getData();
};
