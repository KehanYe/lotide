const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false; // check if the array lengths are different
  for (let i = 0; i < arr1.length; i++) { // loop through elements in an array to each other
    if (arr1[i] === arr2[i]) {     // check whether the two elements of the array are equal
      continue;
    } else {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = (arr1, arr2) => {
  console.log(eqArrays(arr1, arr2) === true ? `✅✅✅ Assertion Passed: ${arr1} === ${arr2}` : `🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};


const letterPositions = (sentence) => {
  const result = {};
 for(let i = 0; i < sentence.length; i++){ 
   let letterPosition = sentence[i];
  if (letterPosition !== " ") { // just like countLetter, need logic preventing inclusion of spaces
     if (result[letterPosition]) {    // if object.property (letter) already exsists and can be referenced
       result[letterPosition].push[i]; // push the additional indices of character/letter positions
     } else { result[letterPosition] = [i]; //  only if there's no letter, logic will start new array for new letter
     }
   } 
 }
 return result;
 
 };


// TEST letterPositions
console.log(( letterPositions("Kanye").K, [0])); // how to add "letterPositions of K in Kanye" into log?
console.log((letterPositions("Kanye").y, [3]));
console.log((letterPositions("Kaaaanye").K, [1, 2, 3]));

// // TEST CODE
// assertArraysEqual(letterPositions("hello").h, [0]); // should pass
// assertArraysEqual(letterPositions("hello").e, [1]); // should pass
// assertArraysEqual(letterPositions("hello").l, [2, 3]); // should fail
// assertArraysEqual(letterPositions("hello").o, [4]); // should pass