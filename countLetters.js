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
    if (countResults[input]) {
      countResults[input] += 1; // adding additional counts for exsisting letter
    } else {
      if (input !== " ") { //  prevent space between lettersfrom being added as property
        countResults[input] = 1; // adding letter for 1st time - can't be first if statement or else loop well always create new letters
      }
    }
  }
  return countResults;
};

console.log(countLetters("Y E Z U U S"));
console.log(countLetters("lighthouse in the house"));
console.log(countLetters("   "));

console.log(assertEqual((countLetters("YEZUUS"))["U"], 2));
console.log(assertEqual((countLetters("LHL"))["H"], 1));