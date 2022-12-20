'use strict';

function sum(x, y) {
  //check data types first and throw error
  try {
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw 'You must enter numbers, not strings.';
    } else {
      return x + y;
    }
  } catch (err) {
    console.log(err);
  }
}

// console.log(sum('4', 7));

let user = { username: 'sam', password: '123abc' };
function login(username, password) {
  //check credentials
  try {
    if (username.username !== 'sam' || username.password !== '123abc') {
      throw 'Username or password are incorrect.';
    } else {
      return 'You have been logged in.';
    }
  } catch (err) {
    console.log(err);
  }
}

console.log(login(user));
