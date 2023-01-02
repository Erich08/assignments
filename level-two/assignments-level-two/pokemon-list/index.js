'use strict';

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.vschool.io/pokemon', true);
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const JSONdata = xhr.responseText;
    const data = JSON.parse(JSONdata);
    const resultsArr = data.objects[0].pokemon;
    showData(resultsArr);
  }
};

function showData(arr) {
  for (let i = 0; i < arr.length; i++) {
    const p = document.createElement('p');
    p.textContent = arr[i].name;
    document.body.appendChild(p);
  }
}
