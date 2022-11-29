'use strict';

const people = ['Jon', 'Jacob', 'Jingle', 'Heimer', 'Schmidt'];
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function forception(people, alphabet) {
  let peopleList = [];
  for (let i = 0; i < people.length; i++) {
    peopleList.push(people[i].split('').join('') + ':');
    for (let j = 0; j < alphabet.length; j++) {
      peopleList.push(alphabet[j].toUpperCase().split('').join(''));
    }
  }
  return peopleList;
}

console.log(forception(people, alphabet));
