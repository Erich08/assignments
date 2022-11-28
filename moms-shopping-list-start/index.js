'use strict';

const form = document.addItem;
const listDiv = document.getElementById('todos');
const listItem = document.getElementById('list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const item = form.title.value;
  //Dynamically creating ul in order to be able to delete all list items and then add new list items
  //   const ul = document.createElement('ul');
  //   ul.setAttribute('id', 'list');
  //   listDiv.append(ul);

  const li = document.createElement('li');

  listItem.appendChild(li);

  const div = document.createElement('div');
  div.textContent = item;
  li.appendChild(div);

  const deleteItem = document.createElement('button');
  deleteItem.textContent = 'x';
  deleteItem.setAttribute('class', 'delete');
  li.appendChild(deleteItem);

  const editItem = document.createElement('button');
  editItem.setAttribute('class', 'edit');
  editItem.textContent = 'Edit';
  li.appendChild(editItem);

  const saveItem = document.createElement('button');
  saveItem.setAttribute('class', 'save');
  saveItem.textContent = 'Save';
  saveItem.hidden = true;

  //   li.appendChild(div, deleteItem, editAnItem, saveAnItem);
  form.title.value = '';

  //   const removeItem = document.getElementsByClassName('delete');
  //   Array.prototype.slice.call(removeItem).forEach((item) => {
  //     item.addEventListener('click', (e) => {
  //       e.target.parentNode.remove();
  //     });
  //   });

  deleteItem.addEventListener('click', () => {
    div.parentElement.remove();
  });

  const editAnItem = document.getElementsByClassName('edit');
  Array.prototype.slice.call(editAnItem).forEach((item) => {
    item.addEventListener('click', () => {
      li.contentEditable = true;
      li.style.backgroundColor = 'lightgray';
      editItem.hidden = true;
      saveItem.hidden = false;
    });
  });

  const saveAnItem = document.getElementsByClassName('save');
  Array.prototype.slice.call(saveAnItem).forEach((item) => {
    item.addEventListener('click', () => {
      li.contentEditable = false;
      li.style.backgroundColor = 'white';
      editItem.hidden = false;
      saveItem.hidden = true;
    });
  });
});
