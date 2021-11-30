const findKeyByValue = function(object, value) {
  let keysGenre = Object.keys(object); // returns arr with all keys
  answer = keysGenre.find(key => object[key] === value); // finds key in arr where value is equal to parameter value (tv show)
  return answer;
  
};

module.exports = findKeyByValue;