// Exercise 01

let name = 'Amy';

function updateName(name) {
  let sentence = 'Hello, my name is John. My friend\'s name is also John';
  let newSentence = sentence.replace(/John/g, name);
  console.log(newSentence);
}


updateName('Billy');
