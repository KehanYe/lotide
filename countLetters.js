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
      countResults[input] += 1;
    } else {
      if (input !== " ") { //  prevent " " from being added as property
        countResults[input] = 1;
      }
    }
  }
  return countResults;
};

console.log(countLetters("Y E Z U U S"));
console.log(countLetters("Kanye West is here"));
console.log(countLetters("   "));

console.log(assertEqual((countLetters("YEZUUS"))["U"], 2));
console.log(assertEqual((countLetters("LHL"))["H"], 1));