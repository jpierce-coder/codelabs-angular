// Exercise 02

let sentence = 'Welcome to the harborside manor. Here we will make you fresh fruit, and tall glasses of refreshing water!';

function reversed(str) {
  let splitString = str.split('').reverse().join('');
  return splitString;
}


console.log(reversed(sentence));
