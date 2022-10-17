function convertToMiles(num) {
  const numInput = document.getElementById('converting').value;
  const converted = numInput * 0.621371;
  // console.log(converted);

  document.getElementById("conversion").append(converted);
}


// console.log(convertToMiles(554));
