const letterPositions = (sentence) => {
  const result = {};
  for (let i = 0; i < sentence.length; i++) {
    let letterPosition = sentence[i];
    if (letterPosition !== " ") { // just like countLetter, need logic preventing inclusion of spaces
      if (result[letterPosition]) {    // if object.property (letter) already exsists and can be referenced
        result[letterPosition].push(i); // push the additional indices of character/letter positions
      } else {
        result[letterPosition] = [i]; //  only if there's no letter, logic will start new array for new letter
      }
    }
  }
  return result;
 
};

module.exports = letterPositions;