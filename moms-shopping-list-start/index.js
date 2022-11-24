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
  editItem.setAttribute('id', 'edit');
  editItem.textContent = 'Edit';

  ul.append(li, deleteItem, editItem);
  form.title.value = '';

  const removeItem = document.getElementsByClassName('delete');
  Array.prototype.slice.call(removeItem).forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.target.parentNode.remove();
    });
  });
});
