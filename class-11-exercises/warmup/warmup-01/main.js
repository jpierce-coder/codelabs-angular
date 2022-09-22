
function calculate(a, b, operator) {
  if (operator === '+') {
    let total = (a + b);
    console.log(total);
    return total;
  } else if (operator === '-') {
    let total = (a - b);
    console.log(total);
    return total;
  } else if (operator === '*') {
    let total = (a * b);
    console.log(total);
    return total;
  } else if (operator === '/') {
    let total = (a / b);
    console.log(total);
    return total;
  }
}

// console.log(calculate(1,1, '+')); 
// calculate(2, 2, '-'); 

// calculate(3, 4, '*');

calculate(35, 7, '/');
