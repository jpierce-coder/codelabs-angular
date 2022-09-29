// Exercise 02

let sentence = 'Welcome to the harborside manor. Here we will make you fresh fruit, and tall glasses of refreshing water!';

function reversed(str) {
  let newStr = '';
  for (let i = sentence.length - 1; i >= 0; --i) {
    newStr += str[i]
  }
}


console.log(reversed(sentence));
