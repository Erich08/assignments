'use strict';

const form = document.addItem;
const listDiv = document.getElementById('todos');
const listItem = document.getElementById('list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const item = form.title.value;
  //Dynamically creating ul in order to be able to delete all list items and then add new list items
  const ul = document.createElement('ul');
  listDiv.append(ul);

  const li = document.createElement('li');
  li.textContent = item;

  const deleteItem = document.createElement('button');
  deleteItem.textContent = 'x';
  deleteItem.setAttribute('class', 'delete');

  const editItem = document.createElement('button');
  editItem.setAttribute('class', 'edit');
  editItem.textContent = 'Edit';

  const saveItem = document.createElement('button');
  saveItem.setAttribute('class', 'save');
  saveItem.textContent = 'Save';

  ul.append(li, deleteItem, editItem, saveItem);
  form.title.value = '';

  const removeItem = document.getElementsByClassName('delete');
  Array.prototype.slice.call(removeItem).forEach((item) => {
    item.addEventListener('click', (e) => {
      e.target.parentNode.remove();
    });
  });

  const editAnItem = document.getElementsByClassName('edit');
  Array.prototype.slice.call(editAnItem).forEach((item) => {
    item.addEventListener('click', () => {
      li.contentEditable = true;
      li.style.backgroundColor = 'lightblue';
    });
  });

  const saveAnItem = document.getElementsByClassName('save');
  Array.prototype.slice.call(saveAnItem).forEach((item) => {
    item.addEventListener('click', () => {
      li.contentEditable = false;
      li.style.backgroundColor = 'white';
    });
  });
});
