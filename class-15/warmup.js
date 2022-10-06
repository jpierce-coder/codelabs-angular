let numbers = [];

for (let i = 0; i < 51; i++) {
  numbers.push(i);
  
}

console.log(numbers);

console.log(numbers.filter(n => numbers[n] % 2 !== 0))

for (let i = 0; i < numbers.length; i++) {
  sum = 0;
  sum += numbers[i];
}

console.log(sum);
