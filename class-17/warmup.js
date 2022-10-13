// // warmup exercise #1

// function isAnagram(first, second){
//   let firstArray = first.split("")
//   firstArray = firstArray.sort();
//   console.log(firstArray);
//   let secondArray = second.split("")
//   secondArray = secondArray.sort();
//   console.log(secondArray);

//   for (let i = 0; i < firstArray.length; i++) {
//     if (firstArray.length === secondArray.length) {
//       if (firstArray[i] === secondArray[i]) {
//         console.log("These are anagrams!");
//         break;
//       } else {
//         console.log("These are NOT anagrams!");
//         break;
//       }
//     } else {
//       console.log("These two are not anagrams");
//       break;
//     }
//   }

// }

// // isAnagram("cinema", "iceman"); // true 
// isAnagram("orange", "yellow"); //false


// warmup exercise #2


function nameCount(person, sentence){
  let words = sentence.split(" ");
  let count = 0;
  let names = words.filter(element => element.includes(person))

  count = names.length;
  console.log(count)

}

let person = "John";
let sentence = "Congratulations John! John is a yoga master since the beginning of next week. A lot of last week began when John was only a banana. Trees from nectarines became apparent when he began mastering the weather"

nameCount(person, sentence); // 3
