const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};

// Take in a string, count characters in string, return as object
const countLetters = (string) => {
  const countResults = {};  // Empty object

  for (const input of string) {    // Loop through the string
    if (input !== " ") { //  prevent space between lettersfrom being added as property
      if (countResults[input]) {   // if object property (letter) already exsists and can be referenced
      countResults[input] += 1; // adding additional counts for exsisting letter
      } else {
        countResults[input] = 1; // adding letter for 1st time - can't be first if statement or else loop well always create new letters
      }
    }
  }
  return countResults;
};

// TEST countLetters
console.log(countLetters("Y E Z U U S")); 
console.log(countLetters("   ")); 

// TEST CODE
console.log(assertEqual((countLetters("YEZUUS"))["U"], 3)); // should fail
console.log(assertEqual((countLetters("LHL"))["H"], 1)); // should pass
console.log(assertEqual((countLetters("lighthouse in the house"))["u"], 2)); // should pass
console.log(assertEqual((countLetters("YEZUUS"))["U"], 2)); // should pass
console.log(assertEqual((countLetters("LHL"))["H"], 2)); // should fail