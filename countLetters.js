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

module.exports = countLetters;